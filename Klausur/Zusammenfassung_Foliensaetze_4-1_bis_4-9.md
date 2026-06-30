# Klausur-Zusammenfassung MW220 IoT – Anwendungsteil (Foliensätze 4.1 – 4.9)

**Fokus laut Eingrenzung:** Anwendung! Nachrichtenaufbau & Design, Arbeitsaufträge durchgehen (Punkt 4). Keine Definitionen.
Theoriekapitel 1–3 + alle Skripte werden gestellt → hier nur die **Anwendung im Projekt**.

## Das durchgängige Projekt (roter Faden)

In allen Foliensätzen 4.x wird **dieselbe Maschine** schrittweise informationstechnisch erschlossen:
ein **Lego Mindstorms Farbsortierer** ("Color Sorter") in einer **verteilten Systemlandschaft**.

**Jeder Foliensatz = ein Arbeitsauftrag = eine Projektstufe:**

| Foliensatz | Arbeitsauftrag | Thema der Projektstufe |
|------------|----------------|------------------------|
| 4.0 | — | Einführung & Rahmen: Gesamtarchitektur, Gruppen, Projektbericht |
| 4.1 | AA 1 | Digitaler Zwilling / Verwaltungsschale (Datenmodell) |
| 4.2 | AA 2 | Systemarchitektur vs. Referenzmodelle (5-Schichten, RAMI 4.0, IIRA) |
| 4.3 | AA 3 | Sensor-Aktor-System / Regelung (Edge vs. Fog) |
| 4.4 | AA 4 | Identifikation & Lokalisierung von Mehrweg-Behältern |
| 4.5 | AA 5 | Kommunikation mit MQTT (Topics, Wildcards, QoS, Retained, LWT) |
| 4.6 | AA 6 | Syntaktische Interoperabilität: XML & JSON Payloads |
| 4.7 | AA 7 | RESTful Web Services mit OData (ERP-Anbindung) |
| 4.8 | AA 8 | Semantische Interoperabilität: ebXML CCTypes & JSON-LD / schema.org |
| 4.9 | AA 9 | Digitale Services / Anbindung externes Wartungsunternehmen |

**Die geplante Systemarchitektur (Folie 15) – Bezugspunkt fast aller Aufträge:**
Komponenten von unten nach oben:
- **Machine / Sensor** (Farbsortierer + Sensoren) – verbunden per **USB / Bluetooth**
- **Digital Twin / IoT Edge** (Raspberry Pi, **Node-RED**)
- **Middleware** (Raspberry Pi, **Mosquitto** MQTT-Broker, **IoT Gateway / ThingsBoard**)
- **Anwendungskomponenten:** **Production Control** (ERP, iDempiere, REST), **Monitoring** (ThingsBoard), **Analytics** (Apache Flink, MQTT)

---

## 4.0 – Einführung & Rahmen der IoT-Projektarbeit

**Was passiert:** Foliensatz 4.0 setzt den **Rahmen** für die gesamte Projektarbeit (Kapitel 4). Leitmotiv: **"Lego Mindstorms Color Sorter meets Industrie 4.0"** – eine reale Lego-Mindstorms-EV3-Maschine wird wie eine echte Industrie-4.0-Produktionsmaschine behandelt. Hier wird die **finale Gesamt-Systemarchitektur** definiert, auf die sich alle folgenden Arbeitsaufträge (4.1–4.9) als "Folie 15" beziehen.

**Big Picture / Use Case:** Der Farbsortierer sortiert Lego-Bausteine nach Farbe und wird in eine verteilte IoT-Systemlandschaft eingebettet, die vom Sensor bis zum ERP-System reicht.

**Finale Systemarchitektur + Gruppeneinteilung (4 Gruppen):**
- **Gruppe 1 – Production Control / ERP:** ERP-Einrichtung (iDempiere) für Fertigungssteuerung mit Auftrag & Rückmeldung, **Web Services** zum Lesen/Schreiben, **MQTT In-/Outbound** für die Fertigungssteuerung → Bezug zu **4.6 / 4.7**
- **Gruppe 2 – Edge / Sensorik:** **TI SensorTag** Bluetooth- & MQTT-Anbindung, **Edge Computing** mit **Filterung** der Sensordaten für die Zustandsüberwachung → Bezug zu **4.3 / 4.5**
- **Gruppe 3 – Data Streaming / Analytics:** **Datenharmonisierung & -persistierung** zur Analyse der Sensordaten (Apache Flink / Node-RED) → Bezug zu **4.6 / 4.8**
- **Gruppe 4 – Dashboard / Digital Twin:** Dashboard-Entwicklung mit MQTT-Anbindung, **Regeldefinition** und **Digital-Twin-Definition** für die Zustandsüberwachung → Bezug zu **4.1 / 4.3**

→ Die **Zustandsüberwachung (Condition Monitoring)** ist das gruppenübergreifende Kernthema.

**Eingesetzte Infrastruktur (Hintergrundwissen):**
- **Raspberry Pis** (IWILR…) und **Ubuntu-VMs** (IWILIOT…), Zugriff per **PuTTY / WinSCP / FileZilla**
- Anwendungen: **iDempiere** (ERP, Port 8080), **ThingsBoard** (Port 8080), **Node-RED** (Port 1880), **Mosquitto** (MQTT-Broker), **PostgreSQL / MariaDB**
- **Eclipse Paho** = Bibliotheken zur MQTT-Client-Implementierung (Java / Python)
- Kurzeinführung Linux (Befehle wie `ls`, `cd`, `cp`, `rm -R`, `sudo`, `apt …`; Editoren `nano` / `vi`)

**Projektbericht (DIN 69901):** "An einen bestimmten Empfänger gerichtete Darstellung über Entwicklung und Stand eines Projektes" – ca. **12–15 DIN-A4-Seiten**: Unternehmens-/Auftraggeberumfeld, Aufgabenstellung/Ziel/Vorgehen, Projektorganisation, theoretische Grundlagen, **Lösungsansätze** (z. B. MQTT-Topics, JSON-Payload), kritische Würdigung, Ausblick, Literatur.

> **Klausur-Tipp:** 4.0 liefert den **Kontext**, in den alle 4.x-Aufträge eingebettet sind. Wichtig fürs Verständnis: Die "Folie 15", die in den Aufträgen ständig referenziert wird, **ist diese Gesamtarchitektur** (Machine/Sensor → Edge → Middleware → Anwendungen). Die Zugangsdaten/Linux-Befehle sind reines Projekt-Handling und kaum prüfungsrelevant – relevant ist die **Architektur + Rollenverteilung der Komponenten**.

---

## 4.1 – Digitaler Zwilling & Verwaltungsschale (Arbeitsauftrag 1)

**Was passiert:** Für die Maschine wird ein **Digitaler Zwilling** als Datenmodell entwickelt, angelehnt an die **Verwaltungsschale (Asset Administration Shell, AAS)** der Industrie 4.0. Umsetzung mit dem **AASX Package Explorer**.

**Aufbau der Verwaltungsschale:** besteht aus **Teilmodellen (Submodels)**, die wiederum **Merkmale (Properties)** mit Attributen wie `idShort`, `semanticId`, `description`, `value` enthalten. Ein **Dictionary** liefert die semantischen Referenzen.

**Im Projekt verwendete Teilmodelle (5–10 Attribute reichen):**

- **Asset Identification (generisch)** → eindeutige Identifikation
  - Typbezogen: `ManufacturerName` (z. B. "Lego"), `ManufacturerTypName` (z. B. "Color Sorter")
  - Instanzbezogen: `AssetId`, `InstanceId` (Seriennummer, z. B. 4711)
- **Asset Environment / Asset Umgebung (generisch)** → Umgebungsparameter
  - `EnvironmentalTemperature`, `RelativeHumidity`, `AirPressure`, `Location` (z. B. A203)
- **Production Control / Fertigungssteuerung (frei)** → Kommunikation mit "Auftraggeber"
  - `ProductionOrderId`, `ProductionStart`, `ProductionEnd`, `ProductionStatus`
- **Condition Monitoring / Zustandsüberwachung (frei)** → Laufzeit-/Prozessdaten des Assets
  - `Runtime`, `CpuTemperature`, `CaseTemperature`, `Humidity`, `RotationSpeed`, `EnergyConsumption`

**Nicht projektrelevant:** Technisches Datenblatt, Dokumentation, Equipment Information.

> **Klausur-Tipp:** Unterscheide **typ- vs. instanzbezogene** Identifikationsmerkmale und **generische vs. freie** Teilmodelle. In der Altklausur gefragt: Identifikationsmerkmale (Hersteller, TypDescription, ManufacturID, TypID) für *Asset Identification* und Condition-Monitoring-Merkmale (Temperature, Pressure, Stromverbrauch, ProductionOrder). Namen in **UpperCamelCase**, englisch, aus Rubrik `idShort`.

---

## 4.2 – Systemarchitektur vs. Referenzmodelle (Arbeitsauftrag 2)

**Was passiert:** Die geplante Architektur (Folie 15) wird auf **Kompatibilität mit gängigen IoT-Referenzmodellen** geprüft und die Komponenten den Schichten/Domänen zugeordnet.

**a) 5-Schichten-IoT-Architektur** (im Skript teils "7-Schichten" genannt):
- **Perception Layer** ← Machine / Sensor
- **Transport Layer** ← Middleware (MQTT-Verbindungen)
- **Data Processing Layer** ← Edge / Middleware
- **Application Layer** ← Production Control, Monitoring, Analytics

**b) RAMI 4.0 (Layer / rechte Achse):**
- **Asset Layer** ← Machine / Sensor
- **Integration Layer** ← Digital Twin / IoT Edge
- **Communication Layer** ← Middleware
- **Information Layer** ← Datenmodell / Analytics
- **Functional Layer** ← Anwendung Zustandsüberwachung
- **Business Layer** ← Betriebliche Produktionsplanung/-steuerung

**c) IIRA (Functional Domains & Physical Systems / linke Achse):**
- **Physical Systems** ← Maschinen mit Sensoren
- **Control (Communication)** ← Edge / Middleware
- **Operations / Information / Application** ← Anwendungskomponenten
- **Information Flows (Pfeile)** ← Kommunikationsmodul (Verbindungen)

> **Klausur-Tipp:** Genau diese Zuordnung wurde in der Altklausur (Aufgabe 2) abgefragt – Komponenten den **RAMI-4.0-Layern** und den **IIRA-Domänen** zuordnen. Merke: RAMI = 6 Layer (Asset → Business), IIRA = Domänen + Physical Systems + Information Flows.

---

## 4.3 – Sensor-Aktor-System / Regelung (Arbeitsauftrag 3)

**Was passiert:** Das **Grundprinzip eines Sensor-Aktor-Systems (Regelkreis)** wird auf die Architektur übertragen, um eine **Prozessregelung** der Maschine zu ermöglichen.

**Regelkreis-Begriffe (an der Maschine):**
- **Regelstrecke (Prozess)** = die Maschine selbst, mit **Sensor (S)** und **Aktor (A)**
- **Regeleinrichtung** = der Regler
- Signale: `w(t)` Führungsgröße, `e(t)` Regeldifferenz, `u(t)` Stellgröße (→ control data zum Aktor), `y(t)` Regelgröße (← sensor data vom Sensor)

**Zwei Realisierungsvarianten (wo läuft die Regeleinrichtung?):**
- **Variante 1 – "Edge-Lösung":** Regeleinrichtung in der **Digital Twin / IoT-Edge-Komponente** (näher an der Maschine, geringere Latenz)
- **Variante 2 – "Fog-Lösung":** Regeleinrichtung in der **Middleware-Komponente** (zentraler)

**Regelstrecke** wird immer in der **Machine/Sensor-Komponente** (Aktor + Sensor) implementiert.

**Praxisbeispiele Prozessregelung bei einer Sortiermaschine:** z. B. Bandgeschwindigkeit anhand Füllstand regeln, Sortierklappe nach erkannter Farbe steuern, Stopp bei vollem Behälter.

> **Klausur-Tipp:** Edge vs. Fog ist der Kern – beide Varianten unterscheiden sich nur im **Ort der Regeleinrichtung**. Sensor liefert `y(t)`, Aktor empfängt `u(t)`.

---

## 4.4 – Identifikation & Lokalisierung von Mehrweg-Behältern (Arbeitsauftrag 4)

**Was passiert:** Die aussortierten Lego-Bausteine werden in **Mehrweg-Behältern** gesammelt und eingelagert. Es wird ein Konzept für **Identifikation** und **Lokalisierung** dieser Behälter entwickelt – mit Bezug zum **ERP-System (z. B. SAP)**.

**Prozess (3 Aktivitäten):** Sortieren → Sammeln → Einlagern (Um-/Auslagern), gesteuert durch **Produktionsplanung und -steuerung / Versand** (Fertigungsauftrag, Rückmeldung, Transportauftrag, Quittierung).

**a) Identifikation der Behälter:**
- **Identifikatoren:** Seriennummer (Behälter) / Materialnummer (Fertigerzeugnis) / Fertigungsauftragsnummer / alternativ Kundenauftrags- bzw. Lieferungsnummer
- **Technologien:** **Barcode / RFID**

**b) Realisierbarkeit im ERP:** Zusammenspiel der Behälter-Identifikatoren mit **Belegnummern** aus Produktion und Lagerverwaltung; Abhängigkeiten zwischen **Kundenauftrag, Fertigungsauftrag, innerbetrieblichem Transportauftrag**.

**c) Lokalisierung der Behälter:**
- **Technologien:** Barcode / RFID / (WLAN / iBeacon)
- Zuordnung von **Behälternummer ↔ Lagerplatznummer** bei Einlagerungs-, Umlagerungs- und Auslagerungsprozessen

> **Klausur-Tipp:** Unterscheide klar **Identifikation** (Was ist es? → Barcode/RFID) von **Lokalisierung** (Wo ist es? → Barcode/RFID + WLAN/iBeacon). Bezug zu Belegen im ERP nicht vergessen.

---

## 4.5 – Kommunikation mit MQTT (Arbeitsauftrag 5)

**Was passiert:** Die Verbindungen **Edge↔Middleware** und **Middleware↔Analytics** werden mit **MQTT** realisiert. Der **Message Broker (Mosquitto)** läuft in der **Middleware-Komponente**. Die Maschine ist Teil eines größeren **Maschinenparks**.

**a) MQTT-Clients und Rollen (Publisher / Subscriber):**
- **Production Control:** Publisher (sendet Production Order) + Subscriber (empfängt Production Confirmation)
- **Digital Twin / Edge:** Subscriber (Order empfangen) + Publisher (Confirmation + Sensordaten senden)
- **Monitoring & Analytics:** Subscriber (Sensordaten empfangen)
- **Broker** sitzt in der Middleware

**b) Hierarchische Topics (mit `/`) + Wildcards (`+` Single Level, `#` Multi Level):**
- `Factory/ProductionControl/Order`
- `Factory/ProductionControl/Confirmation`
- `Factory/ConditionMonitoring/Temperature` (etc.)

**c) MQTT-Protokollfeatures (diskutieren & entscheiden):**
- **Quality of Service (QoS):** 0 (höchstens einmal), 1 (mindestens einmal), 2 (genau einmal)
- **Retained Message:** Broker speichert letzte Nachricht → neuer Subscriber bekommt sofort den letzten Wert
- **Last Will and Testament (LWT):** Broker sendet Nachricht, falls Client unerwartet die Verbindung verliert
- Projekt-Empfehlung: Aufträge **QoS 2 / keine Retained / kein LWT**; Sensordaten **QoS 0 / Retained nur bei Bedarf / LWT nur falls nicht in Anwendung gelöst**

**d) Praktische Verbindung** mit **MQTT.fx** zum Broker auf dem Raspberry Pi (Port 1883), Test-Publish/Subscribe mit Plain-Text-Payload.

> **Klausur-Tipp (sehr prüfungsrelevant – Altklausur Aufgabe 3!):**
> - Topics am Beispiel einer Maschine, z. B. `Machinery/ConditionMonitoring/Temperature`, `Machinery/ConditionMonitoring/EnergyConsumption`
> - **Wildcards:** `Machinery/#` = alle Nachrichten aller Maschinen; `Machinery/ConditionMonitoring` = alle Zustandsnachrichten; `Machinery/+/EnergyConsumption` = nur Energieverbrauch aller Maschinen (Single-Level-Wildcard `+`)
> - **Retained Message** = neuer Client erhält direkt den letzten Zustand ohne auf neue Nachricht zu warten
> - **QoS 0** wählen, wenn Sensornachrichten im Sekundentakt kommen und Netzbelastung minimal sein soll
> - **Broker** ersetzt Modbus-Master (Rolle: zentrale Verteilung), Clients ersetzen Modbus-Slaves

---

## 4.6 – Syntaktische Interoperabilität: XML & JSON Payloads (Arbeitsauftrag 6)

**Was passiert:** **Syntaktische Interoperabilität** wird realisiert – zwischen **Middleware und ERP** per **XML**, für die **MQTT-Payload** per **JSON**. Basis ist das Datenmodell aus 4.1.

**XML – Fertigungsauftrag (`ProductionOrder`):** verschachtelte Struktur mit `Number`, `FinishedProduct`, `Quantity unit="ST"`, `PlannedStartTimestamp` (UTC, Z), `Components` mit mehreren `Product` (`Color`, `Quantity`). → **Maßeinheit als Attribut** (`unit="ST"`, `unit="CEL"`).

**XML – Fertigungsrückmeldung (`ProductionConfirmation`):** `OrderReference`, `ActualStartTimestamp`, `ActualEndTimestamp`, `Status` ("ok" / "error").

**JSON – dieselben Inhalte** kompakter: Objekte `{}`, Arrays `[]` (z. B. `Components`), keine schließenden Tags.

**JSON – Sensornachricht (`Observation`):** `MachineId`, `SensorType`, `LocationId`, `Measure` mit `Value`, `Unit`, `Timestamp`. → **generische** Struktur, geeignet für alle SensorTypes.
- SensorTypes Maschine: Temperature, Humidity, Illuminance, AirPressure, (EnergyConsumption)
- SensorTypes Umgebung: EnvironmentalTemperature, RelativeHumidity, Illuminance, AirPressure

**XML vs. JSON (Vor-/Nachteile – Altklausur Aufgabe 4a):**
- **XML:** gute Lesbarkeit Mensch/Maschine, komplexe Elemente mit **Attributen**, **Validierung per Schema** möglich; aber **Overhead durch Redundanz**, anfällig für Sicherheitslücken
- **JSON:** **kompakter** mit geringem Overhead, gute Lesbarkeit; aber traditionell keine Attribute/Schema-Validierung im selben Umfang

> **Klausur-Tipp:** Nachrichtenaufbau selbst schreiben können! UTC-Zeitstempel im Format `JJJJ-MM-TTThh:mm:ssZ`. Maßeinheit in XML als **Attribut**. Sensordaten **einzeln** (eigenständige Nachrichten), nicht gebündelt. Syntaktische Korrektheit per Webbrowser (XML) bzw. JSON-Validierer prüfen.

---

## 4.7 – RESTful Web Services mit OData (Arbeitsauftrag 7)

**Was passiert:** Die **Fertigungssteuerung** zwischen **Middleware und ERP** wird mit **RESTful Web Services i. V. m. OData** realisiert. Das ERP stellt Web Services bereit: Fertigungsauftrag **lesen** und Fertigungsrückmeldung **anlegen**.

**a) Web Services + HTTP-Methoden:**
1. **GET** Production Order Details → **Read** (Fertigungsauftrag lesen)
2. **POST** Production Confirmation → **Create** (Rückmeldung anlegen)

Production Control betreibt einen **WebService Provider**, die Middleware einen **WebService Consumer** (zugleich MQTT-Publisher/Subscriber).

**b) URL-Aufbau nach OData URL Conventions:**
- `[Service Root URL]/ProductionControl/Order(4711)` → einzelner Auftrag per Schlüssel
- `[Service Root URL]/ProductionControl/Confirmation` mit "Create Payload" (POST)

> **Klausur-Tipp:** REST-CRUD-Zuordnung merken: **GET=Read, POST=Create**, PUT=Update, DELETE=Delete. OData adressiert Entitäten über `EntitySet(Key)`.

---

## 4.8 – Semantische Interoperabilität: ebXML CCTypes & JSON-LD (Arbeitsauftrag 8)

**Was passiert:** **Semantische Interoperabilität** durch (a/b) Bezug auf **EDI-Standards (ebXML Core Component Types)** und (c) Referenz auf **Ontologien** via **JSON-LD / schema.org**.

**a) + b) ebXML Core Component Types (CCTypes):** Elementbezeichnungen werden an **standardisierte Suffixe/Repräsentationen** angepasst:
- `...ID` (Identifier), `...Code`, `...Content` (eigentlicher Wert), `...DateTime`, `...Amount`, `...Quantity`, `...Text`, `...Measure`

Beispiel-Umbenennungen:
- `Number` → `ID`, `FinishedProduct` → `FinishedProductID`
- `QuantityValue` → `QuantityContent`, `QuantityUnit` → `QuantityUnitCode`
- `PlannedStartTimestamp` → `PlannedStartDateTime`, `ProductColor` → `ProductColorCode`
- Rückmeldung: `OrderReference` → `OrderReferenceID`, `ActualStart` → `ActualStartDateTime`, `Status` → `StatusCode`
- Sensor: `MachineId` → `MachineID`, `SensorType` → `SensorTypeCode`, `Measure.Value` → `MeasureContent`, `Unit` → `MeasureUnitCode`, `Timestamp` → `DateTime`

**c) JSON-LD mit `@context` (schema.org):** Element­bezeichnungen werden auf **schema.org-URIs** gemappt → semantische Eindeutigkeit:
- `MachineID` / `LocationID` → `http://schema.org/identifier`
- `MeasureContent` → `https://schema.org/value`
- `MeasureUnitCode` → `https://schema.org/unitCode`
- `DateTime` → `https://schema.org/observationDate`

Der `@context`-Block kann **eingebettet** oder als **Referenz** auf eine JSON-LD-Webseite vorliegen. Validierung mit **json-ld.org/playground** (Expanded/Compacted).

> **Klausur-Tipp:** ebXML-CCTypes = **standardisierte Namensgebung** (Suffix verrät den Datentyp/Repräsentation). JSON-LD `@context` = **semantische Anreicherung** durch Verlinkung auf Ontologie-Begriffe (schema.org). Das hebt die Interoperabilität von **syntaktisch → semantisch**.

---

## 4.9 – Digitale Services / Anbindung Wartungsunternehmen (Arbeitsauftrag 9)

**Was passiert:** Die Sensordaten gehen an die interne **Analytics-Komponente**. Zusätzlich wird über **"Digitale Services"** ein **externes Wartungsunternehmen** angebunden (Instandhaltung / Predictive Maintenance).

**a) Digitaler Service – Sensordaten bereitstellen:** Das Produktionsunternehmen stellt dem **Wartungsunternehmen** die **Sensordaten** über die Middleware bereit (Verbindung Middleware↔Middleware, **MQTT / REST / EDI**). Das Wartungsunternehmen betreibt eine eigene **Application (Analytics)**.

**b) Erweiterung – Instandhaltungsmeldungen zurück:** Auch die **externe Erfassung von Instandhaltungsmeldungen** ("maintenance notification") durch das Wartungsunternehmen erfolgt über einen Digitalen Service (Rückkanal an Production Control / Analytics).

**Architektur:** Zwei getrennte Unternehmen (Produktions- vs. Wartungsunternehmen), gekoppelt über ihre **Middleware-Komponenten** mit standardisierten Schnittstellen (MQTT, RESTful Web Services, EDI).

> **Klausur-Tipp:** "Digitaler Service" = Daten/Funktionen über Unternehmensgrenzen hinweg als Dienst bereitstellen (Geschäftsmodell-Ebene). Bidirektional: Sensordaten **raus**, Instandhaltungsmeldungen **rein**.

---

## Zusätzlich klausurrelevant (aus Altklausur, querliegend zu 4.x)

- **OPC-UA vs. MQTT:** OPC-UA = semantisches Datenmodell, Datenaustausch zwischen allen Unternehmensebenen, durchgängiges Sicherheits-/Authentifizierungskonzept (Argumente *für* OPC-UA als Ersatz proprietärer Middleware).
- **Edge Computing (dezentral) vs. Cloud (zentral):** Vorteile Edge = geringere Latenz/Echtzeit (→ Temperaturüberwachung), reduzierte Übertragungskosten/Netzlast (→ Energieverbrauchsüberwachung), Datensicherheit, Verfügbarkeit bei Netzausfall.
- **RDF (Resource Description Framework):** Tripel **Subjekt – Prädikat – Objekt** (z. B. Maschine – hat Fertigungsauftrag – 4711) für semantische Interoperabilität.
- **Kommunikationsorientierte Middleware:** **Nachrichtenorientiertes Modell** + **asynchroner Kommunikationsmodus** + **Warteschlange (Queue)** → maximale Unabhängigkeit von der Verfügbarkeit des Zielsystems (z. B. MOM / IBM MQ).
- **EDI / EDIFACT:** EDI-Komponenten = **Nachrichtenstandards** (UN/EDIFACT, ANSI ASC X12) + Konvertierung. EDIFACT-Nachrichtentypen z. B.: **IFTMBF** (Buchung/Reservierung Transportkapazität), **IFTMIN** (Transportauftrag), **HANMOV** (Umschlag/Transport), **IFTSTA** (Statusmeldung).

---

*Erstellt aus den Foliensätzen MW220 Teil 4.1–4.9 (SS 2026, Prof. Dr. Frank Thomé) + Abgleich mit der Altklausur 2024-06-27.*
