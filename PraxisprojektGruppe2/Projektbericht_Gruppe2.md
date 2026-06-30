# TI Sensor Bluetooth- und MQTT-Anbindung
## Edge Computing mit Filterung der Sensordaten für die Zustandsüberwachung

---

Projektarbeit im Modul MW220 – Internet of Things, Technologien und Anwendungen  
Master Wirtschaftsinformatik (DataCon), Sommersemester 2026  
Hochschule für Wirtschaft und Gesellschaft Ludwigshafen am Rhein

---

**vorgelegt von:**

<!-- Person 1: Vorname Name | Matrikel-Nr.: XXXXXX | E-Mail: xxxx@stud.hwg-lu.de -->

<!-- Person 2: Vorname Name | Matrikel-Nr.: XXXXXX | E-Mail: xxxx@stud.hwg-lu.de -->

<!-- Person 3: Vorname Name | Matrikel-Nr.: XXXXXX | E-Mail: xxxx@stud.hwg-lu.de -->

<!-- Person 4: Vorname Name | Matrikel-Nr.: XXXXXX | E-Mail: xxxx@stud.hwg-lu.de -->

---

**ErstkorrektorIn:** Prof. Dr. Frank Thomé

**Datum der Abgabe:** 08. Juni 2026

---

## Inhaltsverzeichnis

1. [Einleitung und Projektauftrag](#1-einleitung-und-projektauftrag)
   - 1.1 Zielsetzung und Aufgabenstellung
   - 1.2 Projektorganisation
   - 1.3 Vorgehensweise
2. [Theoretische Grundlagen](#2-theoretische-grundlagen)
   - 2.1 IoT-Grundbegriffe und Systemarchitekturen
   - 2.2 Bluetooth / BLE als Nahbereichskommunikation
   - 2.3 MQTT – das zentrale IoT-Protokoll
   - 2.4 Raspberry Pi als Edge- und Fog-Knoten
   - 2.5 Node-RED und Stream Processing
3. [Systemarchitektur und Implementierung](#3-systemarchitektur-und-implementierung)
   - 3.1 Einordnung in die Gesamtarchitektur
   - 3.2 Teilarchitektur Gruppe 2
   - 3.3 Bluetooth-Verbindung: TI Sensor / LEGO EV3 zum Raspberry Pi
   - 3.4 MQTT-Konfiguration
   - 3.5 Node-RED Flows und Filterlogik
4. [Kritische Würdigung der Projektergebnisse](#4-kritische-würdigung-der-projektergebnisse)
   - 4.1 Zielerreichung
   - 4.2 Herausforderungen und Lösungsansätze
   - 4.3 Bewertung der gewählten Technologien
5. [Literaturverzeichnis](#5-literaturverzeichnis)

Anhang

---

## Abbildungsverzeichnis

- Abbildung 1: MQTT-Rohdaten-Payload auf Topic „Sensor" (eigene Darstellung, 2026) ......... S. [X]
- Abbildung 2: MQTT-Broker mit eingehenden Observation-Nachrichten (eigene Darstellung, 2026) S. [X]
- Abbildung 3: Node-RED Flow Gruppe 2 (eigene Darstellung, 2026) ............................. S. [X]

---

## Abkürzungsverzeichnis

| Abkürzung | Bedeutung |
|---|---|
| BLE | Bluetooth Low Energy |
| CPS | Cyber-Physisches System |
| DSMS | Data Stream Management System |
| FHSS | Frequency Hopping Spread Spectrum |
| GATT | Generic Attribute Profile |
| IoT | Internet of Things |
| ITU-T | International Telecommunication Union – Telecommunication Standardization Sector |
| JSON | JavaScript Object Notation |
| LWT | Last Will and Testament |
| M2M | Machine-to-Machine |
| MQTT | Message Queuing Telemetry Transport |
| OASIS | Organization for the Advancement of Structured Information Standards |
| QoS | Quality of Service |
| RAMI | Reference Architecture Model Industrie 4.0 |
| REST | Representational State Transfer |
| SBC | Single-Board Computer |
| TLS | Transport Layer Security |
| UUID | Universally Unique Identifier |

---

## 1 Einleitung und Projektauftrag

Das übergreifende Lehrprojekt trägt den Titel **„LEGO Mindstorms Color Sorter meets Industrie 4.0"** und bildet gemeinsam mit allen Arbeitsgruppen des Kurses ein durchgängiges Industrie-4.0-Szenario ab. Als physische Grundlage dient ein LEGO Mindstorms EV3-Sortiersystem, das Bausteine nach Farben sortiert und durch eine IoT-Infrastruktur in eine vernetzte Produktionsanlage überführt wird. Ziel des Gesamtprojekts ist es, einen funktionsfähigen Prototypen zu erstellen, der typische Elemente einer modernen, vernetzten Produktionsumgebung demonstriert – von der Sensorik über die Datenkommunikation bis hin zur Visualisierung.

### 1.1 Zielsetzung und Aufgabenstellung

Im Rahmen des Gesamtprojekts wurde Gruppe 2 mit folgender Teilaufgabe betraut:

> **„TI Sensor Bluetooth- und MQTT-Anbindung, Edge Computing mit Filterung der Sensordaten für die Zustandsüberwachung"**

Der Aufgabenbereich umfasst drei miteinander verknüpfte Teilziele:

**Teilziel 1 – Bluetooth-Kommunikation:** Aufbau einer stabilen drahtlosen Verbindung zwischen dem TI SensorTag (Texas Instruments CC2650) bzw. dem LEGO Mindstorms EV3 und einem Raspberry Pi. Die Bluetooth-Verbindung bildet die erste Schicht der Datenkommunikation und überträgt Rohmesswerte der physischen Sensoren an die Verarbeitungseinheit.

**Teilziel 2 – MQTT-Anbindung:** Weiterleitung der empfangenen Sensordaten vom Raspberry Pi an den zentralen MQTT-Broker des Gesamtsystems. Dabei sind geeignete Topic-Strukturen zu definieren, ein konsistentes Nachrichtenformat (JSON-Payload) festzulegen sowie Quality-of-Service-Level zu konfigurieren.

**Teilziel 3 – Edge Computing mit Node-RED:** Aufbau von Verarbeitungsflüssen in Node-RED auf dem Raspberry Pi, die eingehende Sensordaten filtern, validieren und für die Zustandsüberwachung aufbereiten. Die gefilterten Daten werden an nachgelagerte Systemkomponenten weitergeleitet.

### 1.2 Projektorganisation

> **Hinweis zur Zusammenarbeit:** Alle Mitglieder der Gruppe 2 haben zu gleichen Teilen an der praktischen Umsetzung sowie an der schriftlichen Ausarbeitung dieses Projektberichts mitgewirkt. Die Gruppe bittet daher um eine gemeinsame Gruppennote.

<!-- [OPTIONAL: Tabelle mit Name, Matrikelnummer, Aufgabenschwerpunkt] -->

Für die technische Umsetzung standen folgende Systemressourcen zur Verfügung:

| Ressource | Bezeichnung / Zugang |
|---|---|
| Raspberry Pi (Gruppe 3) | IWILR3-6 (`gruppe3` / `pw_gruppe3`) |
| Raspberry Pi mit Node-RED | IWILR4-10, Port 1880 |
| Gemeinsamer Raspberry Pi (Gr. 1 + 2) | IWILR4-11 |
| MQTT-Broker | auf IWILR3-6 |
| IoT-Plattform ThingsBoard | IWILIOT-5, Port 8080 |

Die Gruppe 2 steht innerhalb der Systemarchitektur an einer Schlüsselstelle: Sie verbindet die physische Sensorschicht (LEGO EV3 / TI SensorTag) mit der Verarbeitungs- und Verteilungsschicht (MQTT, Node-RED) und stellt damit sicher, dass Messdaten strukturiert und gefiltert in das Gesamtsystem einfließen.

### 1.3 Vorgehensweise

Die Projektarbeit folgte einem iterativen Vorgehen mit schrittweiser Integration der Systemkomponenten:

1. **Grundlagenarbeit** (März/April 2026): Erarbeitung der theoretischen Grundlagen zu Bluetooth, MQTT und Node-RED im Rahmen der Lehrveranstaltung.
2. **Inbetriebnahme Bluetooth** (April/Mai 2026): Aufbau der BLE-Verbindung zwischen Sensor und Raspberry Pi, Testen der Datenübertragung.
3. **MQTT-Konfiguration** (Mai 2026): Einrichtung des Brokers, Definition der Topic-Struktur, Anbindung der Datenquellen.
4. **Node-RED Filterlogik** (Mai 2026): Entwicklung der Verarbeitungsflows, Testläufe und Abstimmung mit den Schnittstellen der anderen Gruppen.
5. **Integration und Dry Run** (03. Juni 2026): Gesamttest aller Arbeitsgruppen gemeinsam.

Begleitend fanden zwei Projektstatustermine am 07. und 21. Mai 2026 statt, bei denen der Fortschritt gegenüber dem Betreuer dokumentiert und offene Fragen geklärt wurden.

---

## 2 Theoretische Grundlagen

### 2.1 IoT-Grundbegriffe und Systemarchitekturen

#### Internet der Dinge (IoT)

Das **Internet der Dinge** (Internet of Things, IoT) bezeichnet die Vernetzung physischer Objekte, die mit Sensorik, Rechenkapazität und Kommunikationstechnik ausgestattet sind und eigenständig Daten erfassen und austauschen (vgl. ITU-T 2013: 1). Kennzeichnend ist die **Maschine-zu-Maschine-Kommunikation (M2M)**, bei der Geräte ohne menschliches Zutun miteinander interagieren (vgl. ITU-T 2013: 3). Auf dieser Grundlage werden im Folgenden die für das Teilprojekt zentralen Konzepte erläutert: das Cyber-Physische System, IoT-Schichtenarchitekturen sowie Edge- und Cloud-Computing.

#### Cyber-Physisches System (CPS)

Das im vorliegenden Projekt realisierte System ist ein **Cyber-Physisches System (CPS)**: ein komplexer Systemverbund aus informationstechnischen Komponenten (Hard- und Software), mechanischen bzw. elektronischen Komponenten (LEGO EV3, Sensoren, Aktoren) und einer Netzwerkinfrastruktur mit Echtzeitkommunikation. Der Raspberry Pi übernimmt dabei die Rolle des eingebetteten Systems mit Steuerungs- und Datenverarbeitungsfunktion; die drahtlose Bluetooth-Verbindung sowie das MQTT-Protokoll stellen die Netzwerkkommunikation sicher (vgl. Thomé 2026).

#### IoT-Referenzarchitekturen

Zur strukturierten Beschreibung von IoT-Systemen werden in der Literatur verschiedene Schichtenmodelle verwendet. Das **Drei-Schichten-Modell** unterscheidet:

- **Perception Layer** – physische Sensoren und Aktoren (hier: LEGO EV3, TI SensorTag)
- **Network Layer** – Konnektivität und Datentransport (hier: Bluetooth, MQTT-Broker auf dem Raspberry Pi)
- **Application Layer** – Datenverarbeitung und Anwendungslogik (hier: Node-RED, ThingsBoard)

Das **Fünf-Schichten-Modell** ergänzt diese Struktur um einen expliziten *Data Processing Layer* (Filterung, Transformation, Aggregation) sowie einen *Business Layer* (Monitoring, Reporting). Gruppe 2 verantwortet im Gesamtsystem insbesondere den Übergang vom Network Layer zum Data Processing Layer.

#### Edge und Fog Computing

Klassische Cloud-zentrierte IoT-Architekturen senden alle Rohdaten zunächst in eine zentrale Cloud zur Verarbeitung. **Edge Computing** verlagert Rechenleistung dagegen direkt in die Nähe der Datenquelle – auf den Endknoten selbst oder einen nahegelegenen Gateway-Knoten. **Fog Computing** bezeichnet eine Zwischenstufe: Verarbeitung auf einem lokalen Gateway-Rechner, der zwischen Sensor und Cloud liegt (vgl. Thomé 2026).

Gegenüber rein cloud-zentrierten Architekturen bieten Edge- und Fog-Computing drei wesentliche Vorteile: geringere Latenzen durch lokale Verarbeitung, ein reduziertes Datenvolumen zu nachgelagerten Systemen sowie eine höhere Ausfallsicherheit, da der Gateway-Knoten auch ohne Cloud-Anbindung weiterarbeiten kann.

---

### 2.2 Bluetooth / BLE als Nahbereichskommunikation

> **Was ist es?** Bluetooth Low Energy (BLE) ist eine energiesparende Funktechnik nach IEEE 802.15.1 für die drahtlose Nahbereichskommunikation zwischen batteriebetriebenen Geräten.
>
> **Ziel im Teilprojekt:** BLE stellt die drahtlose Verbindung zwischen dem TI CC2650 SensorTag und dem Raspberry Pi her, über die der Pi die Sensor-Messwerte ausliest.

Bluetooth ist ein funkbasierter Kommunikationsstandard nach **IEEE 802.15.1**, der 1994 von Ericsson entwickelt wurde und heute von der Bluetooth Special Interest Group (Bluetooth SIG) weiterentwickelt wird.

**Technische Eigenschaften:**

| Merkmal | Ausprägung |
|---|---|
| Frequenzbereich | 2,402 – 2,480 GHz |
| Übertragungsverfahren | Frequenzsprungverfahren (FHSS), 1.600 Sprünge/s |
| Reichweite | 1–100 m (Class 1: 100 m, Class 2: 10 m, Class 3: 1 m) |
| Datenrate | 64 kbit/s – 723,2 kbit/s; Enhanced Data Rates > 2 Mbit/s |
| Verbindungstyp | Synchron (SCO, für Sprache), Asynchron (ACL, für Daten) |

Das **Frequenzsprungverfahren (Frequency Hopping Spread Spectrum, FHSS)** erhöht die Robustheit der Übertragung gegenüber Interferenzen: Sender und Empfänger wechseln synchronisiert 1.600-mal pro Sekunde die Frequenz innerhalb des 2,4-GHz-Bandes. Dies macht Bluetooth widerstandsfähiger gegenüber benachbarten WLAN-Netzen.

#### Bluetooth Low Energy (BLE)

Der Texas Instruments CC2650 SensorTag nutzt **Bluetooth Low Energy (BLE)**, eine seit Bluetooth 4.0 standardisierte Variante, die auf minimalen Energieverbrauch bei moderaten Datenraten optimiert ist. BLE ist besonders für batteriebetriebene Sensorknoten geeignet, da ein Gerät mit einer Knopfzellenbatterie über Monate oder Jahre betrieben werden kann. Die Kommunikationsarchitektur basiert auf dem **Generic Attribute Profile (GATT)**, das Dienste und Charakteristika hierarchisch organisiert. Ein zentrales Gerät (hier: Raspberry Pi als „Central") liest Messwerte von einem peripheren Gerät (hier: SensorTag als „Peripheral") über GATT-Charakteristika aus.

#### Verbindungsaufbau und Pairing

Der Verbindungsaufbau zwischen einem Central- und einem Peripheral-Gerät erfolgt in zwei Phasen: Zunächst wird ein **Pairing** durchgeführt, bei dem Geräteschlüssel ausgetauscht und eine vertrauenswürdige Verbindung etabliert wird. Anschließend kann die Verbindung jederzeit ohne erneuten Pairing-Vorgang hergestellt werden.

---

### 2.3 MQTT – das zentrale IoT-Protokoll

> **Was ist es?** MQTT (Message Queuing Telemetry Transport) ist ein schlankes Publish/Subscribe-Nachrichtenprotokoll für die zuverlässige Datenübertragung zwischen IoT-Geräten über einen zentralen Broker.
>
> **Ziel im Teilprojekt:** MQTT überträgt die vom Raspberry Pi erfassten Sensordaten an den Broker und stellt sie strukturiert allen nachgelagerten Gruppen bereit.

**MQTT (Message Queuing Telemetry Transport)** ist seit 2013 ein OASIS-Standard und gilt als das wichtigste Protokoll im IoT-Umfeld (vgl. Thomé 2026). Es zeichnet sich durch minimalen Protokoll-Overhead aus und ist daher auch für ressourcenbeschränkte Geräte und Verbindungen mit geringer Bandbreite geeignet.

#### Publish/Subscribe-Architektur

MQTT folgt dem **Publish/Subscribe-Muster**: Sender (Publisher) und Empfänger (Subscriber) kommunizieren nicht direkt miteinander, sondern über einen zentralen **Message Broker**. Der Publisher sendet Nachrichten an ein definiertes **Topic** (z. B. `lego/ev3/color`); der Broker verwaltet alle Abonnements und leitet Nachrichten an alle Subscriber weiter, die das jeweilige Topic abonniert haben.

```
TI SensorTag / EV3
        │
        │ Bluetooth
        ▼
  Raspberry Pi (Publisher)
        │
        │ MQTT (TCP, Port 1883)
        ▼
   MQTT Broker (Mosquitto)
        │
        ├──────────────────▶ Node-RED (Subscriber)
        └──────────────────▶ ThingsBoard (Subscriber)
```

Diese Entkopplung von Publisher und Subscriber hat einen wesentlichen Architekturvorteil: Neue Konsumenten (weitere Subscriber) können jederzeit hinzugefügt werden, ohne dass der Datenproduzent (Publisher) geändert werden muss.

#### Topics und Wildcards

Topics sind UTF-8-kodierte Zeichenketten mit hierarchischer Struktur, die durch `/` getrennte Ebenen aufweisen. Zur flexiblen Filterung stehen zwei Wildcard-Zeichen zur Verfügung:

- `+` – Single-Level-Wildcard, ersetzt genau eine Ebene (z. B. `lego/+/temperature`)
- `#` – Multi-Level-Wildcard, ersetzt alle nachfolgenden Ebenen (z. B. `lego/#`)

#### Quality of Service (QoS)

MQTT definiert drei Qualitätsstufen für die Nachrichtenübertragung:

| QoS-Level | Bezeichnung | Semantik |
|---|---|---|
| 0 | At most once | Nachricht wird höchstens einmal zugestellt; kein ACK |
| 1 | At least once | Nachricht wird mindestens einmal zugestellt (PUBACK) |
| 2 | Exactly once | Exakt einmalige Zustellung (4-Schritt-Handshake) |

Für die Übertragung von Sensordaten ist in der Regel QoS 1 ein guter Kompromiss zwischen Zuverlässigkeit und Overhead. QoS 0 ist für unkritische, hochfrequente Messdaten ausreichend.

#### Retained Messages und Last Will and Testament

**Retained Messages** ermöglichen es, dass ein neuer Subscriber beim Abonnieren eines Topics sofort den zuletzt publizierten Wert erhält – ohne auf die nächste Nachricht des Publishers warten zu müssen. Dies ist für Sensordaten besonders nützlich, da der aktuelle Zustand eines Sensors immer abrufbar ist.

Das **Last Will and Testament (LWT)** ist eine Nachricht, die ein Client beim Verbindungsaufbau beim Broker hinterlegt. Wenn die Client-Verbindung unerwartet abbricht (z. B. Sensorausfall), sendet der Broker diese „letzte Willensbotschaft" automatisch an alle Subscriber des LWT-Topics. Damit lässt sich eine einfache Ausfallerkennung ohne zusätzliche Logik realisieren.

#### Sicherheit

Im Produktivbetrieb wird MQTT über **TLS/SSL** (Port 8883) verschlüsselt und optional durch Username/Passwort-Authentifizierung gesichert. Im vorliegenden Lehrprojekt wurde auf Verschlüsselung im internen Hochschulnetz verzichtet; für reale Deployments ist TLS jedoch zwingend empfohlen.

---

### 2.4 Raspberry Pi als Edge- und Fog-Knoten

Der **Raspberry Pi** ist ein Einplatinencomputer (Single-Board Computer, SBC), der 2012 von der Raspberry Pi Foundation entwickelt wurde. Er vereint auf kompaktem Raum einen ARM-Prozessor, Arbeitsspeicher, GPIO-Pins, USB-, HDMI- sowie Netzwerk- und WLAN-Schnittstellen. Im IoT-Kontext fungiert der Raspberry Pi als **Gateway** oder **Edge-/Fog-Knoten**, der als Bindeglied zwischen ressourcenbeschränkten Sensorknoten (wie dem LEGO EV3 oder dem TI SensorTag) und übergeordneten Systemen dient.

Typischerweise konsolidiert ein solcher Fog-Knoten mehrere Aufgaben – Bluetooth-Gateway, MQTT-Broker und Edge-Verarbeitung – auf einem einzigen, ressourcenbeschränkten Gerät. Wie Gruppe 2 den Raspberry Pi konkret einsetzt, zeigt Kapitel 3.

---

### 2.5 Node-RED und Stream Processing

> **Was ist es?** Node-RED ist eine flow-basierte, visuelle Entwicklungsumgebung auf Node.js-Basis zur Verschaltung von Datenquellen, Logik und Datensenken.
>
> **Ziel im Teilprojekt:** Node-RED filtert, transformiert und drosselt die eingehenden Rohdaten und republiziert sie als strukturierte Observation-Nachrichten – die Edge-Computing-Kernaufgabe der Gruppe 2.

**Node-RED** ist eine Open-Source-Entwicklungsumgebung für Flow-basiertes Programmieren, die ursprünglich von IBM entwickelt und seit 2016 als Teil der OpenJS Foundation weitergeführt wird. Die Laufzeitumgebung basiert auf Node.js; die Programmierung erfolgt visuell über eine webbasierte Oberfläche durch Verknüpfen von Nodes zu Flows. Als **Stream-Processing-Engine** verarbeitet, filtert und transformiert Node-RED kontinuierlich eingehende Nachrichten.

#### Konzept des Stream Processing

Node-RED realisiert Konzepte aus dem Bereich der **Data Stream Management Systems (DSMS)**:

- **Continuous Queries:** Im Gegensatz zu klassischen Datenbankabfragen, die auf statischen Daten arbeiten, verarbeiten Continuous Queries fortlaufend ankommende Datenströme. In Node-RED werden diese durch Function-Nodes und Switch-Nodes abgebildet.

- **Windowing:** Zur zeitlichen Aggregation von Datenpunkten können Fenster (Windows) definiert werden. **Tumbling Windows** sind nicht-überlappende, gleichgroße Zeitfenster – z. B. wird alle 60 Sekunden ein Durchschnittswert aus den empfangenen Messwerten berechnet. Dies reduziert das Datenvolumen erheblich, ohne relevante Trendaussagen zu verlieren.

- **Filterung und Schwellenwertüberwachung (Threshold Monitoring):** Switch-Nodes prüfen eingehende Messwerte gegen definierte Bedingungen (z. B. Farbsensor: roter Baustein erkannt, Temperatur überschreitet 30 °C) und leiten Nachrichten entsprechend in unterschiedliche Verarbeitungspfade.

#### Relevante Node-Typen

| Node-Typ | Funktion im Projekt |
|---|---|
| MQTT Input | Abonniert Topics des Brokers |
| Function | JavaScript-Logik für Transformation und Validierung |
| Switch | Conditional Routing (Schwellenwertprüfung) |
| JSON | Parsen und Serialisieren von JSON-Payloads |
| MQTT Output | Publiziert gefilterte Daten an neue Topics |
| Debug | Ausgabe im Node-RED Dashboard zur Fehlersuche |

---

## 3 Systemarchitektur und Implementierung

Die in Kapitel 2 dargestellten Konzepte – BLE-Nahbereichskommunikation, MQTT-Publish/Subscribe und Node-RED-Stream-Processing – bilden die Grundlage für die praktische Umsetzung des Teilprojekts. Gruppe 2 setzt sie auf einer dreistufigen Edge-Architektur um: Der TI SensorTag liefert Messwerte per BLE an einen Raspberry Pi, der sie als MQTT-Nachrichten an den Broker publiziert; eine Node-RED-Instanz filtert und transformiert die Rohdaten und stellt sie strukturiert den nachgelagerten Gruppen bereit. Der Raspberry Pi bündelt dabei die Rollen Bluetooth-Gateway, MQTT-Broker und Edge-Verarbeitung in einem Gerät. Die folgenden Abschnitte beschreiben diese Umsetzung im Detail.

### 3.1 Einordnung in die Gesamtarchitektur

Das Gesamtprojekt „LEGO Mindstorms Color Sorter meets Industrie 4.0" ist auf mehrere Arbeitsgruppen aufgeteilt, die jeweils Teilaufgaben der vollständigen IoT-Wertschöpfungskette übernehmen. Die folgende Tabelle gibt einen Überblick über die Aufgabenverteilung:

| Gruppe | Aufgabe |
|---|---|
| Gruppe 1 | LEGO EV3 Steuerung und Sensorauslese |
| **Gruppe 2** | **TI Sensor Bluetooth-/MQTT-Anbindung, Edge Computing, Node-RED Filterung** |
| Gruppe 3 | Datenspeicherung und Datenbankanbindung (MariaDB) |
| Gruppe 4 | ThingsBoard-Dashboard und Visualisierung |

Gruppe 2 nimmt in dieser Architektur eine Brückenfunktion ein: Sie empfängt Rohmesswerte aus der physischen Welt (Bluetooth-Sensordaten) und stellt sie – strukturiert und gefiltert – für alle nachgelagerten Gruppen über den MQTT-Broker bereit. Der Datenfluss des Gesamtsystems lässt sich wie folgt darstellen:

```
LEGO EV3 + TI SensorTag
        │
        │  Bluetooth (IEEE 802.15.1 / BLE)
        ▼
  Raspberry Pi IWILR3-6  ◄─── Gruppe 2 ───►
  [MQTT Broker Mosquitto]
        │
        │  MQTT / TCP (Port 1883)
        ▼
  Node-RED IWILR4-10
  [Filterung & Stream Processing]
        │
        ├──► ThingsBoard (Gruppe 4) – Visualisierung
        └──► MariaDB/PostgreSQL (Gruppe 3) – Persistenz
```

### 3.2 Teilarchitektur Gruppe 2

Die Systemarchitektur von Gruppe 2 lässt sich in drei Schichten einordnen, die dem IoT-Drei-Schichten-Modell entsprechen:

**Perception Layer:** Der TI SensorTag CC2650 erfasst physikalische Messwerte (Temperatur, Luftfeuchtigkeit, Lichtintensität, Bewegung) und sendet diese per BLE. Das LEGO EV3 System stellt ergänzend Farbsensordaten und Motorstatuswerte bereit.

**Network Layer:** Der Raspberry Pi (IWILR3-6) fungiert als Gateway. Er empfängt die BLE-Daten, wandelt sie in ein standardisiertes JSON-Format um und publiziert sie über den lokal laufenden Mosquitto MQTT-Broker.

**Data Processing Layer:** Node-RED (IWILR4-10) abonniert die MQTT-Topics, filtert die Rohdaten nach definierten Regeln und leitet relevante Zustandsmeldungen an die nachgelagerten Systeme weiter.

Die Einordnung in das Fog-Computing-Paradigma macht deutlich, dass Gruppe 2 keine reine Datendurchleitung realisiert, sondern aktiv Datenvorverarbeitung (Aggregation, Filterung, Formatierung) am Edge durchführt – ein zentrales Merkmal moderner IoT-Architekturen.

### 3.3 Bluetooth-Verbindung: TI Sensor / LEGO EV3 zum Raspberry Pi

#### Eingesetzte Hardware und Software

Für die Bluetooth-Kommunikation wurden folgende Komponenten eingesetzt:

- **Sensorknoten:** Texas Instruments CC2650 SensorTag (Bluetooth Low Energy 4.0)
- **Gateway:** Raspberry Pi mit integriertem Bluetooth-Adapter unter Raspberry Pi OS
- **Programmiersprache:** Python 3 (asynchron, `asyncio`)
- **BLE-Bibliothek:** `bleak` – plattformunabhängige Python-Bibliothek für BLE-Kommunikation über das GATT-Protokoll

#### Zweistufiger Verbindungsansatz

Die Implementierung erfolgte in zwei Schritten, die durch zwei separate Python-Skripte abgebildet werden:

**Schritt 1 – Discovery-Skript `find_and_connect.py`:** In einem ersten Schritt wurde das Gerät per BLE gescannt und seine GATT-Struktur erkundet. Das Skript verbindet sich mit dem SensorTag über seine bekannte MAC-Adresse (`98:07:2D:27:F1:86`) und gibt alle verfügbaren Services und Charakteristika mit ihren UUIDs und Eigenschaften aus. Dies ermöglichte die gezielte Identifikation der relevanten Daten-UUIDs für jeden Sensortyp, bevor das Produktivskript entwickelt wurde.

```python
import asyncio
from bleak import BleakScanner, BleakClient

ADDRESS = "98:07:2D:27:F1:86"

async def main():
    print("Suche nach dem SensorTag...")
    device = await BleakScanner.find_device_by_address(ADDRESS, timeout=15.0)

    if device is None:
        print("Gerät nicht gefunden.")
        return

    print(f"Gefunden: {device.address} | {device.name}")

    async with BleakClient(device) as client:
        print("Connected:", client.is_connected)
        for service in client.services:
            print(f"[Service] {service.uuid}")
            for char in service.characteristics:
                print(f"  [Char] {char.uuid} | {char.properties}")

asyncio.run(main())
```

**Schritt 2 – Produktiv-Skript `sensor.py`:** Das Hauptskript realisiert den dauerhaften Betrieb. Für jeden Sensor aus dem `SENSORS`-Dictionary – das Sensor-Namen auf GATT-UUIDs (`config`, `data`) abbildet – werden zwei Schritte ausgeführt: Erstens wird der Sensor durch Schreiben von `0x01` in die Config-Charakteristikum aktiviert (im Auslieferungszustand sind alle Sensoren des CC2650 deaktiviert). Zweitens werden BLE-Notifications über `start_notify()` abonniert, sodass der Raspberry Pi bei jeder neuen Messung automatisch benachrichtigt wird. Der `notification_handler` wandelt die Rohdaten in das JSON-Format um und publiziert sie über MQTT. Das Skript läuft in einer Endlosschleife, bis es manuell beendet wird.

```python
async with BleakClient(device) as client:
    print(f"Verbunden mit {address}")

    for name, uuids in SENSORS.items():
        # Sensor einschalten (0x01 in Config-Charakteristikum schreiben)
        await client.write_gatt_char(uuids["config"], b"\x01")
        # BLE-Notifications abonnieren
        await client.start_notify(uuids["data"], notification_handler)
        print(f"-> {name} aktiviert.")

    print("\nObservation läuft. Daten werden an MQTT gesendet...")
    while True:
        await asyncio.sleep(1)

if __name__ == "__main__":
    asyncio.run(main(ADDRESS))
```

Die aus dem SensorTag eingehenden Rohdaten werden im `notification_handler` in das folgende JSON-Format konvertiert und auf dem MQTT-Topic `Sensor` publiziert (vgl. Abschnitt 3.4):

```json
{
  "device": "ti_cc2650",
  "type": "Illuminance",
  "value": 38.99,
  "timestamp": 1780051874.037
}
```

### 3.4 MQTT-Konfiguration

#### Broker-Setup

Als MQTT-Broker dient der auf dem Raspberry Pi **IWILR4-11** betriebene Dienst, der für alle Gruppen als gemeinsame Kommunikationsinfrastruktur bereitsteht; die Verbindung erfolgt unverschlüsselt über **Port 1883** (MQTT 3.1.1). Der Rohdaten-Eingang `Sensor` wird mit **QoS 2** (exactly once) abonniert, um Doppelverarbeitung auszuschließen; die Ausgangs-Topics nutzen keinen expliziten QoS-Level, da die Weiterleitung bereits durch die Rate-Limiter in Node-RED gesteuert wird.

#### Topic-Struktur und Datenpipeline

Die MQTT-Kommunikation von Gruppe 2 erfolgt in zwei Stufen. Das Python-Skript `sensor.py` auf dem Raspberry Pi publiziert die Rohdaten des TI SensorTag auf dem Eingangs-Topic `Sensor`. Node-RED abonniert dieses Topic, verarbeitet die Daten und republiziert sie auf separaten, semantisch strukturierten Ausgangs-Topics unter dem Präfix `Factory/ConditionMonitoring/`:

| Stufe | Topic | Inhalt |
|---|---|---|
| Eingang (Rohdaten) | `Sensor` | JSON mit `device`, `type`, `value`, `timestamp` |
| Ausgang | `Factory/ConditionMonitoring/AirPressure` | Luftdruck in hPa (Observation-Format) |
| Ausgang | `Factory/ConditionMonitoring/Humidity` | Luftfeuchtigkeit in %RH (Observation-Format) |
| Ausgang | `Factory/ConditionMonitoring/Illuminance` | Lichtintensität in lux (Observation-Format) |
| Ausgang | `Factory/ConditionMonitoring/Temperature` | Temperatur in °C (Observation-Format) |

#### Rohdaten-Payload (Topic: `Sensor`)

Das Python-Skript sendet für jeden Messwert ein kompaktes JSON-Objekt mit den Feldern `device`, `type`, `value` und `timestamp` (Format vgl. Abschnitt 3.3). Die folgende Abbildung zeigt eingehende Rohdaten in einem MQTT-Client, der das Topic `Sensor` abonniert hat:

![MQTT Rohdaten auf Topic Sensor](Image 29.05.26 at 12.51.png)

*Abbildung 1: MQTT-Rohdaten-Payload auf Topic „Sensor" (eigene Darstellung, 2026)*

#### Observation-Payload (Ausgangs-Topics)

Node-RED transformiert die Rohdaten in ein standardisiertes **Observation-Format** mit allen für die nachgelagerten Gruppen relevanten Metadaten (Geräte-ID, Sensortyp, Standort, Messwert mit Einheit, ISO-8601-Zeitstempel):

```json
{
  "Observation": {
    "MachineID": "CC2650STK",
    "SensorTypeCode": "Temperature",
    "LocationID": "A1.005",
    "MeasureContent": 26.18,
    "MeasureUnitCode": "°C",
    "DateTime": "2026-05-29T10:50:01.741Z"
  }
}
```

Die folgende Abbildung zeigt den MQTT Explorer mit den vier abonnierten Ausgangs-Topics und einem Beispiel einer eingehenden Temperatur-Observation:

![MQTT Broker mit Observation-Nachrichten](Image 29.05.26 at 12.50.png)

*Abbildung 2: MQTT-Broker mit eingehenden Observation-Nachrichten (eigene Darstellung, 2026)*

> **Hinweis:** Die Screenshots in Abbildung 1 und 2 entstanden in einer frühen Testphase, in der die Sensortypen noch mit den ursprünglichen Bezeichnungen (`lux`, `temperature` usw.) gekennzeichnet waren. In der finalen Implementierung tragen sie die mit den Ausgangs-Topics konsistenten Namen (`Illuminance`, `Temperature` usw.).

### 3.5 Node-RED Flows und Filterlogik

#### Flow-Übersicht

Die Node-RED-Instanz auf IWILR4-10 (Port 1880) enthält einen gemeinsamen Flow für alle vier Sensortypen des TI CC2650 SensorTag:

![Node-RED Flow Gruppe 2](Bildschirmfoto 2026-05-29 um 12.47.58.png)

*Abbildung 3: Node-RED Flow Gruppe 2 (eigene Darstellung, 2026)*

#### Eingabe: MQTT Input Node „BL-Sensor"

Der Flow startet mit dem **MQTT-Input-Node** „BL-Sensor", der das Topic `Sensor` mit QoS 2 abonniert; ein paralleler Debug-Node dient nur der Laufzeitkontrolle.

#### Verteilung: Switch-Node „Splitter"

Der **Switch-Node „Splitter"** verzweigt den eingehenden Datenstrom anhand des Feldes `payload.type` über **JSONata-Ausdrücke** in vier Ausgänge:

| Ausgang | JSONata-Bedingung | Sensortyp |
|---|---|---|
| 1 | `payload.type = "AirPressure"` | Luftdruck |
| 2 | `payload.type = "Humidity"` | Luftfeuchtigkeit |
| 3 | `payload.type = "Illuminance"` | Lichtintensität |
| 4 | `payload.type = "Temperature"` | Temperatur |

#### Verarbeitungszweige

Jeder der vier Splitter-Ausgänge durchläuft eine Kette aus drei Komponenten:

**1. Rate-Limiter (Delay-Node, `drop: true`):** Begrenzt den Durchsatz auf **1 Nachricht/Minute** und verwirft überschüssige Nachrichten – die zentrale Datenreduktion, da der SensorTag mehrfach pro Sekunde sendet.

**2. Function-Node „MSG-Edit":** Transformiert die Rohdaten in das Observation-Format (vgl. Abschnitt 3.4); der Code ist für alle Sensoren strukturell identisch, nur `MeasureUnitCode` und Zeitstempel unterscheiden sich. Beispiel Temperatur:

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

**3. MQTT-Output-Node:** Publiziert die formatierte Observation auf dem jeweiligen Ausgangs-Topic (`Factory/ConditionMonitoring/Temperature` usw.).

#### Erweiterte Logik: Alarm und Trendüberwachung

Für Temperatur und Licht sind zusätzliche Verarbeitungspfade implementiert:

**Alarm-Logik (Temperatur & Licht):** Ein Function-Node „ALARM CRITICAL" prüft kritische Schwellenwerte – Temperatur unter 20 °C bzw. über 40 °C, Lichtintensität unter 100 lx bzw. unter 10 lx – und gibt eine gesprochene Warnung über einen **Play-Audio-Node** aus (z. B. *„Alarm! Temperature is above 40 degrees!"*). Ein vorgeschalteter Delay-Node begrenzt die Häufigkeit auf maximal einen Alarm alle 30 s (Temperatur) bzw. 10 s (Licht).

**Trendüberwachung (Temperatur):** Ein Switch-Node vergleicht jeden Temperaturwert mit dem vorherigen (`prev`) und realisiert so ein **ereignisbasiertes Reporting**: Bei einer Wertänderung wird das MQTT-Topic schnell aktualisiert (Delay 13 s), bei unverändertem Wert gedrosselt (Delay 1/Minute).

---

## 4 Kritische Würdigung der Projektergebnisse

### 4.1 Zielerreichung

<!-- [TODO: Diesen Abschnitt mit euren tatsächlichen Projektergebnissen füllen] -->

Im Rahmen der Projektarbeit wurden die drei definierten Teilziele <!-- [vollständig / weitgehend / teilweise] --> erreicht:

**Bluetooth-Verbindung:** Die Verbindung zwischen dem TI SensorTag und dem Raspberry Pi konnte <!-- [erfolgreich / mit Einschränkungen] --> aufgebaut werden. <!-- [Beschreibung des Ergebnisses, z. B.: Alle fünf Sensorcharakteristika (Temperatur, Luftfeuchtigkeit, Licht, Bewegung, Luftdruck) wurden korrekt ausgelesen und übertragen.] -->

**MQTT-Anbindung:** Der Mosquitto-Broker läuft stabil auf dem Raspberry Pi und verarbeitet alle Publish/Subscribe-Verbindungen zuverlässig. Die definierten Topics werden korrekt bedient; die JSON-Payloads entsprechen dem vereinbarten Format und sind von allen Subscriber-Systemen (Node-RED, ThingsBoard) verarbeitbar.

**Node-RED Filterlogik:** Die implementierten Flows verarbeiten <!-- [Angabe] --> Nachrichten pro Sekunde ohne erkennbaren Rückstau. Die Filterfunktionen (Schwellenwertüberwachung, Validierung, Aggregation) arbeiten korrekt. Die gefilterten Daten werden erfolgreich an ThingsBoard (Gruppe 4) und die Datenbank (Gruppe 3) weitergeleitet.

### 4.2 Herausforderungen und Lösungsansätze

<!-- [TODO: Tatsächliche Herausforderungen und eure Lösungen eintragen] -->

**Bluetooth-Verbindungsstabilität:** Eine Herausforderung stellte die Stabilität der Bluetooth-Verbindung dar, insbesondere <!-- [z. B. bei Interferenzen im 2,4-GHz-Band durch parallel betriebene WLAN-Netze im Hochschulgebäude] -->. Gelöst wurde dies durch <!-- [z. B.: Implementierung einer automatischen Reconnect-Logik im Python-Skript, die bei Verbindungsabbruch nach einem definierten Timeout einen neuen Verbindungsaufbau initiiert] -->.

**MQTT Topic-Koordination:** Die Abstimmung der Topic-Struktur zwischen den Arbeitsgruppen erforderte mehrere Iterationen, da nachgelagerte Gruppen (insbesondere Gruppe 3 und 4) spezifische Anforderungen an das Payload-Format hatten. <!-- [Beschreibung der gefundenen Lösung] -->

**Node-RED Performance:** <!-- [Falls relevant: Beschreibung von Engpässen und Maßnahmen] -->

### 4.3 Bewertung der gewählten Technologien

**Bluetooth vs. Alternativen:** Für die Laborumgebung ist Bluetooth/BLE gut geeignet – ausreichende Reichweite (Class 2: 10 m), geringer Energieverbrauch und native Verfügbarkeit auf EV3 und SensorTag. Für größere Distanzen oder Outdoor-Einsatz kämen **ZigBee**, **LoRaWAN** oder **WLAN** mit jeweils anderen Trade-offs bei Energie, Reichweite und Datenrate in Frage.

**MQTT vs. Alternativen:** Mit minimalem Overhead und Publish/Subscribe passt MQTT ideal zu einem Datenproduzenten (Gruppe 2) und mehreren Konsumenten (Gruppen 3 und 4). **CoAP** (Request/Response) und **HTTP/REST** (höherer Overhead) sind für kontinuierliche Sensordatenströme weniger geeignet.

**Node-RED vs. Alternativen:** Node-RED bietet eine gute Balance aus visueller Einfachheit und ausreichendem Funktionsumfang. Für höhere Datenvolumen oder komplexe Analysen wären **Apache Kafka** oder **Apache Flink** leistungsfähiger, aber deutlich aufwändiger einzurichten.

---

## 5 Literaturverzeichnis

Andelfinger, V. P./ Hänisch, T. (Hrsg.) (2015): Internet der Dinge – Technik, Trends und Geschäftsmodelle. Wiesbaden: Springer Gabler.

Bluetooth Special Interest Group (2021): Bluetooth Core Specification Version 5.3, https://www.bluetooth.com/specifications/specs/core-specification-5-3/ (<!-- [Zugriffsdatum eintragen] -->).

International Telecommunication Union (ITU-T) (2013): Overview of the Internet of things. Recommendation ITU-T Y.2060. Genf: ITU-T.

OASIS (2014): MQTT Version 3.1.1. OASIS Standard, https://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html (<!-- [Zugriffsdatum eintragen] -->).

OpenJS Foundation (o. J.): Node-RED – Low-code programming for event-driven applications, https://nodered.org/docs/ (<!-- [Zugriffsdatum eintragen] -->).

Rayes, A./ Salam, S. (2017): Internet of Things – From Hype to Reality. 3. Aufl., Cham: Springer.

Thomé, Frank (2026): MW220 Internet of Things – Technologien und Anwendungen. Vorlesungsunterlagen. Hochschule für Wirtschaft und Gesellschaft Ludwigshafen.

<!-- [TODO: Weitere verwendete Quellen nach demselben Format ergänzen] -->

---

## Anhang

### Anhang A: Node-RED Flow-Diagramm

Abbildung 3 (vgl. Kapitel 3.5) zeigt den vollständigen Node-RED Flow auf IWILR4-10 (Port 1880). Der Flow verarbeitet alle eingehenden Sensordaten des TI CC2650 SensorTag: von links nach rechts sind MQTT-Input „BL-Sensor", Switch „Splitter", vier sensorspezifische Verarbeitungszweige mit Rate-Limitern und MSG-Edit-Functions sowie die MQTT-Output-Nodes zu sehen. Für Temperatur und Licht sind zusätzlich Alarm-Zweige mit Play-Audio-Nodes eingebunden.

### Anhang B: Node-RED Flow-Export (JSON)

Der vollständige Flow-Export liegt der Abgabe als separate Datei `flows.json` bei. Die Datei kann direkt über das Node-RED-Menü *Import → Zwischenablage* importiert werden.

### Anhang C: MQTT-Topic-Übersicht

| Topic | Publisher | Subscriber | QoS |
|---|---|---|---|
| `Sensor` | `sensor.py` (Raspberry Pi) | Node-RED | 2 |
| `Factory/ConditionMonitoring/AirPressure` | Node-RED | ThingsBoard, DB | – |
| `Factory/ConditionMonitoring/Humidity` | Node-RED | ThingsBoard, DB | – |
| `Factory/ConditionMonitoring/Illuminance` | Node-RED | ThingsBoard, DB | – |
| `Factory/ConditionMonitoring/Temperature` | Node-RED | ThingsBoard, DB | – |

### Anhang D: Python-Skripte

**`find_and_connect.py`** – Discovery-Skript zum einmaligen Erkunden der GATT-Struktur des TI CC2650 SensorTag. Listet alle Services und Charakteristika mit UUIDs und Eigenschaften auf.

**`sensor.py`** – Produktiv-Skript für den Dauerbetrieb. Aktiviert alle Sensoren über ihre Config-Charakteristika, abonniert BLE-Notifications und publiziert Messwerte kontinuierlich an den MQTT-Broker.

Beide Skripte liegen der Abgabe als separate `.py`-Dateien bei.

### Anhang E: Relevante Konfigurationsdateien

<!-- [TODO: Mosquitto-Konfiguration, Python-Skripte, sonstige Konfigdateien] -->
