# Präsentation MW220 – Gruppe 2
## TI Sensor Bluetooth- und MQTT-Anbindung, Edge Computing mit Filterung der Sensordaten für die Zustandsüberwachung

**Hochschule für Wirtschaft und Gesellschaft Ludwigshafen**
MW220 Internet of Things – Technologien und Anwendungen | SoSe 2026
Prof. Dr. Frank Thomé | Präsentation: 11. Juni 2026

**Gesamtdauer:** ~28 Minuten | **4 Personen** à ~6–7 min

---

## Aufteilung auf einen Blick

| Person | Thema | Folien | Zeit |
|---|---|---|---|
| Person 1 | Projektkontext & Systemarchitektur | 1–5 | ~6 min |
| Person 2 | Theoretische Grundlagen | 6–8 | ~6 min |
| Person 3 | Implementierung & Node-RED | 9–13 | ~7 min |
| Person 4 | Live-Demo, Fazit & Ausblick | 14–18 + Demo | ~9 min |

---

---

# TEIL 1 – PROJEKTKONTEXT & SYSTEMARCHITEKTUR
## Person 1

---

## Folie 1 – Deckblatt

**[FOLIENTITEL]**
TI Sensor Bluetooth- und MQTT-Anbindung
Edge Computing mit Filterung der Sensordaten für die Zustandsüberwachung

**[FOLIENINHALT]**
- MW220 Internet of Things – Technologien und Anwendungen
- Gruppe 2 | Sommersemester 2026
- Hochschule für Wirtschaft und Gesellschaft Ludwigshafen
- Betreuer: Prof. Dr. Frank Thomé
- Datum: 11. Juni 2026
- [Namen der Gruppenmitglieder]

**[SPRECHNOTIZEN – Person 1]**
Guten Tag, mein Name ist [Name] und ich präsentiere heute gemeinsam mit meinen Kolleginnen und Kollegen unsere Projektergebnisse aus dem Modul MW220. Wir sind Gruppe 2 und haben uns mit der drahtlosen Sensoranbindung, der MQTT-Kommunikation und der Datenverarbeitung mit Node-RED beschäftigt. Ich starte mit dem Projektkontext und der Systemarchitektur, dann erläutert [Person 2] die theoretischen Grundlagen, [Person 3] unsere Implementierung und abschließend führt [Person 4] die Live-Demo durch und zieht unser Fazit.

---

## Folie 2 – Agenda

**[FOLIENTITEL]**
Agenda

**[FOLIENINHALT]**
1. Projektkontext & Systemarchitektur *(Person 1)*
2. Theoretische Grundlagen: Bluetooth, MQTT, Edge Computing *(Person 2)*
3. Implementierung: Python, MQTT-Konfiguration, Node-RED *(Person 3)*
4. Live-Demo & Fazit *(Person 4)*

**[SPRECHNOTIZEN – Person 1]**
Unsere Präsentation gliedert sich in vier Teile. Zunächst stelle ich das Gesamtprojekt und unsere Aufgabe als Gruppe 2 vor. Dann werden wir die technischen Grundlagen erläutern, die Implementierung vorstellen – und am Ende zeigen wir das alles live in Betrieb.

---

## Folie 3 – Das Gesamtprojekt

**[FOLIENTITEL]**
„LEGO Mindstorms Color Sorter meets Industrie 4.0"

**[FOLIENINHALT]**
→ Ein LEGO Mindstorms EV3-System sortiert Bausteine nach Farbe
→ Eingebettet in eine vollständige IoT-Infrastruktur

| Gruppe | Aufgabe |
|---|---|
| Gruppe 1 | LEGO EV3 Steuerung & Sensorauslese |
| **Gruppe 2** | **BT-Anbindung, MQTT, Edge Computing (Node-RED)** |
| Gruppe 3 | Datenbankanbindung (MariaDB) |
| Gruppe 4 | ThingsBoard-Dashboard & Visualisierung |

→ Gemeinsam bilden alle Gruppen eine durchgängige Industrie-4.0-Pipeline

**[SPRECHNOTIZEN – Person 1]**
Das übergreifende Lehrprojekt heißt „LEGO Mindstorms Color Sorter meets Industrie 4.0". Grundlage ist ein LEGO EV3-System, das Bausteine nach Farben sortiert – ein vereinfachtes Modell einer industriellen Produktionsanlage. Vier Gruppen decken zusammen die gesamte IoT-Wertschöpfungskette ab: von der Sensorik über die Kommunikation und Datenverarbeitung bis hin zur Visualisierung. Unsere Gruppe 2 ist das Bindeglied zwischen der physischen Welt – dem Sensor – und der digitalen Verarbeitungsinfrastruktur.

---

## Folie 4 – Aufgabe Gruppe 2

**[FOLIENTITEL]**
Aufgabe Gruppe 2: Drei Teilziele

**[FOLIENINHALT]**
**Teilziel 1 – Bluetooth-Anbindung**
TI SensorTag CC2650 → Raspberry Pi
Drahtlose Übertragung von Temperatur, Licht, Luftdruck, Luftfeuchtigkeit

**Teilziel 2 – MQTT-Weiterleitung**
Raspberry Pi → MQTT-Broker (IWILR4-11)
Strukturierte Topics, JSON-Payload, QoS 2

**Teilziel 3 – Edge Computing & Filterung**
Node-RED auf IWILR4-10
Rate-Limiting, Observation-Format, Alarm-Logik

→ Rohdaten → Struktur → gefilterte Observations für alle nachgelagerten Gruppen

**[SPRECHNOTIZEN – Person 1]**
Unsere drei Teilziele bauen aufeinander auf. Zuerst müssen die Sensordaten drahtlos vom TI SensorTag CC2650 zum Raspberry Pi gelangen – das ist Bluetooth. Dann werden die Daten über MQTT an den zentralen Broker weitergeleitet. Und schließlich verarbeitet Node-RED diese Daten am Edge: filtert, strukturiert und stellt sie den nachgelagerten Gruppen in einem einheitlichen Format bereit. Ohne unser Bindeglied hätte keine der anderen Gruppen Sensordaten zur Verfügung.

---

## Folie 5 – Systemarchitektur Gruppe 2

**[FOLIENTITEL]**
Systemarchitektur: Von BLE bis zu den Ausgangs-Topics

**[FOLIENINHALT]**
```
TI CC2650 SensorTag
       │
       │  Bluetooth Low Energy (BLE, IEEE 802.15.1)
       ▼
 Raspberry Pi  ──── sensor.py (Python/bleak)
       │
       │  MQTT, Port 1883, Topic: „Sensor"
       ▼
 MQTT-Broker IWILR4-11
       │
       │  MQTT, QoS 2
       ▼
 Node-RED  IWILR4-10:1880
       │
       ├── Factory/ConditionMonitoring/Temperature
       ├── Factory/ConditionMonitoring/Humidity
       ├── Factory/ConditionMonitoring/AirPressure
       └── Factory/ConditionMonitoring/Illuminance
                  │
                  ▼
         ThingsBoard (Gr. 4) / DB (Gr. 3)
```

Einordnung: Perception Layer → Network Layer → Data Processing Layer

**[SPRECHNOTIZEN – Person 1]**
Diese Folie zeigt die vollständige Architektur unseres Teilsystems. Der TI SensorTag sendet per Bluetooth Low Energy Messdaten an den Raspberry Pi. Ein Python-Skript – sensor.py – empfängt diese Daten und publiziert sie als JSON auf dem MQTT-Topic „Sensor". Der zentrale Broker auf IWILR4-11 verteilt die Nachrichten, Node-RED auf IWILR4-10 abonniert sie und verarbeitet sie zu strukturierten Observations, die dann über vier spezifische Topics an alle nachgelagerten Gruppen bereitstehen. Das entspricht dem klassischen IoT-Drei-Schichten-Modell: Perception, Network und Data Processing Layer. Ich übergebe jetzt an [Person 2] für die theoretischen Grundlagen.

---

---

# TEIL 2 – THEORETISCHE GRUNDLAGEN
## Person 2

---

## Folie 6 – Bluetooth Low Energy (BLE)

**[FOLIENTITEL]**
Bluetooth Low Energy: Die Basis der Sensor-Kommunikation

**[FOLIENINHALT]**
**Standard:** IEEE 802.15.1 | Frequenz: 2,402–2,480 GHz
**Besonderheit:** Frequenzsprungverfahren (1.600 Sprünge/s) → Interferenzresistenz

**GATT-Architektur (BLE-Kommunikationsmodell):**
- **Central** (Raspberry Pi) liest Daten vom **Peripheral** (SensorTag)
- **Service** → gruppiert verwandte Funktionen (z. B. Temperaturdienst)
- **Charakteristikum** → einzelner Datenpunkt (z. B. Temperaturwert)
- **Notification** → Sensor sendet automatisch bei neuer Messung

**Warum BLE für dieses Projekt?**
- TI CC2650 hat BLE nativ eingebaut
- Batteriebetrieb über Monate möglich
- Reichweite ~10 m deckt Laborumgebung ab

| Technologie | Reichweite | Energieverbrauch | Datenrate |
|---|---|---|---|
| **BLE** | 1–100 m | sehr niedrig | ~1 Mbit/s |
| WLAN | 30–100 m | hoch | >100 Mbit/s |
| ZigBee | 10–100 m | niedrig | 250 kbit/s |

**[SPRECHNOTIZEN – Person 2]**
Corona Warn App wurde damals auch mit BLE genutzt
Guten Tag, ich bin [Name] und erläutere die technologischen Grundlagen. Beginnen wir mit Bluetooth Low Energy. BLE ist eine seit 2010 standardisierte Variante von Bluetooth, die auf minimalen Stromverbrauch optimiert ist. Das für uns wichtige Konzept ist das GATT-Protokoll: Der Raspberry Pi als Central fragt Daten vom SensorTag als Peripheral ab. Der SensorTag hat mehrere Dienste – zum Beispiel einen Temperaturdienst – und innerhalb jedes Dienstes gibt es Charakteristika, die die eigentlichen Messwerte enthalten. Durch Notifications bekommen wir automatisch einen neuen Wert, sobald sich etwas ändert. BLE war für uns die richtige Wahl, weil der SensorTag es nativ unterstützt und wir keine zusätzliche Hardware brauchen.

---

## Folie 7 – MQTT-Protokoll

**[FOLIENTITEL]**
MQTT: Das wichtigste IoT-Protokoll

**[FOLIENINHALT]**
**Architektur: Publish/Subscribe über Message Broker**
```
Python-Skript (Publisher)
    │ Topic: „Sensor", Payload: JSON
    ▼
  MQTT Broker (IWILR4-11)
    │
    ├──▶ Node-RED (Subscriber)
    └──▶ Weitere Clients
```

**Kernkonzepte:**
- **Topics:** Hierarchisch, z. B. `Factory/ConditionMonitoring/Temperature`
- **QoS 0** – kein Zustellgarantie | **QoS 1** – mindestens einmal | **QoS 2** – genau einmal
- **Retained Message:** neuer Subscriber erhält sofort letzten bekannten Wert
- **Last Will & Testament:** Broker meldet automatisch Verbindungsabbruch

**Warum MQTT statt HTTP?**
→ Minimaler Protokoll-Header (~2 Byte) vs. HTTP-Overhead (~800 Byte)
→ Lose Kopplung: Publisher und Subscriber kennen sich nicht
→ OASIS-Standard seit 2013, nativ von Node-RED unterstützt

**[SPRECHNOTIZEN – Person 2]**
MQTT ist das meistverwendete Protokoll im IoT-Umfeld – und das aus gutem Grund. Das Publish/Subscribe-Modell entkoppelt Datenproduzenten von Datenkonsumenten vollständig. Unser Python-Skript publiziert Sensordaten an den Broker, ohne zu wissen, wer sie konsumiert. Node-RED abonniert die Topics, ohne zu wissen, woher die Daten kommen. Das macht das System flexibel: Wenn eine neue Gruppe Daten benötigt, abonniert sie einfach das passende Topic, ohne dass wir unsere Seite ändern müssen. Wir nutzen QoS 2 für den Eingang, weil jede Messung exakt einmal verarbeitet werden soll. Im Vergleich zu HTTP ist der Overhead verschwindend gering – entscheidend für ressourcenbeschränkte Geräte.

---

## Folie 8 – Edge Computing & Node-RED

**[FOLIENTITEL]**
Edge Computing & Node-RED: Intelligenz am Rand des Netzes

**[FOLIENINHALT]**
**Edge/Fog Computing:**
- Verarbeitung direkt beim Datenentstehungsort (Raspberry Pi als Fog-Node)
- Vs. Cloud-Verarbeitung:

| | Edge (Raspberry Pi) | Cloud |
|---|---|---|
| Latenz | Millisekunden | Sekunden |
| Datenvolumen | reduziert (gefiltert) | vollständig |
| Ausfallsicherheit | funktioniert offline | abhängig von Verbindung |

**Node-RED:**
- Flow-basierte, visuelle Programmierumgebung (IBM/OpenJS Foundation)
- Basiert auf Node.js, läuft im Browser
- Realisiert **Stream-Processing-Konzepte:**
  - **Continuous Queries:** dauerhaft laufende Filter auf Datenstrom
  - **Rate Limiting:** Drosselung auf 1 Nachricht/Minute
  - **Threshold Monitoring:** Schwellenwertüberwachung in Echtzeit

**[SPRECHNOTIZEN – Person 2]**
Edge Computing bedeutet: Wir verarbeiten die Daten nicht in der Cloud, sondern direkt auf dem Raspberry Pi im Hochschulnetz. Das hat drei wesentliche Vorteile: kürzere Latenzen, weniger Datenvolumen in der Infrastruktur, und das System funktioniert auch, wenn eine Cloud-Verbindung ausfällt. Node-RED ist das Werkzeug, mit dem wir diese Edge-Verarbeitung visuell implementieren. Es realisiert klassische Konzepte aus dem Stream-Processing-Bereich: fortlaufende Filterung des Datenstroms, zeitliche Drosselung und Schwellenwertüberwachung in Echtzeit. Das sehen wir gleich in der Live-Demo. Ich übergebe an [Person 3].

---

---

# TEIL 3 – IMPLEMENTIERUNG
## Person 3

---

## Folie 9 – Python: Bluetooth-Verbindung

**[FOLIENTITEL]**
Implementierung: Bluetooth-Anbindung mit Python

**[FOLIENINHALT]**
**Zweistufiger Ansatz:**

**Schritt 1 – `find_and_connect.py` (Discovery)**
```python
ADDRESS = "98:07:2D:27:F1:86"  # TI CC2650 SensorTag

device = await BleakScanner.find_device_by_address(ADDRESS, timeout=15.0)
# → Listet alle GATT-Services und Charakteristika auf
# → Ermöglicht gezielte Identifikation der Daten-UUIDs
```

**Schritt 2 – `sensor.py` (Produktivbetrieb)**
```python
for name, uuids in SENSORS.items():
    await client.write_gatt_char(uuids["config"], b"\x01")  # Sensor aktivieren
    await client.start_notify(uuids["data"], notification_handler)  # Daten empfangen
```

**Rohdaten-JSON (publiziert auf Topic `Sensor`):**
```json
{ "device": "ti_cc2650", "type": "temperature",
  "value": 26.18, "timestamp": 1780051874.037 }
```

**[SPRECHNOTIZEN – Person 3]**
Guten Tag, ich bin [Name] und zeige unsere Implementierung. Wir haben die Bluetooth-Anbindung in zwei Schritten entwickelt. Zuerst haben wir ein Discovery-Skript geschrieben, das sich mit dem SensorTag verbindet und alle GATT-Services und Charakteristika auflistet. Damit konnten wir die richtigen UUIDs für jeden Sensortyp identifizieren. Das eigentliche Produktivskript – sensor.py – aktiviert dann jeden Sensor durch Schreiben von 0x01 in das Config-Charakteristikum und abonniert anschließend die Notifications. Bei jeder neuen Messung wandelt der Notification-Handler die Rohdaten in ein kompaktes JSON-Format um und publiziert es auf dem MQTT-Topic „Sensor".

---

## Folie 10 – MQTT-Konfiguration & Topics

**[FOLIENTITEL]**
MQTT-Konfiguration: Broker, Topics und Payload-Transformation

**[FOLIENINHALT]**
**Broker:** `IWILR4-11.CAMPUS.fh-ludwigshafen.de`, Port 1883

**Zwei-Stufen-Pipeline:**

| Stufe | Topic | Format |
|---|---|---|
| Eingang | `Sensor` | Rohdaten (device, type, value, timestamp) |
| Ausgang | `Factory/ConditionMonitoring/Temperature` | Observation-Format |
| Ausgang | `Factory/ConditionMonitoring/Humidity` | Observation-Format |
| Ausgang | `Factory/ConditionMonitoring/AirPressure` | Observation-Format |
| Ausgang | `Factory/ConditionMonitoring/Illuminance` | Observation-Format |

**Observation-Format (Ausgang):**
```json
{
  "Observation": {
    "MachineID": "CC2650STK", "SensorTypeCode": "temperature",
    "LocationID": "A1.005",   "MeasureContent": 26.18,
    "MeasureUnitCode": "°C",  "DateTime": "2026-05-29T10:50:01.741Z"
  }
}
```

*[Screenshot: MQTT Explorer mit eingehenden Observation-Nachrichten]*

**[SPRECHNOTIZEN – Person 3]**
Die MQTT-Infrastruktur ist in zwei Stufen aufgebaut. Das Python-Skript publiziert kompakte Rohdaten auf dem Topic „Sensor". Node-RED abonniert dieses Topic, transformiert die Rohdaten und publiziert strukturierte Observation-Nachrichten auf vier spezifischen Ausgangs-Topics. Das Observation-Format enthält alle Metadaten, die nachgelagerte Gruppen benötigen: Geräte-ID, Sensortyp, Standort, Messwert mit Einheit und ISO-8601-Zeitstempel. Dieser Screenshot zeigt, wie die Nachrichten in Echtzeit ankommen.

---

## Folie 11 – Node-RED Flow: Überblick

**[FOLIENTITEL]**
Node-RED Flow: Überblick

**[FOLIENINHALT]**
*[Screenshot: `Bildschirmfoto 2026-05-29 um 12.47.58.png`]*

**Flow-Struktur:**
1. **MQTT Input „BL-Sensor"** → abonniert Topic `Sensor`, QoS 2
2. **Switch „Splitter"** → verteilt nach `payload.type` auf 4 Zweige
3. **Delay-Node** → Rate-Limiter: max. 1 Nachricht/Minute (Drop-Modus)
4. **Function „MSG-Edit"** → formatiert Observation-Payload (JavaScript)
5. **MQTT Output** → publiziert auf `Factory/ConditionMonitoring/*`

**[SPRECHNOTIZEN – Person 3]**
Das ist unser Node-RED Flow, den ich gleich in der Live-Demo zeige. Er startet mit einem MQTT-Input-Node, der alle Sensornachrichten auf dem Topic „Sensor" empfängt. Der Switch-Node „Splitter" analysiert den Typ jeder Nachricht und leitet sie in den richtigen Zweig: Luftdruck, Luftfeuchtigkeit, Licht oder Temperatur. In jedem Zweig drosselt ein Rate-Limiter den Durchsatz auf eine Nachricht pro Minute – von mehreren Nachrichten pro Sekunde auf ein sinnvolles Minimum für die Zustandsüberwachung. Eine Function-Node formatiert die Daten in das Observation-Format, und ein MQTT-Output-Node publiziert das Ergebnis.

---

## Folie 12 – Node-RED Flow: Rate-Limiting & Formatierung

**[FOLIENTITEL]**
Node-RED: Rate-Limiting und Payload-Transformation

**[FOLIENINHALT]**
**Rate-Limiting (Delay-Node, `drop: true`):**
- SensorTag sendet mehrfach pro Sekunde
- Rate-Limiter: **1 Nachricht/Minute** → Überschuss wird verworfen
- Ergebnis: ~98 % Datenreduktion bei gleichbleibender Zustandsüberwachung

**Splitter: JSONata-Ausdrücke:**
```
payload.type = "temperature"  →  Zweig 4 (Temperatur)
payload.type = "humidity"     →  Zweig 2 (Luftfeuchtigkeit)
payload.type = "lux"          →  Zweig 3 (Licht)
payload.type = "pressure_hpa" →  Zweig 1 (Luftdruck)
```

**MSG-Edit Function (JavaScript-Beispiel Temperatur):**
```javascript
msg.payload = {
    Observation: {
        MachineID: "CC2650STK",
        SensorTypeCode: msg.payload.type,
        LocationID: "A1.005",
        MeasureContent: msg.payload.value,
        MeasureUnitCode: "°C",
        DateTime: new Date(msg.payload.timestamp * 1000).toISOString()
    }
};
return msg;
```

**[SPRECHNOTIZEN – Person 3]**
Der Rate-Limiter ist eine der wichtigsten Designentscheidungen: Der SensorTag sendet mehrfach pro Sekunde – für eine Zustandsüberwachung einer Produktionsanlage ist das schlicht zu viel. Wir drosseln auf eine Nachricht pro Minute, was einer Datenreduktion von fast 98 Prozent entspricht, ohne relevante Trendaussagen zu verlieren. Der Splitter nutzt JSONata-Ausdrücke, eine für Node-RED typische Abfragesprache. Die Function-Node transformiert die Rohdaten in das Observation-Format und konvertiert dabei auch den Unix-Timestamp in einen ISO-8601-String.

---

## Folie 13 – Alarm- und Trendlogik

**[FOLIENTITEL]**
Erweiterte Logik: Alarmierung und Trendüberwachung

**[FOLIENINHALT]**
**Temperatur-Alarm (ALARM CRITICAL-Node):**
- < 20°C → Sprachausgabe: *„Caution! Temperature is below 20 degrees."*
- > 40°C → Sprachausgabe: *„Alarm! Temperature is above 40 degrees!"*
- Max. 1 Alarm alle 30 Sekunden (Delay-Node verhindert Alarmflut)

**Licht-Alarm:**
- < 1.500 lx → *„Caution! It is getting darker!"*
- < 200 lx → *„Alarm! I can't see anything!"*
- Max. 1 Alarm alle 10 Sekunden

**Temperatur-Trendüberwachung (Switch: gt / eq / lt vs. Vorwert):**

| Ereignis | Delay | Ergebnis |
|---|---|---|
| Wert gestiegen/gesunken | 13 Sekunden | schnelle Aktualisierung |
| Wert unverändert | 1 Minute | reguläres Update |

→ Ereignisbasiertes Reporting: Änderungen sofort, Wiederholungen gedrosselt

**[SPRECHNOTIZEN – Person 3]**
Zusätzlich zur regulären Datenweiterleitung haben wir eine Alarm- und Trendlogik implementiert. Für Temperatur und Licht gibt es kritische Schwellenwerte, bei deren Überschreitung eine Sprachausgabe ausgelöst wird. Besonders interessant ist die Trendüberwachung für die Temperatur: Ein Switch-Node vergleicht jeden neuen Wert mit dem vorherigen. Bei einer Änderung – egal ob steigend oder fallend – leiten wir die Nachricht sofort weiter. Bleibt der Wert gleich, wird nur einmal pro Minute aktualisiert. Das ist ereignisbasiertes Reporting: Wir reagieren schnell auf Veränderungen, sparen aber Ressourcen, wenn sich nichts tut. Ich übergebe an [Person 4] für die Live-Demo.

---

---

# TEIL 4 – LIVE-DEMO & FAZIT
## Person 4

---

## Folie 14 – Live-Demo: Was passiert gleich?

**[FOLIENTITEL]**
Live-Demo: Ablauf in 5 Schritten

**[FOLIENINHALT]**
**Bildschirmaufbau:**
- Links: Terminal mit sensor.py / MQTT Explorer
- Rechts: Node-RED auf IWILR4-10:1880 (Debug-Panel)

**Ablauf:**
1. `sensor.py` starten → Sensor sucht & verbindet sich per BLE
2. MQTT Explorer → Rohdaten erscheinen auf Topic `Sensor`
3. Node-RED Debug-Panel → verarbeitete Nachrichten auf `Factory/ConditionMonitoring/*`
4. Sensor warm machen → Temperatur steigt → Trend-Switch reagiert
5. Sensor abdecken → Lux sinkt → Licht-Alarm, Sprachausgabe

**[SPRECHNOTIZEN – Person 4 – VOR DER DEMO]**
Guten Tag, ich bin [Name] und führe jetzt die Live-Demo durch. Ich habe hier auf meinem Bildschirm links den MQTT Explorer und rechts den Node-RED Flow geöffnet. Ich werde jetzt das Python-Skript starten, und wir sehen, wie die Daten in Echtzeit durch unser System fließen – vom Sensor bis zu den Ausgangs-Topics.

---

## *** LIVE-DEMO *** (kein Folienwechsel)

### Detaillierter Demo-Ablauf für Person 4:

**Schritt 1 – sensor.py starten:**
```bash
python3 sensor.py
# → „Suche nach dem SensorTag..."
# → „Gefunden: 98:07:2D:27:F1:86 | CC2650 SensorTag"
# → „-> temperature aktiviert."
# → „-> humidity aktiviert."
# → „-> lux aktiviert."
# → „-> pressure_hpa aktiviert."
# → „Observation läuft. Daten werden an MQTT gesendet..."
```
*Kommentar während Demo:* „Wir sehen, wie das Skript den Sensor findet, sich verbindet und alle vier Sensoren nacheinander aktiviert."

**Schritt 2 – MQTT Explorer zeigen:**
*Kommentar:* „Hier im MQTT Explorer sehen wir jetzt die Rohdaten, die auf dem Topic ‚Sensor' ankommen. Jede Messung enthält Geräte-ID, Sensortyp, Wert und Zeitstempel."

**Schritt 3 – Node-RED Debug-Panel zeigen:**
*Kommentar:* „Im Node-RED Debug-Panel rechts sehen wir die verarbeiteten Observation-Nachrichten auf den Ausgangs-Topics. Node-RED hat die Rohdaten strukturiert und das Observation-Format angewendet."

**Schritt 4 – Temperatur-Test:**
*Aktion:* Sensor mit beiden Händen umschließen oder auf warme Fläche legen.
*Kommentar:* „Ich wärme jetzt den Sensor. Wir sehen, wie der Temperaturwert steigt. Der Trend-Switch in Node-RED erkennt die Veränderung und leitet sofort weiter – schneller als im Normalbetrieb."

**Schritt 5 – Licht-Test:**
*Aktion:* Sensor vollständig mit Hand oder Papier abdecken.
*Kommentar:* „Und jetzt decke ich den Lichtsensor ab. Der Lux-Wert fällt unter 200 – und wir hören die Sprachausgabe: ‚Alarm! I can't see anything!' Genau das haben wir in der Alarmlogik implementiert."

---

## Folie 15 – Ergebnisse & Zielerreichung

**[FOLIENTITEL]**
Ergebnisse: Was haben wir erreicht?

**[FOLIENINHALT]**
✅ **Teilziel 1 – Bluetooth-Verbindung:** Stabile BLE-Verbindung zum TI CC2650; alle vier Sensoren (Temperatur, Luftfeuchtigkeit, Licht, Luftdruck) liefern kontinuierlich Messwerte.

✅ **Teilziel 2 – MQTT-Anbindung:** Mosquitto-Broker auf IWILR4-11 verarbeitet alle Verbindungen zuverlässig. Rohdaten auf Topic `Sensor`, verarbeitete Daten auf `Factory/ConditionMonitoring/*`.

✅ **Teilziel 3 – Node-RED Filterlogik:** Flows laufen stabil. Rate-Limiting, Observation-Formatierung, Alarm- und Trendlogik funktionieren wie implementiert.

✅ **Integration:** Alle Ausgangs-Topics werden von nachgelagerten Gruppen (ThingsBoard, DB) korrekt konsumiert.

**[SPRECHNOTIZEN – Person 4]**
Fassen wir die Ergebnisse zusammen. Alle drei Teilziele wurden vollständig erreicht. Die Bluetooth-Verbindung ist stabil und liefert alle vier Sensortypen. Die MQTT-Infrastruktur funktioniert zuverlässig als Drehscheibe. Und der Node-RED Flow verarbeitet, filtert und formatiert die Daten korrekt – wie wir gerade in der Demo gesehen haben.

---

## Folie 16 – Herausforderungen

**[FOLIENTITEL]**
Herausforderungen & Lösungsansätze

**[FOLIENINHALT]**
<!-- [TODO: Mit eigenen Erfahrungen befüllen – Beispiele unten als Vorlage] -->

**Beispiel-Inhalte (anpassen):**

**Bluetooth-Verbindungsstabilität:**
Problem: [z. B. gelegentliche Verbindungsabbrüche im 2,4-GHz-Hochschulnetz]
Lösung: [z. B. automatische Reconnect-Logik in sensor.py]

**Topic-Koordination mit anderen Gruppen:**
Problem: Unterschiedliche Anforderungen an das Payload-Format
Lösung: Gemeinsamer Abstimmungstermin → Festlegung des Observation-Formats

**Zeitstempel-Konvertierung:**
Problem: SensorTag liefert Unix-Epoch-Float, Gruppen 3/4 erwarten ISO 8601
Lösung: `new Date(timestamp * 1000).toISOString()` in Node-RED Function-Node

**[SPRECHNOTIZEN – Person 4]**
Natürlich verlief die Umsetzung nicht ohne Herausforderungen. [Hier eigene Erfahrungen einbringen.] Was wir gelernt haben: Bei einem Projekt, das aus so vielen Teilsystemen besteht, ist die Abstimmung zwischen den Gruppen genauso wichtig wie die technische Implementierung.

---

## Folie 17 – Kritische Würdigung & Ausblick

**[FOLIENTITEL]**
Kritische Würdigung & Ausblick

**[FOLIENINHALT]**
**Technologiebewertung:**

| Technologie | Entscheidung | Alternative bei Skalierung |
|---|---|---|
| BLE | ✅ Ideal für Laborumgebung | ZigBee (Mesh, > 100 m) |
| MQTT | ✅ Minimaler Overhead, lose Kopplung | – gut skalierbar |
| Node-RED | ✅ Schneller Prototyp | Apache Kafka (Produktion) |

**Ausblick:**
- **Sicherheit:** TLS/SSL (Port 8883), Client-Zertifikate
- **Skalierung:** Cluster-fähiger Broker (HiveMQ, EMQX)
- **Erweiterte Analytik:** ML-basierte Anomalieerkennung (Predictive Maintenance)
- **Digitaler Zwilling:** Integration mit ThingsBoard für vollständige IoT-4.0-Fähigkeit

**[SPRECHNOTIZEN – Person 4]**
Zur kritischen Würdigung: Alle gewählten Technologien sind für das Projekt gut geeignet. BLE deckt die Laborumgebung problemlos ab. MQTT hat sich als ideales Protokoll erwiesen – der Publish/Subscribe-Mechanismus ermöglicht es, neue Konsumenten einfach hinzuzufügen. Node-RED ist für unseren Prototyp ausgezeichnet, würde aber bei deutlich höherem Datenvolumen an seine Grenzen stoßen. Für die Zukunft sehen wir drei wesentliche Handlungsfelder: Sicherheit durch TLS, Skalierung des Brokers und der Einsatz von Machine Learning für prädiktive Wartung – damit wäre der Schritt vom Lehrprototyp zur echten Industrie-4.0-Anwendung gemacht.

---

## Folie 18 – Vielen Dank

**[FOLIENTITEL]**
Vielen Dank für Ihre Aufmerksamkeit

**[FOLIENINHALT]**
**Zusammenfassung in drei Punkten:**
1. Stabile BLE-Verbindung vom TI CC2650 SensorTag über Raspberry Pi zum MQTT-Broker
2. Strukturierte Datenpipeline mit Node-RED: Filterung, Observation-Format, Alarmlogik
3. Nahtlose Integration mit allen nachgelagerten Gruppen über `Factory/ConditionMonitoring/*`

**Wir freuen uns auf Ihre Fragen.**

---

**[SPRECHNOTIZEN – Person 4]**
Damit komme ich zum Ende unserer Präsentation. Wir haben heute gezeigt, wie der TI SensorTag per Bluetooth Low Energy Daten liefert, wie diese über MQTT durch unser System fließen und wie Node-RED am Edge für Filterung, Formatierung und Alarmierung sorgt. Wir stehen für Fragen bereit.

---

---

# VORBEREITUNG: Checkliste für den Präsentationstag

## Vor der Präsentation (30 min vorher)

- [ ] Raspberry Pi hochfahren, SSH-Verbindung testen (`ssh gruppe3@IWILR3-6.campus.fh-ludwigshafen.de`)
- [ ] MQTT Explorer öffnen, Broker `IWILR4-11.CAMPUS.fh-ludwigshafen.de:1883` verbinden
- [ ] Topics abonnieren: `Sensor`, `Factory/ConditionMonitoring/#`
- [ ] Node-RED im Browser öffnen: `http://IWILR4-10.campus.fh-ludwigshafen.de:1880`
- [ ] Flow deployen und Debug-Panel öffnen
- [ ] TI SensorTag CC2650 (MAC: `98:07:2D:27:F1:86`) in Reichweite bringen und einschalten
- [ ] Bildschirm auf Beamer projiziert, zwei Fenster nebeneinander (Terminal/MQTT + Node-RED)
- [ ] sensor.py bereit im Terminal (nicht starten – erst während Demo)
- [ ] Lautsprecher für Sprachausgabe aktiviert und Lautstärke geprüft

## Während der Demo

- [ ] `python3 sensor.py` im Terminal starten
- [ ] Verbindungsaufbau kommentieren
- [ ] MQTT Explorer zeigen (Rohdaten)
- [ ] Node-RED Debug-Panel zeigen (verarbeitete Daten)
- [ ] Sensor warm machen (Hände)
- [ ] Sensor abdecken (Licht-Alarm)

## Puffer / Backup

- Falls BLE-Verbindung nicht klappt: Screenshots der letzten Demo als Fallback bereitstellen
- Falls Node-RED Flow nicht deployt: flows.json als Backup auf USB-Stick

---

# ZEITPLAN DER PRÄSENTATION

| Zeit | Inhalt | Person |
|---|---|---|
| 0:00 – 0:30 | Deckblatt & Begrüßung | Person 1 |
| 0:30 – 1:00 | Agenda | Person 1 |
| 1:00 – 3:00 | Gesamtprojekt & Aufgabe Gruppe 2 | Person 1 |
| 3:00 – 6:00 | Systemarchitektur | Person 1 |
| 6:00 – 8:30 | Bluetooth / BLE | Person 2 |
| 8:30 – 11:00 | MQTT-Protokoll | Person 2 |
| 11:00 – 12:30 | Edge Computing & Node-RED Theorie | Person 2 |
| 12:30 – 14:30 | Python-Skripte & BLE-Implementierung | Person 3 |
| 14:30 – 16:30 | MQTT-Konfiguration & Topics | Person 3 |
| 16:30 – 18:30 | Node-RED Flow Überblick & Details | Person 3 |
| 18:30 – 19:30 | Alarm- und Trendlogik | Person 3 |
| 19:30 – 20:00 | Demo-Ankündigung | Person 4 |
| 20:00 – 25:00 | **LIVE-DEMO** | Person 4 |
| 25:00 – 26:30 | Ergebnisse & Zielerreichung | Person 4 |
| 26:30 – 28:00 | Herausforderungen, Würdigung, Ausblick | Person 4 |
| 28:00 | Vielen Dank / Fragen | Alle |
