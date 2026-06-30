# Probeklausur 2 – MW220 Internet of Things (Anwendung)

**Dauer:** 60 Minuten | **Punkte:** 30 | **Hilfsmittel:** Foliensätze 1–3 + alle Skripte
**Format:** angelehnt an die Altklausur 2024-06-27 (durchgehendes Fallbeispiel, Fokus Anwendung & Nachrichtendesign)
*(Schwerpunkt etwas verschoben: mehr JSON/JSON-LD, REST/OData, Sensor-Aktor-System – ergänzend zu Probeklausur 1)*

---
## Fallbeispiel

Die **MetalForm AG** fertigt Präzisionsbauteile auf mehreren **CNC-Fräsmaschinen**. Die Fertigung erfolgt auftragsbezogen über ein zentrales **ERP-System (iDempiere)**. Für die Maschinen soll eine durchgängige IoT-Lösung mit **Digitalem Zwilling**, **Zustandsüberwachung** und Anbindung an das ERP aufgebaut werden.

Die geplante Systemarchitektur umfasst (von unten nach oben):
**Maschine/Sensor** → **Digital Twin / IoT Edge** (Raspberry Pi, Node-RED) → **Middleware** (Mosquitto MQTT-Broker) → **Anwendungen**: **Production Control** (ERP), **Monitoring** (ThingsBoard), **Analytics** (Apache Flink).

Die erfassten Sensordaten werden an eine zentrale Analytics-Komponente übermittelt. Zusätzlich soll ein externes **Wartungsunternehmen** angebunden werden.

---

## Aufgabe 1 – Digitaler Zwilling: Teilmodelle (5,5 Punkte)

**a)** Ordnen Sie die folgenden Merkmale dem jeweils richtigen **Teilmodell der Verwaltungsschale** zu (Asset Identification, Asset Environment, Production Control, Condition Monitoring): *(3 Punkte)*

| Merkmal | Teilmodell |
|---------|------------|
| ManufacturerName | |
| ProductionOrderId | |
| EnvironmentalTemperature | |
| RotationSpeed | |
| InstanceId | |
| ProductionStatus | |

**b)** Unterscheiden Sie **generische** und **freie** Teilmodelle der Verwaltungsschale und nennen Sie je ein Beispiel aus dem Projekt. *(1,5 Punkte)*

**c)** Welches Werkzeug wurde im Projekt zur Umsetzung des Digitalen Zwillings genutzt, und wie nennt man die Verwaltungsschale auf Englisch (Abkürzung)? *(1 Punkt)*

---

## Aufgabe 2 – Sensor-Aktor-System / Regelung (4 Punkte)

Das Grundprinzip eines **Sensor-Aktor-Systems (Regelkreis)** soll auf die Maschine übertragen werden, um eine Prozessregelung zu ermöglichen.

**a)** Ordnen Sie die Begriffe des Regelkreises den richtigen Größen/Komponenten zu: *(2 Punkte)*

| Begriff | Bedeutung / Zuordnung |
|---------|------------------------|
| Regelstrecke (Prozess) | |
| Regeleinrichtung | |
| Stellgröße u(t) | |
| Regelgröße y(t) | |

**b)** Im Projekt gibt es zwei Realisierungsvarianten. Erklären Sie den Unterschied zwischen der **„Edge-Lösung"** und der **„Fog-Lösung"** in Bezug auf den Ort der Regeleinrichtung. *(1 Punkt)*

**c)** Nennen Sie **zwei konkrete Praxisbeispiele** für eine Prozessregelung bei einer CNC-Fräsmaschine. *(1 Punkt)*

---

## Aufgabe 3 – MQTT-Kommunikation (6,5 Punkte)

Die Kommunikationsverbindungen zwischen Edge- und Middleware-Komponente sowie zwischen Middleware- und Analytics-Komponente werden mit **MQTT** realisiert. Der **Broker** läuft in der Middleware. Die Maschine ist Teil eines Maschinenparks (`Factory`).

**a)** Spezifizieren Sie für die folgenden drei Komponenten die MQTT-Client-Rolle (**Publisher** / **Subscriber** – Mehrfachrollen möglich): *(2 Punkte)*

| Komponente | Rolle(n) |
|------------|----------|
| Production Control (Fertigungsauftrag senden, Rückmeldung empfangen) | |
| Digital Twin / Edge (Auftrag empfangen, Sensordaten senden) | |
| Analytics (Sensordaten empfangen) | |

**b)** Definieren Sie passende hierarchische **Topics** für: Fertigungsauftrag, Fertigungsrückmeldung und Temperaturdaten der Zustandsüberwachung. *(1,5 Punkte)*

**c)** Erläutern Sie kurz die drei MQTT-Protokollfeatures **Quality of Service (QoS)**, **Retained Message** und **Last Will and Testament (LWT)**. *(1,5 Punkte)*

**d)** Welche QoS-Stufe garantiert, dass eine Nachricht **genau einmal** ankommt? Für welchen Nachrichtentyp im Projekt (Auftrag oder Sekundentakt-Sensordaten) ist das sinnvoll? *(1,5 Punkte)*

---

## Aufgabe 4 – JSON, REST/OData & JSON-LD (8 Punkte)

**a)** Definieren Sie eine **JSON-Payload** für eine **Sensornachricht (Observation)**, die für die Übermittlung der aktuellen Temperatur einer Maschine geeignet ist. Berücksichtigen Sie: MachineId, SensorType, LocationId sowie ein Measure-Objekt mit Value, Unit und Timestamp (UTC). *(2,5 Punkte)*

**b)** Die Fertigungssteuerung zwischen Middleware und ERP soll mit **RESTful Web Services i. V. m. OData** realisiert werden. Geben Sie für folgende Operationen die **HTTP-Methode** und den **OData-URL-Aufbau** an: *(2,5 Punkte)*

| Operation | HTTP-Methode | URL (nach OData Conventions) |
|-----------|--------------|------------------------------|
| Fertigungsauftrag 4711 lesen | | |
| Fertigungsrückmeldung anlegen | | |

**c)** Die Elementbezeichnungen Ihrer JSON-Sensornachricht aus a) sollen konform zu den **ebXML Core Component Types** angepasst werden. Benennen Sie folgende Felder entsprechend um: *(1,5 Punkte)*

| Bisher | ebXML-konform |
|--------|---------------|
| SensorType | |
| Value (Measure) | |
| Unit (Measure) | |

**d)** Wie wird mit **JSON-LD** die **semantische** Bedeutung der Felder ergänzt? Nennen Sie das zentrale Schlüsselwort und die genutzte Ontologie/Quelle. *(1,5 Punkte)*

---

## Aufgabe 5 – Digitale Services (3 Punkte)

Die Sensordaten sollen einem **externen Wartungsunternehmen** zur Verfügung gestellt werden, damit dieses die Instandhaltung der Maschinen übernimmt.

**a)** Erläutern Sie das Konzept eines **„Digitalen Service"** in diesem Zusammenhang. Über welche Komponenten werden Produktions- und Wartungsunternehmen gekoppelt, und welche Schnittstellen-Technologien kommen zum Einsatz? *(2 Punkte)*

**b)** Wie kann das Konzept erweitert werden, damit auch **Instandhaltungsmeldungen** vom Wartungsunternehmen zurück übermittelt werden? *(1 Punkt)*

---

## Aufgabe 6 – Industrie 4.0 & Logistik 4.0 (3 Punkte)

**a)** Zeigen Sie in Stichworten eine mögliche **Verbesserung der Produktionsprozesse** durch eine **Industrie-4.0-Lösung** auf und beschreiben Sie die Veränderung gegenüber der jetzigen Situation. *(1,5 Punkte)*

**b)** Zeigen Sie in Stichworten eine mögliche **Verbesserung der innerbetrieblichen Transportprozesse** durch eine **Logistik-4.0-Lösung** auf. *(1,5 Punkte)*

---
---

# LÖSUNGEN – Probeklausur 2

## Aufgabe 1
**a)**
| Merkmal | Teilmodell |
|---------|------------|
| ManufacturerName | Asset Identification |
| ProductionOrderId | Production Control (Fertigungssteuerung) |
| EnvironmentalTemperature | Asset Environment (Asset Umgebung) |
| RotationSpeed | Condition Monitoring (Zustandsüberwachung) |
| InstanceId | Asset Identification |
| ProductionStatus | Production Control (Fertigungssteuerung) |

**b)** **Generische** Teilmodelle sind standardisiert/vordefiniert (z. B. Asset Identification, Asset Environment, Technisches Datenblatt). **Freie** Teilmodelle werden selbst/projektspezifisch definiert (z. B. Production Control, Condition Monitoring).

**c)** Werkzeug: **AASX Package Explorer**. Englisch: **Asset Administration Shell (AAS)**.

## Aufgabe 2
**a)**
| Begriff | Bedeutung |
|---------|-----------|
| Regelstrecke (Prozess) | die Maschine selbst (mit Sensor + Aktor) |
| Regeleinrichtung | der Regler (vergleicht Soll/Ist, berechnet Stellgröße) |
| Stellgröße u(t) | Signal an den **Aktor** (control data) |
| Regelgröße y(t) | gemessener Istwert vom **Sensor** (sensor data) |

**b)** **Edge-Lösung:** Regeleinrichtung läuft in der **Digital Twin / IoT-Edge-Komponente** (nah an der Maschine, geringe Latenz). **Fog-Lösung:** Regeleinrichtung läuft in der **Middleware-Komponente** (zentraler, weiter entfernt). Die Regelstrecke (Aktor+Sensor) bleibt immer in der Maschine.

**c)** z. B.: Spindeldrehzahl anhand gemessener Schnittkraft regeln · Vorschub bei Temperatur-/Vibrationsanstieg reduzieren · Stopp bei Werkzeugbruch/Überlast.

## Aufgabe 3
**a)**
| Komponente | Rolle(n) |
|------------|----------|
| Production Control | Publisher (Auftrag) + Subscriber (Rückmeldung) |
| Digital Twin / Edge | Subscriber (Auftrag) + Publisher (Rückmeldung & Sensordaten) |
| Analytics | Subscriber |

**b)** z. B.:
- `Factory/ProductionControl/Order`
- `Factory/ProductionControl/Confirmation`
- `Factory/ConditionMonitoring/Temperature`

**c)**
- **QoS:** legt Zustellgarantie fest – 0 (höchstens einmal), 1 (mindestens einmal), 2 (genau einmal).
- **Retained Message:** Broker speichert die letzte Nachricht eines Topics → neuer Subscriber erhält sofort den letzten Wert.
- **LWT (Last Will and Testament):** vom Client vorab hinterlegte Nachricht, die der Broker sendet, wenn der Client unerwartet die Verbindung verliert.

**d)** **QoS 2** (genau einmal). Sinnvoll für **Fertigungsaufträge** (dürfen nicht doppelt/verloren gehen). Für Sekundentakt-Sensordaten genügt QoS 0.

## Aufgabe 4
**a)** Beispiel:
```json
{
  "Observation": {
    "MachineId": 123456789,
    "SensorType": "Temperature",
    "LocationId": "C2.001",
    "Measure": {
      "Value": 25,
      "Unit": "CEL",
      "Timestamp": "2026-04-02T10:25:00Z"
    }
  }
}
```

**b)**
| Operation | HTTP-Methode | URL |
|-----------|--------------|-----|
| Fertigungsauftrag 4711 lesen | **GET** | `[Service Root URL]/ProductionControl/Order(4711)` |
| Fertigungsrückmeldung anlegen | **POST** | `[Service Root URL]/ProductionControl/Confirmation` (mit Create-Payload) |

**c)**
| Bisher | ebXML-konform |
|--------|---------------|
| SensorType | SensorTypeCode |
| Value | MeasureContent |
| Unit | MeasureUnitCode |
*(zusätzlich: MachineId → MachineID, LocationId → LocationID, Timestamp → DateTime)*

**d)** Über das Schlüsselwort **`@context`** werden die Feldnamen auf **Ontologie-Begriffe von schema.org** (URIs) gemappt, z. B. `MeasureContent → https://schema.org/value`, `MachineID → http://schema.org/identifier`. Damit wird aus syntaktischer eine **semantische** Interoperabilität (JSON-LD). Validierung z. B. über json-ld.org/playground.

## Aufgabe 5
**a)** Ein **Digitaler Service** stellt Daten/Funktionen über die Unternehmensgrenze hinweg als Dienst bereit. Produktions- und Wartungsunternehmen werden über ihre jeweiligen **Middleware-Komponenten** gekoppelt; Schnittstellen: **MQTT**, **RESTful Web Services**, **EDI**. Das Wartungsunternehmen erhält die Sensordaten und betreibt eine eigene Analytics-/Application-Komponente.

**b)** Über einen zweiten (Rück-)Digitalen-Service: Das Wartungsunternehmen sendet **Instandhaltungsmeldungen (maintenance notifications)** zurück an die Middleware bzw. Production Control / Analytics des Produktionsunternehmens (bidirektionale Kopplung).

## Aufgabe 6
**a)** z. B.: Echtzeitverfügbarkeit der Produktionsdaten, durchgängige vertikale Integration (Maschine ↔ ERP), Unterstützung von Lean Production, automatisierte Fertigungsrückmeldung statt manueller Erfassung → höhere Transparenz und kürzere Reaktionszeiten gegenüber heute.

**b)** z. B.: Echtzeitvernetzung und Selbstorganisation der Transportmittel (Gabelstapler/Hubwagen), automatisierte Transportaufträge, Lokalisierung der Behälter (RFID/iBeacon) → wegfallende manuelle Steuerung und transparente Materialflüsse gegenüber heute.
