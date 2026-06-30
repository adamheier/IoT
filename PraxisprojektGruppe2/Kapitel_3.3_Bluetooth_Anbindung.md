### 3.3 Bluetooth-Verbindung: TI Sensor zum Raspberry Pi

#### Eingesetzte Hardware und Software

Für die Bluetooth-Kommunikation und die direkte MQTT-Weiterleitung wurden folgende Komponenten eingesetzt:

- **Sensorknoten:** Texas Instruments CC2650 SensorTag (Bluetooth Low Energy 4.0)
- **Gateway:** Raspberry Pi mit integriertem Bluetooth-Adapter unter Raspberry Pi OS
- **Programmiersprache:** Python 3 (asynchron, `asyncio`)
- **BLE-Bibliothek:** `bleak` – plattformunabhängige Python-Bibliothek für BLE-Kommunikation über das GATT-Protokoll
- **MQTT-Bibliothek:** `paho-mqtt` (Eclipse Paho) – publiziert die ausgelesenen Messwerte direkt an den Broker

#### Integriertes Sensor-zu-MQTT-Skript

Die Anbindung wird durch ein einziges Python-Skript realisiert, das BLE-Auslese und MQTT-Publishing kombiniert. Es gliedert sich in vier Bausteine: **Konfiguration**, **MQTT-Setup**, **Verbindungsaufbau mit Sensoraktivierung** sowie den **Notification-Handler** zur Dekodierung und Veröffentlichung der Messwerte.

In der Konfiguration werden die MAC-Adresse des SensorTag, der Broker und das Eingangs-Topic festgelegt. Das `SENSORS`-Dictionary bildet die drei genutzten BLE-Sensoren auf ihre GATT-UUIDs (`service`, `data`, `config`, `period`) ab; diese UUIDs wurden vorab durch Auslesen der Service- und Charakteristik-Struktur des SensorTag ermittelt.

```python
ADDRESS = "98:07:2D:27:F1:86"
MQTT_BROKER = "IWILR4-11.CAMPUS.fh-ludwigshafen.de"
MQTT_TOPIC = "Sensor"

SENSORS = {
    "humidity":    {"data": "f000aa21-...", "config": "f000aa22-...", ...},
    "barometer":   {"data": "f000aa41-...", "config": "f000aa42-...", ...},
    "optical_lux": {"data": "f000aa71-...", "config": "f000aa72-...", ...},
}
```

Beim Programmstart verbindet sich der Paho-MQTT-Client mit dem Broker (Port 1883) und startet seinen Netzwerk-Loop in einem Hintergrund-Thread. Anschließend scannt das Skript per `BleakScanner.find_device_by_address()` nach dem SensorTag und öffnet eine `BleakClient`-Verbindung. Für jeden Sensor werden zwei Schritte ausgeführt: Erstens wird der Sensor durch Schreiben von `0x01` in seine Config-Charakteristik aktiviert (im Auslieferungszustand sind alle Sensoren des CC2650 deaktiviert), zweitens werden über `start_notify()` BLE-Notifications abonniert. Das Skript läuft danach in einer Endlosschleife, bis es manuell beendet wird.

```python
async with BleakClient(device) as client:
    for name, uuids in SENSORS.items():
        await client.write_gatt_char(uuids["config"], b"\x01")   # Sensor einschalten
        await client.start_notify(uuids["data"], notification_handler)
        print(f"-> {name} aktiviert.")
    while True:
        await asyncio.sleep(1)
```

#### Dekodierung der Rohdaten

Bei jeder neuen Messung ruft `bleak` den `notification_handler` auf. Dieser identifiziert den Sensor anhand der sendenden Daten-UUID, dekodiert die rohen Bytes gemäß SensorTag-Datenblatt und übergibt die fertigen Messwerte an die Funktion `publish()`. Bemerkenswert ist, dass der Feuchtesensor in einem Paket **zwei** Größen liefert – so entstehen aus **drei** BLE-Sensoren die **vier** Messgrößen, die später im Node-RED-Splitter getrennt werden (vgl. Abschnitt 3.5):

| BLE-Sensor | Rohdaten-Dekodierung | Veröffentlichte Messgröße(n) |
|---|---|---|
| `humidity` | `Temp = raw/65536 · 165 − 40`; `Hum = raw/65536 · 100` | `Temperature` (°C), `Humidity` (%RH) |
| `barometer` | `Druck = raw/100` | `AirPressure` (hPa) |
| `optical_lux` | `Lux = m · 0,01 · 2^e` (Mantisse `m`, Exponent `e` aus 16-Bit-Wert) | `Illuminance` (lux) |

Die Funktion `publish()` verpackt jeden Wert in ein einheitliches JSON-Objekt und sendet es auf dem Topic `Sensor` an den Broker (vgl. Abschnitt 3.4):

```json
{
  "device": "ti_cc2650",
  "type": "Illuminance",
  "value": 38.99,
  "timestamp": 1780051874.037
}
```

Das vollständige Skript `sensor.py` ist nachfolgend abgedruckt.

---

### Anhang D: Vollständiges Skript `sensor.py`

```python
import asyncio
import json
import time
from bleak import BleakClient, BleakScanner
import paho.mqtt.client as mqtt

# --- KONFIGURATION ---
ADDRESS = "98:07:2D:27:F1:86"
MQTT_BROKER = "IWILR4-11.CAMPUS.fh-ludwigshafen.de"
MQTT_TOPIC = "Sensor"

# UUIDs für den TI CC2650 SensorTag
SENSORS = {
    "humidity": {
        "service": "f000aa20-0451-4000-b000-000000000000",
        "data": "f000aa21-0451-4000-b000-000000000000",
        "config": "f000aa22-0451-4000-b000-000000000000",
        "period": "f000aa23-0451-4000-b000-000000000000"
    },
    "barometer": {
        "service": "f000aa40-0451-4000-b000-000000000000",
        "data": "f000aa41-0451-4000-b000-000000000000",
        "config": "f000aa42-0451-4000-b000-000000000000",
        "period": "f000aa44-0451-4000-b000-000000000000"
    },
    "optical_lux": {
        "service": "f000aa70-0451-4000-b000-000000000000",
        "data": "f000aa71-0451-4000-b000-000000000000",
        "config": "f000aa72-0451-4000-b000-000000000000",
        "period": "f000aa73-0451-4000-b000-000000000000"
    },
}

# --- MQTT SETUP ---
mqtt_client = mqtt.Client()
mqtt_client.connect(MQTT_BROKER, 1883, 60)
mqtt_client.loop_start()


def publish(type_name, value):
    payload = json.dumps({
        "device": "ti_cc2650",
        "type": type_name,
        "value": value,
        "timestamp": round(time.time(), 3),
    })
    mqtt_client.publish(MQTT_TOPIC, payload)
    print(f"Versendet: {type_name} -> {value}", flush=True)


def notification_handler(sender, data):
    """Verarbeitet eingehende Bluetooth-Daten und sendet sie per MQTT."""
    try:
        sender_uuid = sender.uuid if hasattr(sender, 'uuid') else str(sender)
        sensor_name = "Unknown"
        for name, uuids in SENSORS.items():
            if uuids["data"].lower() == sender_uuid.lower():
                sensor_name = name
                break

        if sensor_name == "humidity":
            raw_temp = int.from_bytes(data[0:2], byteorder='little')
            raw_hum = int.from_bytes(data[2:4], byteorder='little')
            publish("Temperature", round((raw_temp / 65536.0) * 165 - 40, 2))
            publish("Humidity", round((raw_hum / 65536.0) * 100, 2))
        elif sensor_name == "barometer":
            raw_pres = int.from_bytes(data[3:6], byteorder='little')
            publish("AirPressure", round(raw_pres / 100.0, 2))
        elif sensor_name == "optical_lux":
            raw_lux = int.from_bytes(data, byteorder='little')
            m = raw_lux & 0x0FFF
            e = (raw_lux & 0xF000) >> 12
            publish("Illuminance", round(m * (0.01 * pow(2, e)), 2))

    except Exception as e:
        print(f"Fehler in notification_handler: {e} | sender={sender} | data={data.hex()}", flush=True)


async def main(address):
    try:
        print("Suche nach dem SensorTag...")
        device = await BleakScanner.find_device_by_address(address, timeout=15.0)
        if device is None:
            print(f"Gerät {address} nicht gefunden.")
            return

        async with BleakClient(device) as client:
            print(f"Verbunden mit {address}")

            for name, uuids in SENSORS.items():
                # 1. Sensor einschalten (0x01 schreiben)
                await client.write_gatt_char(uuids["config"], b"\x01")
                # 2. Benachrichtigungen abonnieren
                await client.start_notify(uuids["data"], notification_handler)
                print(f"-> {name} aktiviert.")

            print("\nObservation läuft. Daten werden an MQTT gesendet...")
            while True:
                await asyncio.sleep(1)

    except Exception as e:
        print(f"Fehler: {e}")


# Programm starten
if __name__ == "__main__":
    asyncio.run(main(ADDRESS))
```
