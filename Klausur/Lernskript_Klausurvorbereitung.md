# Lernskript Klausurvorbereitung — IoT Technologien (MW220)
> Basiert auf Altklausur SoSe24 (Helios SE) und SS25 (Airflow SE) — beide nahezu identisch in Struktur

---

## Aufgabe 1: Digitaler Zwilling / Verwaltungsschale (Asset Administration Shell)

> **Klausurfrage (SoSe24 + SS25 identisch):**
> Ein Unternehmen möchte für seine Produkte eine Verwaltungsschale (Asset Administration Shell) nach dem RAMI 4.0-Standard implementieren.
>
> **(a)** Welche grundlegende Funktion hat eine Verwaltungsschale und welches Konzept liegt ihr zugrunde? (2 Punkte)
>
> **(b)** Skizzieren Sie die Teilmodelle „Asset Identification" und „Condition Monitoring" für ein Produkt des Unternehmens und befüllen Sie diese sinnvoll mit Werten. Beachten Sie dabei die Namenskonventionen. (4 Punkte)

### Antwort

**(a) Grundlegende Funktion:**
Die Verwaltungsschale ist die digitale Repräsentation eines Assets (physisches Objekt, z.B. eine Maschine oder ein Produkt). Sie basiert auf dem Konzept des **Digitalen Zwillings** — ein vollständiges digitales Abbild eines realen Objekts, das Daten, Zustände und Eigenschaften maschinenlesbar bereitstellt.

**(b) Teilmodelle mit Namenskonvention (UpperCamelCase für idShort-Properties):**

**Teilmodell: Asset Identification**
| idShort (Property) | valueType | Beispielwert |
|---|---|---|
| ManufacturerName | String | Helios SE / Airflow SE |
| ManufacturerTypId | String | MOD-400 / VEN-200 |
| ManufacturerTypName | String | Solarmodul 400W / Lüftungsanlage 200 |
| AssetId | String | AS-2024-001 |
| InstanceId | String | SN-20240101-42 |

**Teilmodell: Condition Monitoring** (freies Teilmodell — Merkmale mit Einheiten)
| idShort (Property) | valueType | unitOfMeasure | Beispielwert |
|---|---|---|---|
| Temperature | Float | °C | 45.2 |
| Pressure | Float | bar | 1.8 |
| PowerConsumption | Float | kW | 3.5 |
| ProductionOrder | String | - | PO-2024-007 |

### Kontext & Eselsbrücken

**Namenskonvention PFLICHT:** idShort immer in **UpperCamelCase** (z.B. `ManufacturerName`, nicht `manufacturer_name` oder `manufacturerName`).

**Unterschied typ- vs. instanzbezogen:**
- **Typbezogen** (gilt für alle Exemplare des gleichen Typs): `ManufacturerName`, `ManufacturerTypId`, `ManufacturerTypName`
- **Instanzbezogen** (gilt für genau dieses eine Exemplar): `AssetId`, `InstanceId`

**Condition Monitoring = freies Teilmodell:** Der Professor akzeptiert verschiedene sinnvolle Merkmale, solange sie mit einer Einheit versehen sind. Typisch für Maschinen: Temperatur, Druck, Energieverbrauch, Produktionsauftrag.

**Verwaltungsschale im RAMI 4.0-Kontext:** Sie ist der digitale Anteil des „Asset"-Konzepts in RAMI 4.0 und bildet die Brücke zwischen physischer Welt (Asset-Layer) und digitaler Welt (höhere Layer).

---

## Aufgabe 2: RAMI 4.0 + IIRA Komponentenzuordnung

> **Klausurfrage (SoSe24 + SS25 identisch):**
> In einem Produktionsunternehmen werden Maschinen über Modbus überwacht. Die folgende Systemarchitektur soll den Referenzarchitekturmodellen RAMI 4.0 und IIRA zugeordnet werden.
>
> Systemkomponenten: Maschinen mit Sensoren | Kommunikationsmodul | Modbus Master und Slaves | Datenmodell des Maschinenparks | Anwendung für Zustandsüberwachung | Betriebliche Produktionsplanung und -steuerung
>
> Ordnen Sie jede Komponente dem richtigen Layer (RAMI 4.0) bzw. der richtigen Domäne (IIRA) zu. (3 Punkte)

### Antwort

**RAMI 4.0 — 6 Layer (von unten nach oben):**

| RAMI 4.0 Layer | Komponente |
|---|---|
| **Asset** | Maschinen mit Sensoren |
| **Integration** | Kommunikationsmodul |
| **Communication** | Modbus Master und Slaves |
| **Information** | Datenmodell des Maschinenparks |
| **Functional** | Anwendung für Zustandsüberwachung |
| **Business** | Betriebliche Produktionsplanung und -steuerung |

**IIRA — Functional Domains + Information Flows:**

| IIRA Domäne / Element | Komponente |
|---|---|
| **Physical Systems** | Maschinen mit Sensoren |
| **Information Flows (Pfeile)** | Kommunikationsmodul |
| **Control / Application** | Modbus Master und Slaves |
| **Information** | Datenmodell des Maschinenparks |
| **Operations** | Anwendung für Zustandsüberwachung |
| **Business** | Betriebliche Produktionsplanung und -steuerung |

### Kontext & Eselsbrücken

**RAMI 4.0 Layer Reihenfolge merken (unten → oben):**
> **A**lle **I**ngenieure **C**oden **I**n **F**ast **B**ytes
> → Asset – Integration – Communication – Information – Functional – Business

**Kritischer Unterschied RAMI 4.0 vs. IIRA:**
- RAMI 4.0: Das **Kommunikationsmodul** landet im **Integration**-Layer (unterhalb von Communication!)
- IIRA: Das **Kommunikationsmodul** ist kein Functional Domain, sondern ein **Information Flow** (Pfeil zwischen Domänen)

**IIRA Domänen-Logik:**
- Physical Systems = alles Physische (Sensoren, Maschinen)
- Control = was die Maschinen steuert/ausliest (Modbus Master/Slaves)
- Information = Datenhaltung und -modelle
- Operations = Betriebsanwendungen (Monitoring, Condition Monitoring)
- Business = ERP, Produktionsplanung, Geschäftsprozesse

---

## Aufgabe 3a: OPC-UA — 4 wesentliche Merkmale

> **Klausurfrage (SoSe24 + SS25 identisch):**
> Das Unternehmen erwägt den Einsatz von OPC-UA als Kommunikationsprotokoll. Kreuzen Sie die 4 zutreffenden Merkmale an. (2 Punkte)

### Antwort

**Richtige 4 Merkmale (alle müssen angekreuzt werden):**

✅ **Durchgängiges Sicherheits- und Authentifizierungskonzept**
✅ **Industrieakzeptanz und relativ große Verbreitung**
✅ **Ermöglicht Datenaustausch zwischen allen Unternehmensebenen** (Shopfloor bis ERP)
✅ **Beinhaltet semantisches Datenmodell** (maschinenlesbare Bedeutung der Daten)

**Falsche Optionen (NICHT ankreuzen):**

❌ Speziell konzipiert für ressourcenbeschränkte Geräte → das ist **CoAP/MQTT**
❌ Herstellerspezifischer, proprietärer Standard → OPC-UA ist **offen und herstellerunabhängig**
❌ Unterstützt gängige Chat-Funktionen wie P2P- und Mehrbenutzerkonferenzen → das ist **XMPP**
❌ Lässt sich mit allen Dimensionen von IIRA vereinen → nicht als alleiniges Kriterium zutreffend

### Kontext & Eselsbrücken

**OPC-UA = "Das Industrieprotokoll mit Hirn":**
- Entwickelt von der OPC Foundation (nicht Microsoft, nicht proprietär!)
- Kommuniziert vertikal: Sensor → SPS → MES → ERP (alle Ebenen)
- Semantisches Datenmodell = die Daten beschreiben sich selbst (Einheiten, Datentypen, Relationen)
- Sicherheit eingebaut: Verschlüsselung + Authentifizierung + Zertifikate

**Merkhilfe für die 4 Merkmale:**
> **S**icherheit – **I**ndustrieakzeptanz – **D**atenaustausch vertikal – **S**emantik
> → **SIDS**

---

## Aufgabe 3b: MQTT — Komponenten, Topics, Wildcards, Retained Message, QoS

> **Klausurfrage (SoSe24 + SS25 identisch, außer QoS-Teil):**
> Das Unternehmen entscheidet sich für MQTT als Kommunikationsprotokoll.
>
> **(a)** Nennen Sie die wesentlichen Komponenten einer MQTT-Architektur und erläutern Sie deren Funktion. (2 Punkte)
>
> **(b)** Skizzieren Sie eine geeignete Topic-Hierarchie für die Maschinendaten des Unternehmens und erläutern Sie den Einsatz von Wildcards. (2 Punkte)
>
> **(c)** Erläutern Sie die Funktion „Retained Message" in MQTT. (1 Punkt)
>
> **(d — SoSe24):** Die Sensoren senden im Sekundentakt. Netzbelastung soll minimiert werden. Verluste sind tolerierbar. Welcher QoS-Level ist geeignet? Begründen Sie. (1 Punkt)
>
> **(d — SS25):** Die Sensoren senden stündlich. Eine vollständige 24h-Tageshistorie ist erforderlich. Netzbelastung soll minimiert werden. Welcher QoS-Level ist geeignet? Begründen Sie. (1 Punkt)

### Antwort

**(a) MQTT-Komponenten:**
| Komponente | Funktion |
|---|---|
| **MQTT-Broker** | Zentraler Nachrichtenvermittler; nimmt Nachrichten von Publishern entgegen und leitet sie an Subscriber weiter |
| **Publisher (MQTT-Client)** | Sendet Nachrichten zu einem Topic an den Broker |
| **Subscriber (MQTT-Client)** | Abonniert Topics beim Broker und empfängt entsprechende Nachrichten |

**(b) Topic-Hierarchie (Beispiel für Produktionsunternehmen):**
```
werk/halle1/maschine1/temperatur
werk/halle1/maschine1/druck
werk/halle1/maschine2/temperatur
werk/halle2/maschine1/temperatur
```

**Wildcards:**
- `+` (Single-Level Wildcard): ersetzt genau eine Ebene
  - z.B. `werk/halle1/+/temperatur` → Temperatur aller Maschinen in Halle 1
- `#` (Multi-Level Wildcard): ersetzt alle restlichen Ebenen
  - z.B. `werk/halle1/#` → alle Nachrichten aus Halle 1
  - z.B. `werk/#` → alle Nachrichten aus dem gesamten Werk

**(c) Retained Message:**
Eine Retained Message ist eine Nachricht, die der Broker für ein Topic speichert. Wenn ein neuer Subscriber das Topic abonniert, erhält er sofort die zuletzt gespeicherte Retained Message — auch wenn er sich nach dem letzten Publish verbunden hat. Nützlich für Statusinformationen (z.B. aktueller Maschinenstatus).

**(d) QoS-Entscheidung:**

**SoSe24 → QoS 0 ("At most once")**
- Begründung: Sekundentakt = sehr hohe Frequenz; einzelne Verluste sind tolerierbar (nächste Messung kommt sofort); minimale Netzbelastung durch kein Acknowledgement

**SS25 → QoS 1 ("At least once")**
- Begründung: Stündliche Nachrichten = jede Nachricht kritisch für vollständige Historie; Verlust einer Nachricht würde Datenlücke in 24h-Aufzeichnung erzeugen; QoS 1 garantiert Zustellung mindestens einmal; mögliche Duplikate sind akzeptierbar; QoS 2 wäre übertrieben (höherer Overhead, kein Vorteil bei stündlicher Rate)

### Kontext & Eselsbrücken

**QoS-Entscheidungsmatrix:**

| QoS | Garantie | Wann? |
|---|---|---|
| **0** | Höchstens einmal (Fire & Forget) | Hohe Frequenz + Verluste tolerierbar |
| **1** | Mindestens einmal (mit ACK) | Vollständigkeit wichtig + Duplikate tolerierbar |
| **2** | Genau einmal (4-Wege-Handshake) | Duplikate NICHT tolerierbar (z.B. Zahlungstransaktionen) |

**Kritische Falle:** Bei "vollständige Historie benötigt" → immer QoS 1 (oder 2), NIEMALS QoS 0!

**MQTT Last Will and Testament (LWT):** Nachricht, die der Broker sendet, wenn ein Client die Verbindung unerwartet verliert. Wird beim Verbindungsaufbau hinterlegt. Nützlich für Offline-Benachrichtigungen.

**Modbus → MQTT Migration (häufige Klausurfrage!):**
- Modbus-Master (in Middleware) → wird zu **MQTT-Client als Publisher** (sammelt Maschinendaten, veröffentlicht sie)
- Modbus-Slave (in Maschine) → wird zu **MQTT-Client als Subscriber** (empfängt Steuerkommandos)
- Neu hinzukommen: **MQTT-Broker**
- **Häufiger Fehler:** Master=Subscriber, Slave=Publisher → FALSCH! Der Master pusht aktiv Daten → Publisher.

---

## Aufgabe 4a: XML vs. JSON — Vor- und Nachteile

> **Klausurfrage (SoSe24 + SS25 identisch):**
> Ordnen Sie die folgenden Eigenschaften den Datenformaten XML und/oder JSON zu. Mehrfachzuordnungen sind möglich. (2 Punkte)
>
> Eigenschaften: Gute Lesbarkeit für Mensch und Maschine | Validitätsprüfung mit Hilfe von Schemata möglich | Möglichkeit der Definition komplexer Elemente mit Attributen | Overhead aufgrund von Redundanz | Kompakter Aufbau mit nur sehr geringem Overhead | Anfällig für Sicherheitslücken (z.B. XML-Injection)

### Antwort

| Eigenschaft | XML | JSON |
|---|---|---|
| Gute Lesbarkeit für Mensch und Maschine | ✅ | ✅ |
| Validitätsprüfung mit Hilfe von Schemata möglich | ✅ | ✅ |
| Möglichkeit der Definition komplexer Elemente mit Attributen | ✅ | ❌ |
| Overhead aufgrund von Redundanz (öffnende + schließende Tags) | ✅ | ❌ |
| Kompakter Aufbau mit nur sehr geringem Overhead | ❌ | ✅ |
| Anfällig für Sicherheitslücken (z.B. XML-Injection) | ✅ | ❌ |

### Kontext & Eselsbrücken

**PFLICHT: Mehrfachzuordnungen beachten!**
- "Gute Lesbarkeit" und "Validitätsprüfung" gelten für **BEIDE** Formate — wer nur XML ankreuzt, bekommt Punktabzug!

**Merkhilfe XML-Nachteile:** XML ist wie ein ausführliches Formular mit Vor- und Nachnamen-Feldern für alles → viel Overhead, aber strukturierter.

**JSON-Vorteile für IoT:** Wegen kompaktem Aufbau und geringem Overhead bevorzugt bei ressourcenbeschränkten Geräten und häufigen Übertragungen.

---

## Aufgabe 4b: XML ConditionMonitoring Nachrichtenstruktur

> **Klausurfrage (SoSe24 + SS25 identisch):**
> Erstellen Sie eine XML-Nachricht für den Zustand einer Maschine basierend auf dem Condition Monitoring Teilmodell. Beachten Sie die ebXML Core Component Type (CCType) Namenskonventionen. (2 Punkte)

### Antwort

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ConditionMonitoring>
  <MachineIdentifier>M1</MachineIdentifier>
  <ProductionOrderIdentifier>PO-2024-007</ProductionOrderIdentifier>
  <PlannedProductionStartDateTime>2024-04-08T08:00:00Z</PlannedProductionStartDateTime>
  <PlannedProductionEndDateTime>2024-04-08T16:00:00Z</PlannedProductionEndDateTime>
  <SensorTypeCode>Temperature</SensorTypeCode>
  <SensorMeasure unitCode="CEL">45.2</SensorMeasure>
</ConditionMonitoring>
```

### Kontext & Eselsbrücken

**ebXML CCType Namenskonventionen (aus Klausurkorrektur):**
- **Identifier** für eindeutige Bezeichner: `MachineIdentifier`, `ProductionOrderIdentifier`
- **DateTime** für Zeitangaben: `PlannedProductionStartDateTime`
- **Code** für standardisierte Codes: `SensorTypeCode`
- **Measure** für Messwerte mit Einheit: `SensorMeasure unitCode="CEL"` (CEL = Celsius nach UN/ECE Rec 20)

**Wichtig:** Das Root-Element heißt `<ConditionMonitoring>` (UpperCamelCase, kein XML-Namespace nötig in der Klausur).

**Typische CCType-Suffixe:**
| Suffix | Bedeutung | Beispiel |
|---|---|---|
| `Identifier` | Eindeutiger Bezeichner | `MachineIdentifier` |
| `DateTime` | Zeitstempel | `StartDateTime` |
| `Code` | Standardisierter Code | `SensorTypeCode` |
| `Measure` | Messwert + Einheit | `SensorMeasure unitCode="CEL"` |
| `Name` | Lesbarer Name | `ManufacturerName` |
| `Indicator` | Boolean (true/false) | `ActiveIndicator` |

---

## Aufgabe 4c: RDF Tripel (Semantic Web / Semantische Interoperabilität)

> **Klausurfrage (SoSe24 + SS25 identisch):**
> Formulieren Sie zwei RDF-Tripel für eine Maschine M1, die Produktionsauftrag 1234 bearbeitet und dabei 5 kWh Energie verbraucht. (1 Punkt)

### Antwort

**RDF-Tripel (Subjekt – Prädikat – Objekt):**

| Subjekt | Prädikat | Objekt |
|---|---|---|
| M1 | processesOrder (hat Produktionsauftrag) | 1234 |
| M1 | hasEnergyConsumption (hat Energieverbrauch) | 5 kWh |

**Als formale Tripel:**
```
<M1> <processesOrder> <1234>
<M1> <hasEnergyConsumption> "5 kWh"
```

**Als RDF/XML:**
```xml
<rdf:Description rdf:about="http://example.org/M1">
  <ex:processesOrder>1234</ex:processesOrder>
  <ex:hasEnergyConsumption>5 kWh</ex:hasEnergyConsumption>
</rdf:Description>
```

### Kontext & Eselsbrücken

**RDF = Resource Description Framework:** W3C-Standard zur Beschreibung von Ressourcen im Web. Basiert auf gerichteten Graphen.

**Tripel-Struktur:** Subjekt → Prädikat → Objekt (wie ein einfacher Satz: "Maschine M1 hat Energieverbrauch 5 kWh")

**Semantic Web Pyramide (von unten nach oben):**
- URI/IRI (Identifikation)
- RDF (Datenmodell — Tripel)
- RDFS (Schema — Klassen und Properties)
- OWL (Ontologien — komplexe Beziehungen und Inferenz)
- SPARQL (Abfragesprache für RDF)

**Warum semantische Interoperabilität?** Syntaktische Interoperabilität (XML/JSON) reicht nicht — Maschinen können Daten lesen, aber nicht verstehen. RDF + Ontologien geben den Daten Bedeutung.

---

## Aufgabe 5: Edge Computing — 2 Vorteile mit konkreten Beispielen

> **Klausurfrage (SoSe24 + SS25 identisch):**
> Das Unternehmen überlegt, Edge Computing einzusetzen. Nennen Sie zwei wesentliche Vorteile von Edge Computing gegenüber einer reinen Cloud-Lösung und erläutern Sie diese jeweils anhand eines konkreten Beispiels aus dem Unternehmenskontext. (2 Punkte)

### Antwort

**Vorteil 1: Verbesserte Echtzeitverarbeitung durch geringere Latenz**
- Erklärung: Daten werden lokal am Edge-Gerät verarbeitet, ohne den Umweg über die Cloud. Reaktionszeiten von Millisekunden statt Sekunden.
- Beispiel Helios SE/Airflow SE: Bei Überschreiten eines kritischen Temperaturschwellwerts kann die Maschine sofort vor Ort abgeschaltet werden, ohne auf eine Antwort aus der Cloud warten zu müssen. Dies verhindert Maschinenschäden in Echtzeit.

**Vorteil 2: Verbesserte Datensicherheit durch lokale Verarbeitung**
- Erklärung: Sensible Daten verlassen das Unternehmensnetzwerk nicht. Risiken durch Übertragung (Abhören, Man-in-the-Middle) entfallen.
- Beispiel Helios SE/Airflow SE: Energieverbrauchsdaten lassen Rückschlüsse auf Produktionsauslastung und -kapazitäten zu (Betriebsgeheimnis). Durch Edge Computing werden diese Daten lokal verarbeitet und nur aggregierte Ergebnisse in die Cloud übertragen.

### Kontext & Eselsbrücken

**Weitere Edge Computing Vorteile (für Kontext):**
- Reduzierte Bandbreitenkosten (nur relevante/aggregierte Daten in die Cloud)
- Offline-Fähigkeit (lokale Verarbeitung auch bei fehlender Internetverbindung)
- Compliance/Datenschutz (DSGVO: Daten müssen ggf. im Land bleiben)

**Edge vs. Fog vs. Cloud:**
- **Edge**: Direkt am Gerät / an der Maschine (IoT-Gateway, Raspberry Pi)
- **Fog**: Lokales Netzwerk-Level (Unternehmensserver, lokale Cloud)
- **Cloud**: Zentrale Rechenzentren von Hyperscalern (AWS, Azure, GCP)

**Merkhilfe:** Edge = "Am Rand des Netzwerks" — wie der Außendienst, der Entscheidungen vor Ort trifft, ohne das Büro fragen zu müssen.

---

## Aufgabe 6: Industrie 4.0 Produktionsprozesse + Logistik 4.0

> **Klausurfrage (SoSe24 + SS25 identisch):**
>
> **(a)** Beschreiben Sie zwei konkrete Veränderungen in Produktionsprozessen durch Industrie 4.0 im Unternehmenskontext. (2 Punkte)
>
> **(b)** Nennen und erläutern Sie zwei Einsatzmöglichkeiten von Logistik 4.0-Technologien im Unternehmenskontext. (2 Punkte)

### Antwort

**(a) Industrie 4.0 in Produktionsprozessen:**

**Veränderung 1: Condition Monitoring und vorausschauende Wartung (Predictive Maintenance)**
- Sensoren überwachen kontinuierlich Maschinenzustand (Temperatur, Vibration, Druck)
- KI-Algorithmen erkennen Anomalien und sagen Ausfälle voraus
- Statt geplanter Wartungsintervalle → Wartung nur wenn nötig
- Ergebnis: Reduzierung ungeplanter Stillstandzeiten

**Veränderung 2: Flexible, selbststeuernde Fertigung**
- Produkte "kennen" ihre Fertigungsparameter über Verwaltungsschale/RFID
- Maschinen konfigurieren sich selbst je nach Auftrag
- Losgröße 1 wirtschaftlich realisierbar (Individualisierung ohne Mehrkosten)

**(b) Logistik 4.0 Technologien:**

**Einsatz 1: Fahrerlose Transportsysteme (FTS / AGV — Autonomous Guided Vehicles)**
- Automatischer Transport von Materialien und Fertigprodukten in der Fabrik
- Navigation per Laserscanner, Kamera oder eingebettete Bodenmarkierungen
- Keine manuellen Gabelstapler → weniger Personal, weniger Fehler, 24/7-Betrieb

**Einsatz 2: E-Kanban / Digitales Kanban**
- Sensoren oder RFID melden automatisch, wenn Behälter/Regal leer wird
- Nachbestellung wird automatisch ausgelöst (ohne manuellen Scan/Meldung)
- Just-in-Time-Prinzip wird vollautomatisch realisiert

### Kontext & Eselsbrücken

**Industrie 4.0 Kernprinzipien:**
- Vernetzung (alle Maschinen, Produkte, Menschen digital verbunden)
- Informationstransparenz (digitaler Zwilling der gesamten Fabrik)
- Dezentrale Entscheidungen (Maschinen entscheiden selbst, nicht nur zentrale SPS)
- Technische Assistenz (Mensch wird von Maschinen unterstützt)

**Logistik 4.0 vs. traditionelle Logistik:**
- Traditionell: Zentrale Planung, manuelle Prozesse, reaktiv (erst planen, dann ausführen)
- Logistik 4.0: Dezentrale Selbstorganisation, automatisiert, proaktiv (Probleme werden vorhergesagt)

**Merkhilfe für FTS vs. E-Kanban:**
- FTS = Transport (die Ware kommt zu dir)
- E-Kanban = Bestellung (du bekommst automatisch Nachschub)

---

## Aufgabe 7a: Middleware — Nachrichtenorientiertes Modell

> **Klausurfrage (SoSe24 + SS25 identisch):**
> Das Unternehmen setzt Middleware zur Integration seiner Anwendungssysteme ein. Welches Middleware-Modell eignet sich am besten für die zeitliche Entkopplung von Sender und Empfänger? Nennen Sie das Modell, erläutern Sie das Prinzip und begründen Sie die Eignung. (2 Punkte)

### Antwort

**Modell: Nachrichtenorientiertes Modell (Message-Oriented Middleware — MOM) mit asynchronem Kommunikationsmodus und Warteschlangen (Message Queues)**

**Prinzip:**
- Sender schreibt Nachricht in eine Message Queue (Warteschlange) und macht sofort weiter
- Empfänger liest Nachricht aus der Queue ab, wenn sein System bereit ist
- Sender und Empfänger müssen **nicht gleichzeitig verfügbar** sein

**Begründung für zeitliche Entkopplung:**
- Sender ist unabhängig von der Verfügbarkeit des Empfängers
- Nachrichten bleiben in der Queue bis zur Abholung (persistent)
- Empfänger kann zu einem späteren Zeitpunkt (wenn er wieder verfügbar ist) die Nachrichten verarbeiten

**Topologien:**
- **Punkt-zu-Punkt (P2P):** Nachricht geht genau an einen Empfänger
- **Publish/Subscribe:** Nachricht geht an alle interessierten Abonnenten (wie MQTT!)
- **Bus-Architektur:** Zentraler Message Bus mit Queues für alle Systeme
- **Hub-and-Spoke:** Zentrale Integrationsplattform mit Adaptern für jedes System

### Kontext & Eselsbrücken

**Vergleich synchron vs. asynchron:**
| Merkmal | Synchron (RPC/RMI) | Asynchron (MOM) |
|---|---|---|
| Kopplung | Eng (beide müssen gleichzeitig laufen) | Lose (zeitliche Entkopplung) |
| Beispiel | Telefongespräch | E-Mail / Brief |
| Middleware | Remote Procedure Call (RPC) | Message Queue (MQTT, RabbitMQ, SAP MQ) |
| Wann? | Sofortige Antwort nötig | Zuverlässigkeit > Echtzeit |

**SAP-Kontext (relevant für BWL-Studierende):**
- SAP Gateway = RESTful Web Services (synchron, für Fiori-Apps)
- SAP MQ / Integration Suite = Nachrichtenorientiert (asynchron, für B2B-Integration)

---

## Aufgabe 7b: EDI — Komponenten eines EDI-Systems

> **Klausurfrage (SoSe24 + SS25 identisch):**
> Nennen Sie drei wesentliche Komponenten eines EDI-Systems (nicht die Nachrichtenstandards!) und erläutern Sie deren Funktion. (3 Punkte)

### Antwort

| Komponente | Funktion |
|---|---|
| **Konverter** | Wandelt interne Daten des Anwendungssystems (z.B. aus ERP) in das standardisierte EDI-Format um (und umgekehrt) |
| **Kommunikationsmodul / Konnektor** | Übernimmt die technische Datenübertragung an den Geschäftspartner (z.B. über AS2, FTP, VAN) |
| **Mapping-Tool** | Ordnet Felder des internen Datenformats den Feldern des EDI-Standards zu (Zuordnungstabellen) |

### Kontext & Eselsbrücken

**HÄUFIGER FEHLER:** Studenten nennen EDIFACT, ORDERS, INVOIC etc. — das sind **Nachrichtentypen/Standards**, KEINE Systemkomponenten! Die Frage fragt explizit nach den technischen Bausteinen.

**Eselsbrücke: K-K-M**
- **K**onverter (Format umwandeln)
- **K**ommunikationsmodul (senden/empfangen)
- **M**apping-Tool (Felder zuordnen)

**EDI-Prozessablauf:**
```
ERP-System → [Konverter] → EDI-Format → [Kommunikationsmodul] → Partner
                ↑ Mapping-Tool definiert die Zuordnung ↑
```

---

## Aufgabe 7c: EDIFACT — Nachrichtentypen zuordnen

> **Klausurfrage (SoSe24 + SS25 identisch):**
> Ordnen Sie die folgenden Geschäftsvorgänge dem passenden EDIFACT-Nachrichtentyp zu:
> - Buchung/Reservierung von Transportkapazitäten
> - Erteilung von Transportaufträgen an Spediteur
> - Instruktionen zum Umschlag und Transport von Gütern
> - Versenden von Transportstatusmeldungen
> (2 Punkte)

### Antwort

| Geschäftsvorgang | EDIFACT-Nachrichtentyp |
|---|---|
| Buchung/Reservierung von Transportkapazitäten | **IFTMBF** (Firm Booking) |
| Erteilung von Transportaufträgen an Spediteur | **IFTMIN** (Instruction to Despatch / Transport Instruction) |
| Instruktionen zum Umschlag und Transport von Gütern | **HANMOV** (Cargo/Goods Handling and Movement) |
| Versenden von Transportstatusmeldungen | **IFTSTA** (Multimodal Status Report) / **DESADV** (Despatch Advice) |

### Kontext & Eselsbrücken

**Merkhilfe für Transport-Nachrichtentypen:**
- **IFT**xxx = International Freight Transport (alles mit Transport)
  - **IFTMBF** = Firm Booking (MB = Make Booking)
  - **IFTMIN** = Minimum = Transportauftrag (kürzester Befehl: "Mach das!")
  - **IFTSTA** = Status (STA = Status)
- **HANMOV** = Handle Movement (Umschlag + Bewegung)
- **DESADV** = Despatch Advice (Liefermeldung/Versandanzeige)

**Weitere wichtige EDIFACT-Typen (allgemein):**
| Kürzel | Deutsch | Englisch |
|---|---|---|
| ORDERS | Bestellung | Purchase Order |
| ORDRSP | Bestellantwort | Purchase Order Response |
| INVOIC | Rechnung | Invoice |
| DESADV | Liefermeldung | Despatch Advice |
| RECADV | Wareneingangsmeldung | Receiving Advice |
| PRICAT | Preisliste/Katalog | Price Catalogue |

**EDIFACT Nachrichtenstruktur (aus Klausur SoSe24):**
```
UNA:+.? '          ← Service-String (Sonderzeichen-Definition)
UNB+...            ← Interchange Header (Sender/Empfänger, Datum/Zeit)
UNH+1+ORDERS...    ← Message Header (Nachrichtentyp)
BGM+220+B10001+9'  ← Anfangsnachricht (Dokumenttyp)
DTM+...            ← Datum/Zeit
NAD+...            ← Name und Adresse
LIN+...            ← Zeile (Artikel)
QTY+...            ← Menge
UNT+9+1'           ← Message Trailer (Ende Nachricht)
UNZ+1+1234567'     ← Interchange Trailer (Ende Übertragung)
```

---

## Bonus: Überblick Klausurstruktur & Punkteverteilung

| Aufgabe | Thema | Punkte |
|---|---|---|
| 1 | Verwaltungsschale: Asset Identification + Condition Monitoring | 6 Pkt. |
| 2 | RAMI 4.0 + IIRA Komponentenzuordnung | 3 Pkt. |
| 3 | OPC-UA (4 Merkmale) + MQTT (Komponenten, Topics, QoS) | 6 Pkt. |
| 4 | XML vs. JSON + XML-Nachricht + RDF-Tripel | 5 Pkt. |
| 5 | Edge Computing (2 Vorteile + Beispiele) | 2 Pkt. |
| 6 | Industrie 4.0 + Logistik 4.0 (je 2 Beispiele) | 4 Pkt. |
| 7 | Middleware + EDI-Komponenten + EDIFACT-Typen | 4 Pkt. |
| **Gesamt** | | **30 Pkt.** |

**Bestehensgrenzen (typisch HWG-LU):** ca. 15/30 Punkte = 50% für Note 4,0

---

## Schnell-Checkliste für die Klausur

- [ ] Verwaltungsschale: `UpperCamelCase` für alle idShort-Properties!
- [ ] Asset Identification: 4 Properties (ManufacturerName, ManufacturerTypId, AssetId, InstanceId)
- [ ] Condition Monitoring: Merkmale IMMER mit Einheit (°C, bar, kW, -)
- [ ] RAMI 4.0: Kommunikationsmodul → **Integration**-Layer (NICHT Communication!)
- [ ] IIRA: Kommunikationsmodul → **Information Flow** (Pfeil, keine Domäne!)
- [ ] OPC-UA: Genau 4 ankreuzen — S**I**DS (Sicherheit, Industrieakzeptanz, Datenaustausch vertikal, Semantik)
- [ ] MQTT QoS: Verluste tolerierbar → 0 | Vollständige Historie → 1 | Keine Duplikate → 2
- [ ] XML vs. JSON: "Lesbarkeit" und "Validierung" sind **BEIDE** Formate!
- [ ] XML CCType: `Identifier`, `DateTime`, `Code`, `Measure unitCode="CEL"`
- [ ] Edge Computing: Latenz/Echtzeit + Datensicherheit/Datenschutz
- [ ] EDI-Komponenten: Konverter + Kommunikationsmodul + Mapping-Tool (NICHT die Standards!)
- [ ] EDIFACT: IFTMBF=Buchung | IFTMIN=Transportauftrag | HANMOV=Umschlag | IFTSTA=Status
