---
tags:
  - IoT
  - MW220
  - Technologien
  - Klausurvorbereitung
modul: MW220 Internet of Things – Technologien und Anwendungen
teil: 2
thema: IoT Technologien
folien: 49–148
---

# VL2 – IoT Technologien

## Agenda

- [[#2.1 Sensoren und Aktoren]]
- [[#2.2 Identifikations- und Lokalisierungstechnologien]]
- [[#2.3 Kommunikationsprotokolle]]
- [[#2.4 Interoperabilität]]
- [[#2.5 Middleware und IoT Plattformen]]

---

## 2.1 Sensoren und Aktoren

### Begriff Sensor

> [!definition] Sensor
> Messfühler zur qualitativen oder quantitativen Detektion einer physikalischen Größe oder chemischen Eigenschaft. Wandelt physikalische Größen in elektrische Signale um (induktive, piezoelektrische, magnetische, feldstärkegesteuerte oder photoelektrische Wandler). Auch: Detektor, Aufnehmer, Fühler.

**Unterscheidung:**
- Mechanische Sensoren: Position, Annäherung, Kraft
- Nicht-mechanische Sensoren: Temperatur, Licht, Magnetfeld

**Netzwerkintegration:**
- Direkt (drahtgebunden oder Funk)
- Indirekt über übergeordnete Komponente (ggf. mit eigenem Mikrocomputer → „Smart Sensor")

**Beispiele:** Fotoresistor, Tür-/Fensterkontakt, Bewegungsmelder, Gassensor, MEMS-Sensor, Temperatursensor, Sensor Tag (CC2650, Elsys ERS CO2 LoRaWAN)

### Begriff Aktor

> [!definition] Aktor (Aktuator)
> Antriebselement, das eine physikalische Eingangsgröße (z. B. elektrische Spannung) in mechanische Bewegung oder andere physikalische Ausgangsgröße umwandelt. Gegenstück zum Sensor in der MSR-Technik. Bildet Stellglied in einer Steuer- oder Regelstrecke.

**Beispiele:** Lichtquelle ein-/ausschalten, Ventil öffnen/schließen, Fahrzeug beschleunigen/bremsen

### Steuerung vs. Regelung

> [!definition] Steuerung (DIN IEC 60050-351)
> Offener Wirkablauf in einer Steuerkette. Keine Messung der Steuergröße, keine Rückkopplung. Evtl. Störungen werden nicht berücksichtigt.
> **Beispiel:** klassisches Heizsystem, Armbanduhr (muss manuell gestellt werden)

> [!definition] Regelung (DIN IEC 60050-351)
> Geschlossener Wirkablauf im Regelkreis. Fortlaufende Erfassung der Regelgröße und Angleichung an die Führungsgröße. Berücksichtigung von Störungen.
> **Beispiel:** modernes Heizsystem, Tempomat (Cruise Control)

**Größen im Regelkreis:**
- `w(t)` – Führungsgröße (vorgegeben)
- `u(t)` – Stellgröße
- `y(t)` – Regelgröße (Ausgangsgröße)
- `e(t)` – Regelabweichung (Differenz Soll–Ist)
- `z(t)` – Störgröße

### Sensor-Aktor-System
Kabelgebundenes und/oder kabelloses System aus Sensoren, Aktoren, Messelektronik und Steuer-/Regelungseinrichtung.
**Beispiel:** Cruise Control, Fernlicht mit Regensensor, Rolltreppe.

### Wiederholungsfragen 2.1

1. Definiere „Sensor" mit zwei Beispielen. *(Folie 49–52)*
2. Definiere „Aktor" mit zwei Beispielen. *(Folie 53–54)*
3. Unterschied „Steuerung" vs. „Regelung" mit je einem Beispiel. *(Folie 55–56)*
4. Skizziere ein Sensor-Aktor-System zur Prozessregelung. *(Folie 57)*

---

## 2.2 Identifikations- und Lokalisierungstechnologien

### Identifikation vs. Lokalisierung

| Begriff | Definition | Technologien |
|---|---|---|
| **Identifikation** | Eindeutige Bestimmung eines Objekts/Lebewesens (meist Nummern/Codes, verknüpft mit DB) | Barcode, RFID, NFC, biometrische Verfahren |
| **Lokalisierung** | Ortsbestimmung in Bezug zu einem Fixpunkt | GPS, Mobilfunk, WLAN, Bluetooth/iBeacon, RFID |

### RFID – Radio Frequency Identification

**Vier Komponenten:**
1. **RFID-Middleware** – Datenaufbereitung, Verbindung zu IT-Anwendungssystemen
2. **Erfassungsgerät (Reader)** – Lese-/Schreib-Einheit mit Antenne
3. **Transponder (Tag)** – Datenträger mit Antenne
4. **Luftschnittstelle** – kontaktlose Datenübertragung per Funk

**Unterscheidungsmerkmale:**

| Merkmal | Ausprägungen |
|---|---|
| Frequenz | Niedrig (125–134 kHz) / Hoch (13,56 MHz) / UHF (868/915 MHz) / Mikrowelle (2,45/5,8 GHz) |
| Energieversorgung | Aktive Transponder / Passive Transponder |
| Reichweite | Close-Coupling (bis 1 cm) / Remote-Coupling (bis 1 m) / Long-Range (1,5–10 m / bis 1 km) |
| Speichertechnologie | Read-Only / Read-Write |
| Leistungsfähigkeit | Low-End (1-Bit) / Mid-Range (bis 100 KByte) / High-End |

**Antikollisionsverfahren:**
- **Aloha-Verfahren** – zeitverzögertes ID-Senden des Transponders
- **Tree-Walking-Verfahren** – Lesegerät verkleinert sukzessiv den ID-Suchraum

### NFC – Near Field Communication

> [!definition] NFC
> Funkbasierter Kommunikationsstandard auf **Induktionsbasis** (13,56 MHz), ursprünglich 2002 von Sony und NXP spezifiziert. Reichweite: wenige Zentimeter. Max. 424 kbit/s. Kombiniert RFID und Smart Card Technologie.

**Zwei Betriebsmodi:**
- **Passiver Modus** – Smart Card oder Smart Card Emulation (interagiert mit NFC/RFID-Lesegeräten)
- **Aktiver Modus** – P2P-Kommunikation oder als Lese-/Schreibgerät für passive RFID-Transponder

### Bluetooth

Funkbasierter Standard nach **IEEE 802.15.1**, ursprünglich 1994 von Ericsson spezifiziert.
- Frequenzbereich: 2,402–2,480 GHz mit **Frequenzsprungverfahren**
- Reichweite: 1–100 m (zukünftig bis 200 m)
- Synchrone Kommunikation (SCO) für Sprache, asynchrone (ACL) für Daten
- Datenraten: 64 kbit/s bis 723,2 kbit/s; Enhanced Data Rates über 2 Mbit/s

### iBeacon

> [!definition] iBeacon
> Proprietäres Verfahren zur **Indoor-Lokalisierung** von Apple (2013). Basiert auf **Bluetooth Low Energy (BLE)**. Reichweite bis ca. 30 m.

**Sender-Empfänger-Prinzip:**
- Beacons senden gleichbleibende Signale mit **UUID, Major und Minor**-Werten
- Empfänger (Smartphone mit App) identifiziert UUID und misst Signalstärke (= Entfernung)
- Benötigt **3 Beacons** (2D) bzw. **4 Beacons** (3D) zur exakten Positionsbestimmung
- Kann nachgelagerte Aktionen auslösen (Schaltvorgänge, Werbung, Informationen)

### Wiederholungsfragen 2.2

1. Grenze Identifikation und Lokalisierung ab, je zwei Technologiebeispiele. *(Folie 60)*
2. Vier RFID-Komponenten und ihre Funktion. *(Folie 61)*
3. Zwei NFC-Betriebsmodi mit Einsatzbeispielen. *(Folie 65)*
4. iBeacon-Sender-Empfänger-Prinzip und zwei Einsatzbereiche. *(Folie 67)*

---

## 2.3 Kommunikationsprotokolle

### Begriff Kommunikationsprotokoll

> [!definition] Kommunikationsprotokoll
> Vereinbarung/Vorschrift für die Übertragung von Daten zwischen zwei oder mehr Kommunikationssystemen. Legt Syntax, Semantik und Synchronisation fest (Datenformat, Übertragungsart, Richtung, Datenraten). Implementierung durch Hardware, Software oder beides. Meist als Schichtenstapel (→ OSI-Modell).

### E-Mail- und Dateiübertragungsprotokolle

| Protokoll | Beschreibung |
|---|---|
| **X.400** | E-Mail-Übertragung auf OSI-Basis; häufig im professionellen EDI |
| **FTAM** | Dateiübertragung auf OSI-Basis; größerer Funktionsumfang als FTP |
| **HTTP/HTTPS** | TCP/IP Anwendungsschicht |
| **FTP/SFTP** | Dateiübertragung |
| **SMTP** | E-Mail-Versand |
| **IMAP / POP3** | E-Mail-Empfang |
| **OFTP** | Direktübertragung zwischen zwei Partnern; Empfehlung des VDA (Automobilindustrie) |
| **AS2** | Gesicherter Nachrichtentransport über HTTP/HTTPS; digitale Signaturen + SSL/TLS |

### Industrieautomation

**Feldbusse** (hohe Ausfallsicherheit, exakt vorhersagbares Zeitverhalten):
- ProfiBus / ProfiNet
- **Modbus** *(Beispiel: Energiemessung an der Hochschule Ludwigshafen)*
- CANopen
- EtherCAT

#### OPC-UA (Open Platform Communications – Unified Architecture)

> [!definition] OPC-UA
> **M2M-Kommunikationsprotokoll**, favorisiert in Industrie 4.0. Herstellerunabhängiger offener Standard. Unterstützt Datenaustausch auf allen Unternehmensebenen sowie unternehmensübergreifend. Lässt sich mit allen Dimensionen von RAMI 4.0 vereinen.

**Vier zentrale Merkmale:**
1. Herstellerunabhängig, offener Standard
2. Durchgängiges Sicherheits- und Authentifizierungskonzept
3. Semantisches Datenmodell zur sinnhaften Abbildung von Informationen (z. B. Maschinenpark)
4. Speicherung/Bereitstellung historischer Daten, Signalisierung von Ereignissen, Ausführung von Funktionen

### Informationstechnische Protokolle

| Protokoll | Beschreibung |
|---|---|
| **XMPP** | XML-basiert; Instant Messaging; P2P- und Mehrbenutzerkonferenzen; benötigt XMPP-Server |
| **DDS** | Datenzentriert, Publish/Subscribe mit QoS; Discovery über Server oder Multicast |
| **CoAP** | Leichtgewichtiges M2M-Protokoll auf REST-Basis; für ressourcenbeschränkte Geräte; IETF 2014 |
| **MQTT** | Minimaler Protokoll-Overhead; seit 2013 OASIS-Standard; Publish/Subscribe; **wichtigstes IoT-Protokoll** |

#### MQTT – Grundprinzip

```
Publisher (Client 1)  →  [Publish: 25°C, Topic: Home/LivingRoom/Temperature]
                              ↓
                        Message Broker
                              ↓
              Subscriber (Client 2, Client 3, ...)
```

**Wildcards:**
- `+` – Single Level, z. B. `Home/+/Temperature`
- `#` – Multi Level, z. B. `Home/#` oder `Home/LivingRoom/#`

**Protokollfeatures:**

| Feature | Beschreibung |
|---|---|
| **Retained Message** | Letzte Nachricht eines Topics im Broker hinterlegt; neue Subscriber erhalten sofort den letzten Stand → wichtig für Sensordaten ohne Wartezeit |
| **Last Will and Testament** | „Letzter Wille" eines Clients wird bei Verbindungsabbruch als Nachricht gesendet → Ausfallerkennung (z. B. „Sensor ist offline") |

**Quality of Service (QoS):**

| Level | Garantie |
|---|---|
| **QoS 0** (At most once) | Nachricht kommt höchstens einmal an (kein ACK) |
| **QoS 1** (At least once) | Nachricht kommt mindestens einmal an (PUBACK) |
| **QoS 2** (Exactly once) | Keine Verluste, keine Duplikate (4-Schritt-Handshake: PUBLISH → PUBACK → PUBREL → PUBCOMP) |

**Reservierte Ports:** 1883 (unverschlüsselt), 8883 (SSL/TLS), 443 (WebSockets)

### Gebäudeautomation

| Protokoll | Beschreibung |
|---|---|
| **ZigBee** | IEEE 802.15.4; kurze Reichweite, geringe Datenübertragung; Gebäude-, Industrie-, Medizinbereich |
| **EnOcean** | ISO/IEC 14543-3-10; Energy Harvesting (batterielos: Solar, Piezo, thermisch, elektromagnetisch) |
| **Z-Wave** | Heimautomation; optimiert für geringen Energieverbrauch und hohe Sicherheit |
| **Homematic** | Proprietär (eQ-3); BidCoS-Protokoll; günstige Hardwarepreise |

### LPWAN – Low Power Wide Area Networks

Für größere Entfernungen, niedrige Datenraten, geringer Energieverbrauch (v. a. Smart Cities):

| Technologie | Basis | Frequenz | Reichweite |
|---|---|---|---|
| **LoRaWAN** | Zirpenfrequenzspreizung | 433/868 MHz (EU), 915 MHz (USA) | 2–40 km |
| **NB-IoT** | LTE | 800/900 MHz | ca. 10 km |
| **Wi-Fi HaLow** (IEEE 802.11ah) | WLAN | 900 MHz | 2× heutiges Wi-Fi |

### Wiederholungsfragen 2.3

1. Definiere „Kommunikationsprotokoll" und nenne zwei Regelbeispiele. *(Folie 70)*
2. Drei Verfahren zur Datensicherheit/-integrität bei AS2. *(Folie 72)*
3. Zwei Vorteile industrieller Kommunikationsstandards; zwei Feldbus-Beispiele. *(Folie 74)*
4. Vier zentrale Merkmale von OPC-UA. *(Folie 76)*
5. MQTT-Kommunikationsprinzip anhand Beispiel mit 4 Clients und 1 Message-Broker: (a) Topic für Küchen-Temperatur, (b) Topic für alle Hausnachrichten, (c) Feature für sofortigen Datenabruf. *(Folie 80–82)*

---

## 2.4 Interoperabilität

### Begriff Interoperabilität

> [!definition] Interoperabilität
> Fähigkeit des nahtlosen Zusammenspiels unabhängiger, heterogener IT-Systeme. Vollautomatischer Informationsaustausch ohne gesonderte Vereinbarungen zwischen den Systemen („Plug & Play") durch gemeinsame Protokolle und standardisierte Schnittstellen.

**Drei wesentliche Vorteile:**
- Vermeidung von Medienbrüchen
- Hohe Geschwindigkeit der Informationsübertragung
- Vermeidung menschlicher Fehler
- Senkung der Integrations- und Transaktionskosten
- Ausschöpfung von Rationalisierungspotenzial

### Drei Formen der Interoperabilität

| Form | Definition | Beispiel |
|---|---|---|
| **Strukturell** | Gemeinsames Datenmodell liegt zugrunde | |
| **Syntaktisch** | Gemeinsame Kodierungssyntax | XML, JSON |
| **Semantisch** | Gemeinsames Vokabular | EDI-Nachrichtenstandards, Ontologien |

### Vier Interoperabilitätskomponenten (Datenübertragung)

1. **Standardisiertes Vokabular** – semantisch oder Ontologien-basiert
2. **Konverter** – Umwandlung aus proprietärem Format in Standardformat (Mapping)
3. **Kommunikationsprotokolle** – Vereinbarung zur Datenübertragung
4. **Übertragungsnetzwerke** – Internet

### Syntaktische Interoperabilität: XML

> [!definition] XML (Extensible Markup Language)
> Auszeichnungssprache zur Darstellung hierarchisch strukturierter Dokumente im Textformat (UTF-8). Primär für plattformunabhängigen Datenaustausch. W3C-Standard seit 1998.

**Kennzeichen:**
- Elemente mit Beginn- und Endauszeichner (Tags) als zentrale Struktureinheiten
- **Wohlgeformtheit** – konform mit Syntaxregeln (öffnendes = schließendes Tag)
- **Validität** – Verprobung gegen DTD oder XML Schema

### Syntaktische Interoperabilität: JSON

> [!definition] JSON (JavaScript Object Notation)
> Syntax zur Speicherung und zum Austausch strukturierter Daten im Textformat (UTF-8). Primär für Webanwendungen und mobile Apps.

**Kennzeichen:**
- Kompakter Aufbau, leichte Lesbarkeit
- Objekt: `{` ... `}` mit durch Komma getrennten Eigenschaften (Schlüssel: Wert)
- Arrays: `[` ... `]`
- Validierung mit JSON Schema möglich

### Web Service Standards (SOAP/WSDL/UDDI)

| Standard | Funktion |
|---|---|
| **SOAP** | XML-basiertes Nachrichtenformat (Envelope, Header, Body); transportprotokollunabhängig |
| **WSDL** | XML-basierte Beschreibungssprache für Web Service APIs (abstrakt: Interfaces + Operations; konkret: Binding + Service) |
| **UDDI** | Verzeichnisdienst für Web Services (White Pages, Yellow Pages, Green Pages) |

**SOA-Ablauf:** Provider veröffentlicht WSDL im UDDI → Consumer sucht → findet Verweis → ruft WSDL ab → nutzt Dienst via SOAP.

### REST (Representational State Transfer)

> [!definition] REST
> Architekturansatz für Client-Server-Kommunikation in verteilten Systemen. Kein Protokoll/Standard, sondern Nutzung bestehender Standards (HTTP/S, URI, HTML, JSON, XML). Jede REST-Nachricht ist **zustandslos**.

**HTTP-Methoden:**
- `GET` – Ressource lesen
- `POST` – Ressource anlegen
- `PUT` – Ressource ändern
- `DELETE` – Ressource löschen
- `OPTIONS` – Verfügbare Methoden prüfen

### OData (Open Data Protocol)

HTTP-basiertes Protokoll auf REST-Basis. Ursprünglich von Microsoft; mittlerweile u. a. von SAP (Fiori, SAP Gateway) genutzt.

**URL-Aufbau:**
```
http://host:port/path/service/entity?$top=10&$orderby=Name
       \_____Service Root URL_____/\__Resource Path__/\__Query Options__/
```

### Semantische Interoperabilität: Nachrichten-Standards

**Ziel:** vollautomatisierte Kommunikation zwischen Anwendungssystemen verschiedener Geschäftspartner (B2B).

**Beispiele:**
- **UN/EDIFACT** – weltweites Regelwerk der Vereinten Nationen
- **ANSI ASC X12** – amerikanischer Standard
- **SWIFT** – Interbank-Finanztransaktionen
- **RosettaNet** – High-Tech-Branche
- **ebXML** – XML-basiertes B2B-Framework (ISO 15000)

#### UN/EDIFACT

**Grundprinzip:** Definition von Nachrichtentypen für Geschäftsvorfälle (z. B. ORDERS, INVOIC, DESADV).

**Wichtige Nachrichtentypen:**

| Kürzel | Bedeutung |
|---|---|
| ORDERS | Bestellung |
| ORDRSP | Bestellantwort |
| INVOIC | Rechnung |
| DESADV | Liefermeldung |
| DELFOR | Lieferabruf/-plan |
| RECADV | Wareneingangsmeldung |

**Struktur einer Übertragungsdatei:** UNA → UNB → (UNG →) UNH → Segmente → UNT → (UNE →) UNZ

**Segment-Aufbau:** `Segment-Bezeichner + einfaches Datenelement + Datenelementgruppe'`

### Semantic Web

> [!definition] Semantic Web
> Erweiterung des WWW um eine semantische Komponente. Ziel: bessere Interpretation von Webseiteninhalten durch Maschinen, Vereinfachung maschineller Verarbeitung, Darstellung von Vokabularen mit Beziehungen.

**Architektur-Stack:**
RDF → RDF-S → OWL → Regeln → Abfrage (SPARQL) → ...

#### RDF (Resource Description Framework)

> [!definition] RDF
> XML-basiertes Framework zur Beschreibung beliebiger Dinge (Ressourcen) im Internet. W3C-Empfehlung seit 2004. Modelliert **Tripel** aus Subjekt (Ressource), Prädikat (Eigenschaft), Objekt (Wert).
> **Beispiel:** „Buch 4711" → „hat den Autor" → „Max Müller"

#### RDF-S und OWL

| Technologie | Funktion |
|---|---|
| **RDF-S** | Standardvokabular zur Typisierung von RDF-Ressourcen; einfache Ontologien |
| **OWL** (Web Ontology Language) | Erstellung, Veröffentlichung von Ontologien; automatisierte Schlussfolgerungen durch Inferenzmaschinen |

#### JSON-LD

Standardkonvention für Verlinkungen in JSON-Dokumenten (RDF-Modell). Schlüsselwörter: `@context`, `@id`, `@type`, `@vocab`. W3C-Empfehlung.

#### Ausgewählte Ontologien

| Ontologie | Beschreibung |
|---|---|
| **schema.org** | Einheitliche Beschreibung von Daten im Internet (Ereignisse, Personen, Produkte); von Google/Microsoft/Yahoo |
| **DBpedia** | Strukturierte Informationen aus Wikipedia als Linked Open Data |
| **FOAF** | Friend of a Friend; soziale Netzwerke; maschinenlesbare Personenbeschreibung |
| **Semantic Sensor Network (SSN/SOSA)** | Beschreibung von Sensoren, Aktoren, Beobachtungen; W3C-Standard |

#### Web of Things (WoT)

W3C-Standard für IoT-Anwendungsentwicklung. Bestandteile:
- **WoT Architecture** – abstrakte Architektur mit Building Blocks
- **WoT Thing Description (TD)** – Metadaten und Schnittstellen eines „Dings" (JSON + JSON-LD)
  - **Property** – Statusanzeige (z. B. Sensormesswert)
  - **Action** – Funktionale Interaktion (z. B. Rollladen schließen)
  - **Event** – Ereignisdefinition mit Trigger (z. B. Feueralarm)

### Wiederholungsfragen 2.4

1. Begriff Interoperabilität + drei wesentliche Vorteile. *(Folie 91)*
2. Drei Formen der Interoperabilität mit je einem Beispiel. *(Folie 92)*
3. Vier Interoperabilitätskomponenten für Datenübertragung. *(Folie 93)*
4. Je zwei Vor- und Nachteile von XML und JSON für IoT-Projekte. *(Folie 94 und 99)*
5. SOA-Rollen und -Aktionen mit Web Service Standards skizzieren. *(Folie 104–105)*
6. REST erläutern und vier HTTP-Methoden nennen. *(Folie 106)*
7. Zwei Ziele von OData + grundlegender URL-Aufbau. *(Folie 108)*
8. Grundaufbau einer EDIFACT-Nachricht mit Segmenten UNA/UNB/UNH/UNT/UNZ. *(Folie 114–115)*
9. Semantic Web erläutern + zwei Ziele. *(Folie 120)*
10. RDF-Grundprinzip + Beispiel für Elementaraussage. *(Folie 122)*
11. Drei Ontologien für IoT/Semantic Web mit Begriffsbeispielen. *(Folie 126–127)*

---

## 2.5 Middleware und IoT Plattformen

### Begriff Middleware

> [!definition] Middleware
> Infrastrukturdienste und Schnittstellenfunktionen für verteilte Anwendungen zur Überbrückung der Heterogenität von Anwendungssystemen und Netzwerken. Unabhängig von Netzwerkdetails, Betriebssystemen, Hardware und Programmiersprachen.

**Vorteile:** Vereinfachte Integration, höhere Flexibilität/Skalierbarkeit, Synergieeffekte.
**Nachteile:** Stärkere Komplexität, ggf. höherer Administrationsaufwand.

### Anwendungsorientierte Middleware

Erweiterte Laufzeitumgebung mit Persistenz, Sicherheit, Transaktion, Ressourcenverwaltung.

**Transaktionsorientiertes Modell** – koordinierter Zugriff mit **ACID**-Kriterien:
- **A**tomicity, **C**onsistency, **I**solation, **D**urability

**Objektorientiertes Modell** – verteilte Objekte, z. B. **CORBA**

### Kommunikationsorientierte Middleware

**Funktionsaufruforientiertes Modell (synchron):**
- Remote Procedure Call (**RPC**) / SAP Remote Function Call (**RFC**)
- Remote Method Invocation (**RMI**)

**Nachrichtenorientiertes Modell (asynchron):**
- Lose Kopplung über Nachrichtenaustausch

**Drei Architekturen:**

| Architektur | Merkmale |
|---|---|
| **Peer-to-Peer** | Individuelle, bilaterale Integrationslösungen; hoher Vernetzungsaufwand |
| **Bus (Message Queues)** | Message Bus mit MQs; Punkt-zu-Punkt oder Publish-Subscribe |
| **Hub-and-Spoke** | Zentrale Integrationsplattform; Reduktion direkter Verbindungen; Adapter und Integrations-Content |

**SAP Gateway** – standardbasiertes Framework für OData/REST-basierte Web Services; „Web Service Verschalung" von RFC-fähigen ABAP-Funktionsbausteinen.

### Cloud-basierte Integration: IPaaS

> [!definition] IPaaS (Integration Platform as a Service, nach Gartner)
> Cloud-basierte Plattform zur Entwicklung, Ausführung und Steuerung von Integrationslösungen zwischen unternehmensinternen Systemen, Cloud-Anwendungen und IoT.

**Zwei wesentliche Vorteile:**
1. Keine unternehmenseigene Installation/Betrieb von Integrations-Hardware
2. Nutzung von Cloud-Charakteristika: Skalierbarkeit, Zuverlässigkeit, Ausfalltoleranz

### Begriff IoT Plattform

> [!definition] IoT Plattform
> Produkt als technische Basis für Anbindung/Monitoring von IoT-Geräten, Datenbanken und betriebswirtschaftlicher Software, Betrieb von Visualisierungs-/Analyseanwendungen und Entwicklung eigener IoT-Lösungen.

**Marktsituation:** über 400 verschiedene Produkte. Anbieter u. a.:
- Software-Hersteller: Microsoft Azure IoT Suite, IBM Watson IoT, ThingsBoard
- Telekom: Cloud of Things
- Branchenspezifisch: Amazon AWS IoT, Bosch IoT Suite, GE Predix

**Funktionskomponenten:** Anbindung von Sensoren/Aktoren, Analyse/Echtzeit-Monitoring, Geräte-Management, Skalierbarkeit, Sicherheit (Zugangsverwaltung, Angriffssicherheit), Konnektivität (Kommunikationsadapter, Mapping-Werkzeuge, Verzeichnisdienste), Schnittstellen zu ERP-Systemen.

**Beispiel ThingsBoard:** Java-basiert; unterstützt MQTT, CoAP, Modbus, OPC-UA, HTTP über IoT Gateway; Community Edition (Open-Source) + Professional Edition + Cloud.

### Digitaler Dienst / Smart Service

> [!definition] Digitaler Dienst
> Wird unter Einsatz von IKT entwickelt, vermarktet und in Anspruch genommen. Nutzenzentriert, personalisierbar. Hohe fixe, geringe variable Kosten. Kann kontextspezifisch erbracht werden (Sensoren) und auf Analyse großer Datenmengen basieren (Big Data/Analytics).

**Smart Service** = Digitaler Dienst + IoT-Komponente (Sensordaten, Aktoren) + KI/Analytics.

**Schichtenmodell eines Digitalen Dienstes:**
1. Asset Layer (Sensoren, Aktoren, Tags)
2. Integration Layer (Connectivity Enabling)
3. Communication Layer (Middleware Services)
4. Information Layer (Data Harmonisation & Analytics)
5. Functional Layer (Application Logic)
6. Business Layer (Business Process Logic)

### Wiederholungsfragen 2.5

1. Begriff Middleware + je zwei Vor- und Nachteile. *(Folie 133)*
2. Zwei Varianten kommunikationsorientierter Middleware mit Anwendungsbeispielen. *(Folie 135)*
3. IPaaS erläutern + zwei wesentliche Vorteile für Unternehmen. *(Folie 141–142)*
4. Begriff IoT Plattform + wesentliche Funktionskomponenten. *(Folie 143–144)*
5. Eigenschaften eines Digitalen Dienstes + Zusammenhang zu Smart Service. *(Folie 146–147)*

---

## Verknüpfte Notizen

- [[VL1_IoT-Grundlagen]] – IoT Grundlagen, Systemarchitekturen, CPS, Digitaler Zwilling
- [[VL3_IoT-Anwendungen]] – IoT Anwendungsgebiete (Smart Home, Industrie 4.0, etc.)
