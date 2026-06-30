---
tags:
  - IoT
  - MW220
  - Grundlagen
  - Klausurvorbereitung
modul: MW220 Internet of Things – Technologien und Anwendungen
teil: 1
thema: IoT Grundlagen
folien: 12–47
---

# VL1 – IoT Grundlagen

## Agenda

- [[#1.1 IoT Bestimmungsfaktoren]]
- [[#1.2 IoT Systemarchitekturen]]

---

## 1.1 IoT Bestimmungsfaktoren

### Begriff Internet der Dinge (IoT)

> [!definition] Digitales Objekt
> Alltagsgegenstand, ausgerüstet mit Informations- und Kommunikationstechnik und mit dem Internet verbunden (z. B. Kühlschrank, Auto, Smartwatch). Stellt objekt- oder umgebungsspezifische Informationen bereit und/oder ermöglicht Fernsteuerung.
[!definition] Test

> [!definition] Internet der Dinge
> Zusammenspiel (Vernetzung) digitaler Objekte über das Internet. Begriff geprägt ~2000 von **Kevin Ashton** (MIT Auto-ID Center). Ursprünglich auf RFID-Identifikation fokussiert, heute inkl. weiterer Sensor- und Identifikationstechnologien.

### Drei Dimensionen der Kommunikation im IoT (ITU-T)

| Dimension | Erklärung |
|---|---|
| **Mensch–Mensch** | klassische Kommunikation (z. B. Telefon) |
| **Mensch–Maschine** | z. B. Smartphone steuert Smart-Home-Gerät |
| **Maschine–Maschine (M2M)** | Geräte kommunizieren autonom ohne menschliche Interaktion → Kern des IoT |

> [!tip] Prüfungshinweis (Folie 14)
> Der wesentliche Unterschied zu herkömmlicher Mobilfunk-Kommunikation ist die M2M-Dimension, bei der Maschinen **ohne menschlichen Eingriff** miteinander kommunizieren.

### Ubiquitous (Pervasive) Computing

Drei wesentliche Merkmale:

1. **Allgegenwärtigkeit** – sehr viele digitale Endgeräte, unsichtbar in Alltagsgegenstände integriert (Haushaltsgeräte, Kleidung, Büroausstattung); oft per Smartphone oder Voice Control ansprechbar.
2. **Vernetztheit** – Endgeräte sind untereinander und mit Anwendungen über das Internet verbunden (funk- oder kabelgebunden).
3. **Erkennung von Objekt-/Umgebungszuständen** – durch Sensortechnologien (z. B. Temperatursensor) und Identifikationstechnologien (z. B. RFID, GPS).

### Cyber-Physisches System (CPS)

> [!definition] CPS
> Komplexer Systemverbund aus:
> - Informationstechnischen Komponenten (Hard- und Software)
> - Mechanischen/elektronischen Komponenten (Geräte, Maschinen, Roboter)
> - Netzwerkinfrastruktur (Internet) mit Echtzeitkommunikation

Kernbestandteile: eingebettete Systeme, Überwachungs-/Steuerungs-/Regelfunktionen, drahtgebundene oder drahtlose Kommunikationsnetze, ggf. Cloud-Anbindung.

**Haupteinsatzgebiete:**
- Industrie 4.0 / Logistik 4.0
- eHealth (medizinische Assistenzsysteme)
- Smart Grids (Energieversorgung)
- Smart Mobility (Verkehrssteuerung)

### Digitaler Zwilling – Vier Typen

> [!definition] Digitaler Zwilling
> Digitale Repräsentanz eines physischen Objekts (Assets), das zentrale Eigenschaften und ggf. Dienste beschreibt. Ziel: Standardisierung der Informationsrepräsentanz und des Informationsaustauschs.

| Typ | Datenverbindung | Datenverarbeitung |
|---|---|---|
| **Digitaler Zwilling** (Digital Twin) | bidirektional, automatisch | ja |
| **Digitaler Faden** (Digital Thread) | vorhanden, aber nicht zwingend bidirektional | nein |
| **Digitaler Schatten** (Digital Shadow) | keine automatische bidirektionale Verbindung | nicht zwingend |
| **Digitales Modell** (Digital Model) | ggf. manuelle Verknüpfung | nein |

*Quelle: Van der Valk et al.: Archetypes of Digital Twins (2022), S. 377.*

### IoT Bestimmungsfaktoren (Überblick)

Die sechs Hauptbereiche, die IoT ermöglichen:

1. **Sensorik und Aktorik** – Sensor- und Aktornetzwerke
2. **Identifikation und Lokalisierung** – Barcode, RFID, NFC, GPS, iBeacon, WLAN, UWB
3. **Zugriff und Steuerung** – Embedded Systems, HMI, VR/AR
4. **Vernetzung und Kommunikation** – Kommunikationsprotokolle, Adressierbarkeit, [[VL2_IoT-Technologien#2.5 Middleware und IoT Plattformen|Middleware]], IoT-Plattformen
5. **Interoperabilität** – Nachrichtenstandards, Semantic Web Technologien
6. **Datenschutz, Angriffs- und Betriebssicherheit** – Security & Safety

### Wiederholungsfragen 1.1

1. Definiere „Digitales Objekt" und den Zusammenhang zum „Internet der Dinge". *(Folie 12)*
2. Nenne die drei Kommunikationsdimensionen im IoT nach ITU-T und den wesentlichen Unterschied zu herkömmlicher Mobilfunkkommunikation. *(Folie 14)*
3. Nenne und erläutere die drei Merkmale des Ubiquitous Computing mit je einem Beispiel. *(Folie 16)*
4. Nenne die drei Komponenten eines CPS mit je einem Beispiel aus der Industrieautomation. *(Folie 18)*
5. Nenne und erläutere die vier Typen Digitaler Zwillinge mit je einem Praxisbeispiel. *(Folie 20–21)*
6. Nenne vier IoT-Bestimmungsfaktoren mit je einem Technologiebeispiel. *(Folie 23)*

---

## 1.2 IoT Systemarchitekturen

### Verteiltes System

> [!definition] Verteiltes System
> Menge voneinander unabhängiger Hardware- und Softwarekomponenten, die in Beziehung zueinander stehen, dem Benutzer wie ein einzelnes kohärentes System erscheinen und Funktionen erbringen, die Komponenten allein nicht erbringen könnten.

**Klassifizierung:**

| Typ                                                 | Merkmale                                                                       |
| --------------------------------------------------- | ------------------------------------------------------------------------------ |
| Verteilte Betriebssysteme                           | gesamtes Netz wirkt wie ein Rechnersystem                                      |
| Verteilte Computersysteme                           | Hochleistungsaufgaben, z. B. Grid-Computing                                    |
| Verteilte betriebswirtschaftliche Anwendungssysteme | komplexe ERP-ähnliche Systeme mit stabiler Infrastruktur                       |
| **Verteilte pervasive Systeme**                     | klein, batteriebetrieben, in Alltagsgegenstände eingebettet → **Kern des IoT** |

### Typische Architekturen verteilter Systeme

#### Client-Server-Architekturen
- Unterschiedliche Varianten (2-Tier bis n-Tier)
- Beispiele: SAP-GVI, Smartphones *(Folie 28)*

#### Peer-to-Peer-Architekturen
- **Reine P2P-Systeme** – alle Knoten gleichwertig (z. B. Blockchain, File-Sharing)
- **Hybride P2P-Systeme** – zentrales Service Repository zur Vermittlung, aber keine direkte Kommunikation über den Server (wie Telefonbuch)

#### Service-Orientierte Architektur (SOA)
Drei Rollen:
1. **Service Provider** – bietet Dienste an, veröffentlicht WSDL im Verzeichnis
2. **Service Consumer** – sucht und nutzt Dienste
3. **Service Repository (Naming/UDDI)** – Verzeichnis für Dienstsuche

### Integration verteilter Systeme

**Begriffsbestimmung:** Verbindung verteilter Systemkomponenten zu einem integrierten Anwendungssystem (unternehmensintern und -übergreifend).

Integrationsebenen:
- Datenebene / Netzwerkebene
- Anwendungs- / Funktionsebene
- Geschäftsprozessebene

**Herausforderungen:** hohe Komplexität (heterogene Systemlandschaften), hohe Integrationskosten, Änderungsaufwand durch Altsysteme.

### Edge und Fog Computing

> [!definition] Edge Computing
> Dezentraler Architekturansatz: Rechenleistung wird direkt an der „Quelle" (Randknoten/Edge) etabliert, z. B. in Maschinen, Sensoren oder Edge Controllern (SPS).

**Vorteile Edge Computing:**
- Senkung der Übertragungskosten (Datenvolumen wird reduziert)
- Verbesserte Latenzzeiten und Skalierbarkeit
- Verbesserte Echtzeitverarbeitung
- Ggf. Reduktion von Sicherheitsrisiken

**Nachteile:** erhöhte Systemkomplexität, höherer Administrationsaufwand (Konfiguration, Wartung, Backup).

> [!definition] Fog Computing
> Etablierung der Rechenleistung in dezentralen, lokalen „Fog-Nodes" (kleine Rechenzentren) – Zwischenschicht zwischen Edge und Cloud.

**Schichtenmodell:**
```
[Edge Nodes] → [Fog Nodes (LAN)] → [Cloud (WAN)]
    Device 1,2…n   Server 1,2        Public/Private Cloud
```

### Data Stream Management Systeme (DSMS)

> [!definition] Data Stream
> Kontinuierlicher Fluss von Daten ohne zeitlich begrenztes Ende (z. B. Sensordaten, Finanztransaktionen, Log-Dateien) in zeitlich geordneter Reihenfolge mit variabler Datenrate.

> [!definition] DSMS (auch: Stream Processing / Event Streaming System)
> Dient zur effizienten Verwaltung, Verarbeitung und Analyse von Datenströmen. Erzeugt i. d. R. neue Datenströme:
> **Input Stream → Verarbeitungslogik → Output Stream**

**Drei zentrale Funktionen:**

#### 1. Continuous Queries
- Überwachen eingehenden Datenstrom (Filter, Transformation, Aggregation)
- Aktualisieren Ergebnisse in Echtzeit
- Bleiben aktiv bis explizit deaktiviert

#### 2. Event-Time Processing
- Verarbeitung basierend auf **Ereigniszeit** (wann Ereignis aufgetreten ist)
- Nicht Systemzeit (wann Ereignis empfangen wurde)
- Essentiell in verteilten IoT-Systemen mit variabler Latenz

#### 3. Windowing – Drei Typen

| Window-Typ | Beschreibung | Einsatz |
|---|---|---|
| **Sliding Windows** | sich überlappende Fenster; Ereignisse können in mehreren Fenstern sein | feinere Granularität bei Zeitintervallen |
| **Tumbling Windows** | nicht überlappende Fenster fester Größe; jedes Ereignis gehört genau einem Fenster | periodische Analysen → **am häufigsten im IoT** |
| **Session Windows** | definiert durch Inaktivitätsperioden; neues Fenster bei Ereignis nach Inaktivität | Analyse von Nutzeraktivitäten |

**Watermarks:** werden zur korrekten Fensterzuordnung genutzt, insbesondere bei Tumbling Windows.

**Open-Source DSMS-Übersicht:**

| System | Typ | Besonderheit |
|---|---|---|
| **Apache Storm** | Stream Processing | niedrige Latenz, gute horizontale Skalierung, aber begrenzte Funktionalität |
| **Apache Spark** | Cluster Computing | Batch + Streaming, viele Bibliotheken (Spark SQL, MLlib, GraphX) |
| **Apache Flink** | Stream Processing | Echtzeitverarbeitung, hohe Skalierbarkeit, etabliertes Framework |
| **Apache Kafka** | Streaming-Plattform | Key-Value-Paare mit Zeitstempel, Topics mit Partitionen, Java-Extension Kafka Streams |

### Grundlegende IoT Systemarchitekturen

| Modell | Schichten |
|---|---|
| **3-Schichten** | Perception → Network → Application |
| **5-Schichten** | Perception → Transport → Data Processing → Application → Business |
| **7-Schichten** | Physical Devices & Controllers → Connectivity → Edge Computing → Data Accumulation → Data Abstraction → Application → Collaboration & Processes |

### IoT Referenzarchitekturen

#### ITU-T Referenzmodell
Standardisiertes Modell der International Telecommunication Union *(Folie 42)*

#### Industrial Internet Reference Architecture (IIRA)
- Im Juli 2015 vom Industrial Internet Consortium (IIC) veröffentlicht
- Basiert auf Systems- und Software-Engineering-Standards
- Ziele: breite Anwendbarkeit, Stärkung von Kompatibilität, Zusammenbringen bestehender Technologien

#### Reference Architecture Model Industrie 4.0 (RAMI 4.0)

> [!definition] RAMI 4.0
> Im Rahmen der Plattform Industrie 4.0 entwickelt. Im April 2016 als DIN Spec 91345 veröffentlicht. Basiert auf Smart Grid Architecture Model.

Dreidimensionales Modell mit:
- **Schichten (Layers):** Asset, Integration, Communication, Information, Functional, Business
- **Hierarchieebenen:** Produkt → Feldgerät → Steuereinheit → Station → Werk → Unternehmen → Connected World
- **Lebenszyklus-Achse:** Type (Typ-Ebene) ↔ Instance (Instanz-Ebene)

**Beispiel:** Fräsmaschine mit Energieverbrauchsmessung → OPC-UA Client/Server für Kommunikation, Informationsmodell Maschinenpark *(Folie 45)*

### Wiederholungsfragen 1.2

1. Nenne die fünf Client-Server-Architekturvarianten nach Tanenbaum mit Skizze. *(Folie 28)*
2. Erläutere die zwei P2P-Varianten und den Zusammenhang zur SOA. *(Folie 29–30)*
3. Skizziere das SOA-Kommunikationsprinzip mit Service Provider, Consumer und Naming Service. *(Folie 30)*
4. Was wird unter „Integration verteilter Systeme" verstanden und auf welchen drei Ebenen? *(Folie 31)*
5. Erläutere Edge Computing und grenze es von Fog und Cloud Computing ab. *(Folie 32–33)*
6. Skizziere die Grundstruktur eines DSMS und nenne drei zentrale Funktionen. *(Folie 35–38)*
7. **Klausuraufgabe:** Ordne MQTT-Adapter, Produktionsmaschine, Maschinenstatusanzeige, Instandhaltungsmanagement, MQTT-Broker und Datenmodell des Maschinenparks den IIRA-Domänen und RAMI-4.0-Schichten zu. *(Folie 43–45)*

---

## Verknüpfte Notizen

- [[VL2_IoT-Technologien]] – Technologien (Sensoren, Protokolle, Interoperabilität, Middleware)
- [[VL3_IoT-Anwendungen]] – Anwendungsgebiete (Smart Home, Industrie 4.0, etc.)
