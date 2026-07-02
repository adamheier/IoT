# Lernscript Klausurvorbereitung — IoT Technologien (MW220)
> Basiert auf echten OCR-extrahierten Fragen aus Altklausur SoSe24 (Helios SE, 17.5/30 Pkt.) und SS25 (Airflow SE)

---

## Aufgabe 1: Verwaltungsschale — Asset Identification + Condition Monitoring

> **Klausurfrage (SoSe24 + SS25 nahezu identisch):**
>
> Das Unternehmen möchte für seine Produktionsmaschinen „Digitale Zwillinge" in Anlehnung an die Standardisierungsbestrebungen der „Verwaltungsschale der Industrie 4.0 Komponente" entwickeln. Es soll eine Beschränkung auf das generische Teilmodell „Asset Identification" sowie auf ein freies Teilmodell „Condition Monitoring" erfolgen.
>
> **Teil a) Asset Identification:**
> Spezifizieren Sie die für eine Realisierung des generischen Teilmodells „Asset Identification" benötigten typ- und instanzbezogenen Identifikationsmerkmale, um die Maschinen in Bezug auf den Hersteller und die herstellerseitige Produktnummer sowie mit einer global eindeutigen Identifikation und einer zusätzlichen Seriennummer beschreiben zu können.
> Tragen Sie die Namen der Identifikationsmerkmale in die vier Felder ein:
> - Hersteller:
> - Produktnummer oder –bezeichnung:
> - Global eindeutige Nummer der Maschine:
> - Seriennummer der Maschine:
> *(Verwende idShort-Namen im UpperCamelCase Format aus dem Diskussionspapier „Verwaltungsschale in der Praxis")*
>
> **Teil b) Condition Monitoring:**
> Spezifizieren Sie die benötigten Merkmale inklusive ihrer jeweiligen Einheiten (sofern relevant), um die Temperatur, den aktuellen Druck und den aktuellen Stromverbrauch der Maschinen mit Bezug zum aktuell ausgeführten Fertigungsauftrag überwachen zu können.
> *(SS25: Temperatur, Druck, Energieverbrauch + Fertigungsauftrag)*

### Antwort

**Teil a) Asset Identification — 4 Identifikationsmerkmale:**

| Feld | Korrekter idShort-Name |
|---|---|
| Hersteller | **ManufacturerName** |
| Produktnummer oder -bezeichnung | **ManufacturerTypId** oder **ManufacturerTypName** |
| Global eindeutige Nummer der Maschine | **AssetId** |
| Seriennummer der Maschine | **InstanceId** |

**Teil b) Condition Monitoring — Merkmale mit Einheiten:**

| Merkmal | Einheit |
|---|---|
| Temperature | °C |
| Pressure | bar |
| PowerConsumption | kW |
| ProductionOrder | - (keine Einheit) |

### Kontext & Häufige Fehler

→ Korrekte Namen kommen aus dem Diskussionspapier „Verwaltungsschale in der Praxis", Rubrik „idShort"

**Namenskonvention PFLICHT: UpperCamelCase**
→ `ManufacturerName` ✅, `manufacturer_name` ❌, `manufacturerName` ❌

**Typbezogen vs. Instanzbezogen:**
- Typbezogen (gilt für alle Maschinen gleichen Typs): `ManufacturerName`, `ManufacturerTypId`, `ManufacturerTypName`
- Instanzbezogen (gilt für genau diese eine Maschine): `AssetId`, `InstanceId`

**Condition Monitoring = freies Teilmodell:** Eigene Namen in Englisch, UpperCamelCase, mit Einheit wenn sinnvoll. `ProductionOrder` hat keine Einheit → Strich `-`.

---

## Aufgabe 2: RAMI 4.0 + IIRA Komponentenzuordnung

> **Klausurfrage (SoSe24 + SS25 identisch, nur Firmennamen ändern sich):**
>
> Für die Zustandsüberwachung der Maschinen wird die unternehmenseigene Middleware „EasyLink" / „FixConnect" eingesetzt, die ein semantisches Datenmodell des gesamten Maschinenparks enthält und das Industrieautomationsprotokoll Modbus verwendet. Der Modbus-Master ist in der zentralen Middleware-Komponente implementiert und ruft Daten von den Modbus-Slaves ab. Diese befinden sich in Kommunikationsmodulen in den einzelnen Maschinen.
>
> **Teil a) RAMI 4.0:**
> Ordnen Sie die links stehenden Komponenten der aktuellen Integrationsarchitektur den passenden Schichten (Layers) des RAMI 4.0 zu.
>
> **Teil b) IIRA:**
> Ordnen Sie die Komponenten den passenden Domänen (Functional Domains & Physical Systems) und Informationsflüssen (Pfeilen) der IIRA zu.

### Antwort

**RAMI 4.0 — Korrekte Zuordnung (von oben nach unten):**

| RAMI 4.0 Layer | Komponente |
|---|---|
| **Business** | Betriebliche Produktionsplanung und –steuerung |
| **Functional** | Anwendung für Zustandsüberwachung |
| **Information** | Datenmodell des Maschinenparks |
| **Communication** | Modbus Master und Slaves |
| **Integration** | Kommunikationsmodul |
| **Asset** | Maschinen mit Sensoren |

**IIRA — Korrekte Zuordnung:**

| IIRA Domäne / Element | Komponente |
|---|---|
| **Business** | Betriebliche Produktionsplanung und –steuerung |
| **Operations** | Anwendung für Zustandsüberwachung |
| **Information** | Datenmodell des Maschinenparks |
| **Control / Application** | Modbus Master und Slaves |
| **Information Flows (Pfeile)** | Kommunikationsmodul |
| **Physical Systems** | Maschinen mit Sensoren |

### Kontext & Häufige Fehler

**Kritischer Unterschied RAMI 4.0 vs. IIRA für das Kommunikationsmodul:**
- RAMI 4.0: Kommunikationsmodul → **Integration**-Layer (es sitzt in der Maschine und übersetzt physikalisches Signal in digitale Daten — Übergang reale → digitale Welt)
- IIRA: Kommunikationsmodul → **Information Flows (Pfeile)** (kein eigenständige Domäne, sondern der Datenfluss zwischen Domänen)

**Logik für die Zuordnung:**
- Modbus = das Protokoll selbst = standardisierte Datenübertragung zwischen verteilten Komponenten → **Communication**
- Kommunikationsmodul = sitzt in der Maschine, verbindet Sensor mit Netzwerk, übersetzt physikalisches Signal → **Integration**

---

## Aufgabe 3a: OPC-UA — 4 Merkmale ankreuzen

> **Klausurfrage (SoSe24 + SS25 identisch):**
>
> Da die unternehmenseigene Kommunikationslösung mittlerweile veraltet ist, soll sie gegen eine neue, moderne Lösung ausgetauscht werden. Für die Realisierung stehen der Industrieautomationsstandard OPC-UA und das Kommunikationsprotokoll MQTT zur Auswahl.
>
> Markieren Sie insgesamt **vier** der nachstehenden Aspekte, die für OPC-UA zutreffend sind und für einen Einsatz dieses Industrieautomationsstandards sprechen:
>
> - [ ] Beinhaltet semantisches Datenmodell
> - [ ] Speziell konzipiert für ressourcenbeschränkte Geräte
> - [ ] Ermöglicht Datenaustausch zwischen allen Unternehmensebenen
> - [ ] Unterstützt gängige Chat-Funktionen wie P2P- und Mehrbenutzerkonferenzen
> - [ ] Industrieakzeptanz und relativ große Verbreitung
> - [ ] Herstellerspezifischer, proprietärer Standard
> - [ ] Durchgängiges Sicherheits- und Authentifizierungskonzept
> - [ ] Lässt sich mit allen Dimensionen von IIRA vereinen

### Antwort

**Genau diese 4 ankreuzen:**

✅ **Beinhaltet semantisches Datenmodell**
✅ **Ermöglicht Datenaustausch zwischen allen Unternehmensebenen**
✅ **Industrieakzeptanz und relativ große Verbreitung**
✅ **Durchgängiges Sicherheits- und Authentifizierungskonzept**

**NICHT ankreuzen:**
❌ Speziell konzipiert für ressourcenbeschränkte Geräte (→ das ist MQTT/CoAP)
❌ Unterstützt gängige Chat-Funktionen wie P2P- und Mehrbenutzerkonferenzen (→ das ist XMPP)
❌ Herstellerspezifischer, proprietärer Standard (→ OPC-UA ist offen, von OPC Foundation)
❌ Lässt sich mit allen Dimensionen von IIRA vereinen (nicht als OPC-UA-spezifisches Merkmal zutreffend)

---

## Aufgabe 3b: MQTT — Modbus-Ersatz, Topics, Wildcards, Features, QoS

> **Klausurfrage (SoSe24 + SS25 — Details unterscheiden sich!):**
>
> Betrachten Sie nun einen möglichen Wechsel auf MQTT und ermitteln Sie die wesentlichen Änderungen in der aktuellen Kommunikationslösung, die zur Übertragung der Maschinenzustände mit MQTT erforderlich wären.
>
> - Modbus-Master in Middleware-Komponente wird ersetzt durch: ___ in der Kommunikations-Rolle: ___
> - Modbus-Slave in Maschine wird ersetzt durch: ___ in der Kommunikations-Rolle: ___
> - Zusätzlich benötigte Komponente: ___
>
> Definieren Sie passende Topics mit Bezug zu „Condition Monitoring", die eine separate Subskription von aktueller Temperatur und aktuellem Energieverbrauch (SoSe24) bzw. Temperatur und Druck (SS25) pro Maschine ermöglichen. Berücksichtigen Sie, dass auch eine Subskription auf den gesamten Maschinenpark möglich sein soll.
> *(Nur Beispiel einer Maschine M1, englischsprachig, kein Fertigungsauftrag im Topic)*
>
> Wildcard-Fragen:
> - Alle Nachrichten von allen Maschinen des Maschinenparks?
> - Alle Zustandsnachrichten aller Maschinen?
> - Nur energieverbrauchsbezogene (SoSe24) / temperaturbezogene (SS25) Nachrichten aller Maschinen?
>
> Welches Protokollfeature ermöglicht einem neu hinzukommenden Client direkt den letzten Maschinenzustand ohne auf eine neue Sendung zu warten?
>
> **QoS SoSe24:** Sensornachrichten im Sekundentakt, Netzbelastung minimieren → QoS?
> **QoS SS25:** Sensornachrichten jede Stunde, vollständige Tageshistorie erforderlich, Netzbelastung minimieren → QoS?

### Antwort

**Modbus → MQTT Ersatz:**

| Alt (Modbus)                | Neu (MQTT)      | Rolle        |
| --------------------------- | --------------- | ------------ |
| Modbus-Master in Middleware | MQTT-Client     | Subscriber   |
| Modbus-Slave in Maschine    | MQTT-Client     | Publisher    |
| (neu)                       | **MQTT-Broker** | (Vermittler) |

**Topics (SoSe24-Beispiel mit `Machinery/M1/...`):**
```
Machinery/M1/ConditionMonitoring/Temperature
Machinery/M1/ConditionMonitoring/EnergyConsumption
```

**Topics (SS25-Beispiel mit `ProductionPlant/M1/...`):**
```
ProductionPlant/M1/ConditionMonitoring/Temperature
ProductionPlant/M1/ConditionMonitoring/Pressure
```

**Wildcard-Topics (SoSe24):**
- Alle Nachrichten aller Maschinen: `Machinery/#`
- Alle Zustandsnachrichten aller Maschinen: `Machinery/+/ConditionMonitoring/+`
- Nur energieverbrauchsbezogen: `Machinery/+/ConditionMonitoring/EnergyConsumption`

**Wildcard-Topics (SS25):**
- Alle Nachrichten aller Maschinen: `ProductionPlant/#`
- Alle Zustandsnachrichten aller Maschinen: `ProductionPlant/+/ConditionMonitoring/+`
- Nur temperaturbezogen: `ProductionPlant/+/ConditionMonitoring/Temperature`

**Protokollfeature für letzten Zustand ohne Warten:** 
- Retained Message

**QoS-Entscheidung:**
- SoSe24 (Sekundentakt, Verluste tolerierbar, Netzbelastung minimieren) → **QoS 0**
- SS25 (stündlich, vollständige Tageshistorie nötig, Netzbelastung minimieren) → **QoS 1**

### Kontext & Häufige Fehler

**Wildcards Merkhilfe:**
- `+` = Single-Level (genau eine Ebene): `Machinery/+/Temperature` = Temperature aller Maschinen
- `#` = Multi-Level (alle restlichen Ebenen): `Machinery/#` = alles unter Machinery

**QoS-Matrix:**

| QoS | Garantie | Verwende wenn... |
|---|---|---|
| 0 | Höchstens einmal (Fire & Forget) | Hohe Frequenz + Verluste tolerierbar |
| 1 | Mindestens einmal (mit ACK) | Vollständigkeit wichtig + Duplikate ok |
| 2 | Genau einmal (4-Wege-Handshake) | Keine Duplikate erlaubt |

**KRITISCH:** Bei „vollständige Tageshistorie benötigt" → IMMER QoS 1, niemals QoS 0!

---

## Aufgabe 4a: XML vs. JSON — Vor-/Nachteile zuordnen

> **Klausurfrage (SoSe24 + SS25 identisch):**
>
> XML und JSON sind gängige Datenformate zur Realisierung der syntaktischen Interoperabilität. Ordnen Sie den beiden Datenformaten die passenden Vor- und Nachteile in Bezug auf den Einsatz in IoT-Projekten zu.
>
> *Hinweis: Mehrfachzuordnungen sind möglich und für die korrekte Beantwortung auch erforderlich.*
>
> Eigenschaften:
> - Anfälliger für Sicherheitslücken
> - Möglichkeit der Definition komplexer Elemente mit Attributen
> - Overhead aufgrund von Redundanz
> - Validitätsprüfung mit Hilfe von Schemata möglich
> - „gute" Lesbarkeit für Mensch und Maschine
> - „kompakter" Aufbau mit nur sehr geringem Overhead

### Antwort

| Eigenschaft | XML | JSON |
|---|---|---|
| Anfälliger für Sicherheitslücken | ✅ | ❌ |
| Möglichkeit der Definition komplexer Elemente mit Attributen | ✅ | ❌ |
| Overhead aufgrund von Redundanz (öffnende + schließende Tags) | ✅ | ❌ |
| **Validitätsprüfung mit Hilfe von Schemata möglich** | **✅** | **✅** |
| **„gute" Lesbarkeit für Mensch und Maschine** | **✅** | **✅** |
| „kompakter" Aufbau mit nur sehr geringem Overhead | ❌ | ✅ |

### Kontext & Häufige Fehler

**PFLICHT: Mehrfachzuordnungen (fett markiert) MÜSSEN beide angekreuzt werden!**
- „Validitätsprüfung" → gilt für XML (XSD) UND JSON (JSON Schema) → beide ankreuzen!
- „gute Lesbarkeit" → gilt für beide Formate → beide ankreuzen!

---

## Aufgabe 4b: XML ConditionMonitoring Nachrichtenstruktur

> **Klausurfrage (SoSe24 vs. SS25 — Sensortypen unterscheiden sich!):**
>
> Definieren Sie mit XML eine Nachrichtenstruktur „ConditionMonitoring" für die Übermittlung von Sensordaten. Anforderungen:
> - Bezug zur jeweiligen Maschine und zum aktuell bearbeiteten Fertigungsauftrag
> - Zeitstempel im UTC-Format
> - **SoSe24:** Temperatur- und **Energieverbrauch**sdaten einzeln mit Maßeinheit als Attribut
> - **SS25:** Temperatur- und **Druck**daten einzeln mit Maßeinheit als Element mit Attribut
> - Weitere Sensordaten ohne Änderung der Grundstruktur ergänzbar
> - Namensgebung nach **ebXML Core Component Type (CCType) Konventionen**
> - Nur **zwei Hierarchieebenen**, erste Ebene heißt `<ConditionMonitoring>`

### Antwort

```xml
<ConditionMonitoring>
  <MachineIdentifier>M1</MachineIdentifier>
  <ProductionOrderIdentifier>FA-2026-001</ProductionOrderIdentifier>
  <PlannedProductionStartDateTime>2026-07-01T08:00:00Z</PlannedProductionStartDateTime>
  <PlannedProductionEndDateTime>2026-07-01T16:00:00Z</PlannedProductionEndDateTime>
  <SensorTypeCode>Pressure</SensorTypeCode>
  <SensorMeasure unitCode="BAR">2.5</SensorMeasure>
</ConditionMonitoring>
```

Mögliche unitCode=["BAR", "CEL", "KWH", "ST", "KWT", "KGM", "MTR", "HUR"]
### Kontext & Häufige Fehler

**Was hat der Student in SoSe24 falsch gemacht (2.5/3):**
- `<MachineID>` statt `<MachineIdentifier>` → ebXML CCType Suffix fehlt!
- `<ProductionID>` statt `<ProductionIdentifier>` → gleicher Fehler
- `<SensorType>` statt `<SensorTypeCode>` → Suffix `Code` fehlt
- `<Measure><Content unit="CEL">` statt `<SensorMeasure unitCode="CEL">`

**ebXML CCType Suffixe — PFLICHT zu kennen:**

| Suffix       | Bedeutung                       | Beispiel                                             |
| ------------ | ------------------------------- | ---------------------------------------------------- |
| `Identifier` | Eindeutiger Bezeichner          | `MachineIdentifier`                                  |
| `DateTime`   | Zeitstempel                     | `PlannedProductionStartDateTime`                     |
| `Code`       | Standardisierter Code           | `SensorTypeCode`                                     |
| `Measure`    | Messwert + Einheit als Attribut | `<SensorMeasure unitCode="CEL">45.2</SensorMeasure>` |

**Wichtig:** Das Attribut heißt `unitCode`, nicht `unit`! → `<SensorMeasure unitCode="CEL">`

**Nur zwei Hierarchieebenen:** Root = `<ConditionMonitoring>`, alle anderen Elemente direkt darunter (keine verschachtelten Sub-Elemente!).

---

## Aufgabe 4c: RDF Tripel (Semantic Web)

> **Klausurfrage (SoSe24 + SS25 identisch):**
>
> Zur Realisierung der semantischen Interoperabilität soll das Resource Description Framework (RDF) zum Einsatz kommen. Formulieren Sie jeweils eine Elementaraussage bestehend aus Subjekt (Ressource), Prädikat (Eigenschaft der Ressource) und Objekt (Wert der Eigenschaft):
> 1. Den Zusammenhang zwischen der Maschine und dem Fertigungsauftrag
> 2. Den Zusammenhang zwischen der Maschine und den Energieverbrauchsdaten

### Antwort

**Tripel 1 — Maschine + Fertigungsauftrag:**

| Subjekt   | Prädikat           | Objekt |
| --------- | ------------------ | ------ |
| Machine_1 | hasProductionOrder | PO_4   |

**Tripel 2 — Maschine + Energieverbrauch:**

| Subjekt   | Prädikat             | Objekt           |
| --------- | -------------------- | ---------------- |
| Machine_1 | hasEnergyConsumption | EC_Messurement_2 |

**Zwei geeignete Möglichkeiten zur Realisierung der semantischen Interoperabilität...**
...bei **JSON:**
- JSON-LD
- ebXML CCTypes
...bei **XML:**
- RDF
- ebXML CCTypes
### Kontext

**RDF Grundprinzip:** Elementaraussagen als **Tripel**: Subjekt – Prädikat – Objekt
→ Wie ein einfacher Satz: „Maschine M1 hat Energieverbrauch 5 kWh"

**Warum RDF für semantische Interoperabilität?**
Syntaktische Interoperabilität (XML/JSON) bedeutet: Maschinen können Daten lesen.
Semantische Interoperabilität: Maschinen verstehen die **Bedeutung** der Daten.
RDF gibt Daten durch URIs und Prädikate eine maschinenlesbare Bedeutung.

---

## Aufgabe 5: Edge Computing — 2 Vorteile mit konkreten Beispielen

> **Klausurfrage (SoSe24 + SS25 leicht unterschiedlich):**
>
> Die bisherige Cloud-basierte Zustandsüberwachung soll durch eine Edge Computing Lösung ersetzt werden.
>
> Nennen Sie zwei Vorteile, die der dezentrale Architekturansatz des Edge Computings gegenüber einer zentralen Cloud Computing Lösung haben kann.
>
> **SoSe24:** Geben Sie für den **ersten** Vorteil ein konkretes Beispiel zur **Temperaturüberwachung** und für den **zweiten** Vorteil ein konkretes Beispiel zur **Energieverbrauchsüberwachung**.
>
> **SS25:** Geben Sie Beispiele zur **Temperatur- und/oder Drucküberwachung**.

### Antwort

**Vorteil 1: Verbesserte Echtzeitverarbeitung (geringere Latenz)**
- Daten werden lokal am Edge-Gerät verarbeitet, kein Umweg über die Cloud
- Reaktionszeiten von Millisekunden statt Sekunden

*Beispiel Temperaturüberwachung (SoSe24):*
Bei Überschreiten eines kritischen Temperatur-Grenzwerts kann die Maschine sofort vor Ort abgeschaltet werden, ohne auf eine Antwort aus der Cloud zu warten.

*Beispiel Drucküberwachung (SS25):*
Steigt der Druck auf einen gefährlichen Wert, kann die Maschine in Echtzeit gestoppt werden — ohne Cloud-Roundtrip wären teure Schäden vermeidbar.

**Vorteil 2: Vermeidung von Sicherheitsrisiken / Datenschutz**
- Sensible Daten verlassen das Unternehmensnetzwerk nicht (oder nur aggregiert)
- Übertragungsrisiken (Abhören, Man-in-the-Middle) werden reduziert

*Beispiel Energieverbrauchsüberwachung (SoSe24):*
Da Energieverbrauchsdaten Rückschlüsse auf die Produktionsauslastung zulassen (Betriebsgeheimnis), werden sie lokal verarbeitet statt vollständig in die Cloud übertragen — das senkt das Risiko, dass sensible Daten abgefangen werden.

### Kontext & Häufige Fehler

**Was hat der Student falsch gemacht (1.25/2 für beide Teile):**
- Vorteil 1 genannt aber **kein konkretes Beispiel mit Bezug zur Temperaturüberwachung** → Punktabzug!
- Vorteil 2 genannt aber **kein konkretes Einsatzbeispiel** → Punktabzug!
- Der Professor will immer: Vorteil benennen + **konkretes Beispiel aus dem Unternehmenskontext**!

**SS25-Student bekam 3/3 — was er richtig machte:**
- Nannte konkretes Beispiel mit Drucküberwachung und Echtzeitreaktion
- Nannte Kostensenkung durch reduziertes Datenvolumen als zweiten Vorteil mit Temperatursensor-Bezug

---

## Aufgabe 6: Industrie 4.0 + Logistik 4.0

> **Klausurfrage (SoSe24 + SS25 nahezu identisch, nur Unternehmenskontext wechselt):**
>
> Die Produktion erfolgt über eine zentrale Produktionsplanung in mehreren Prozessschritten an 3 verschiedenen Arbeitsstationen mit Pufferlägern aus einem Vorratslager. Der innerbetriebliche Transport erfolgt mit Gabelstaplern und Hubwagen.
>
> **Teil a) Industrie 4.0:**
> Zeigen Sie in kurzen Stichworten eine mögliche Verbesserung der beschriebenen **Produktionsprozesse** durch eine Industrie 4.0 Lösung auf und beschreiben Sie dabei auch die potenziellen Veränderungen gegenüber der jetzigen Situation.
> *(Orientierung an Anwendungsbeispielen Industrie 4.0 im Lehrveranstaltungsskript)*
>
> **Teil b) Logistik 4.0:**
> Zeigen Sie eine mögliche Verbesserung der beschriebenen innerbetrieblichen **Transportprozesse** durch eine Logistik 4.0 Lösung auf und beschreiben Sie die Veränderungen gegenüber der jetzigen Situation.

### Antwort

**Teil a) Industrie 4.0 — Produktionsprozesse:**

**Beispiel 1: Sensorbasierte, dezentrale Pufferlager-Steuerung (E-Kanban)**
- Jetzt: Zentrale Produktionsplanung entscheidet, wann Pufferlager beliefert wird
- I4.0: Pufferläger erfassen Bestand selbst per Sensor/RFID, lösen bei Unterschreiten eines Schwellenwerts automatisch Nachbestellung aus
- Veränderung: Dezentrale Selbststeuerung statt zentraler Disposition; bedarfsgesteuert statt planbasiert

**Beispiel 2: Cloud-basierte Integration der Arbeitsstationen**
- Jetzt: Informationen über Produktionsstand manuell oder mit Verzögerung
- I4.0: Alle Arbeitsstationen, Pufferlager und Vorratslager tauschen Daten in Echtzeit über Cloud-Plattform aus
- Veränderung: Transparente, datengetriebene Produktionsplanung; Engpässe werden sofort erkannt

**Teil b) Logistik 4.0 — Transportprozesse:**

**Fahrerlose Transportsysteme (FTS / AGV — Autonomous Guided Vehicles)**
- Jetzt: Manuell gesteuerte Gabelstapler/Hubwagen für Transport zwischen Vorratslager, Pufferlägern und Auslieferung
- Logistik 4.0: FTS erkennen Bedarf (z.B. über Sensorik/RFID am Pufferlager) und fahren autonom, vernetzt untereinander abgestimmte Routen
- Veränderung: Autonom statt personengesteuert; dynamische Routenplanung statt fester Fahrwege; 24/7-Verfügbarkeit statt schichtabhängig

### Kontext & Häufige Fehler

**Was hat der Student in SoSe24 falsch gemacht (0.75/1.5 für Industrie 4.0):**
- „Industrie 4.0 Bezug unzureichend" → zu allgemein geblieben, kein konkretes I4.0-Konzept (E-Kanban, FTS, etc.) genannt
- „Veränderung gegenüber jetziger Situation nicht aufgezeigt" → Muss immer: Jetzt-Zustand + Zukunft + konkrete Veränderung!

**Aufbau der Antwort IMMER:**
1. Konkretes I4.0/Logistik 4.0-Konzept nennen (FTS, E-Kanban, Cloud-Integration, Digital Twin...)
2. Jetzt-Situation beschreiben
3. Mit I4.0/Logistik 4.0 Lösung beschreiben
4. Konkrete Veränderung benennen

---

## Aufgabe 7: Middleware + EDI-Komponenten + EDIFACT-Nachrichtentypen

> **Klausurfrage (SoSe24 + SS25 identisch):**
>
> Zur Auslieferung kooperiert das Unternehmen mit einem Transportdienstleister, dessen Beauftragung telefonisch erfolgt. Dieser Medienbruch soll durch eine EDI-Integrationslösung beseitigt werden. Hierzu soll ein neues Middleware-System eingesetzt werden.
>
> **Teil a) Middleware-Modell:**
> Welches Modell der „kommunikationsorientierten Middleware" und welcher Kommunikationsmodus sollten gewählt werden, wenn die Integrationslösung eine größtmögliche Unabhängigkeit von der Verfügbarkeit des Anwendungssystems des Transportdienstleisters bieten soll? Begründen Sie Ihre Entscheidung, indem Sie das gewählte Modell stichpunktartig erläutern.
>
> **Teil b) EDI-Komponenten:**
> Welche drei „EDI-Komponenten" werden hierfür benötigt?
>
> **Teil c) EDIFACT-Nachrichtentypen:**
> Welche EDIFACT-Nachrichtentypen sollten eingesetzt werden für:
> 1. Die Buchung bzw. Reservierung von Transportkapazität
> 2. Die Erteilung von Transportaufträgen
> 3. Instruktionen zum Umschlag und Transport der Güter
> 4. Das Versenden von Transportstatusmeldungen

### Antwort

**Teil a) Middleware-Modell:**

**Gewähltes Modell: Nachrichtenorientiertes Modell mit asynchronem Kommunikationsmodus und Warteschlangen (Message Queues)**

Erläuterung:
- Kommunikation läuft über eine Warteschlange
- Sender schreibt Nachricht in die Queue und macht sofort weiter
- Empfänger liest die Nachricht ab, wann immer sein System bereit ist
- → **Zeitliche Entkopplung**: Beide Systeme müssen nie gleichzeitig verfügbar sein

Begründung: Da so keine gleichzeitige Verfügbarkeit beider Systeme erforderlich ist, erreicht man die geforderte **Unabhängigkeit von der Verfügbarkeit des Transportdienstleister-Systems**.

**Teil b) EDI-Komponenten (NICHT die Standards!):**

| Komponente                          | Funktion                                                                             |
| ----------------------------------- | ------------------------------------------------------------------------------------ |
| **Inhouse-Anwendungssystem** (z.B. ERP) | Datenquelle; liefert die internen Daten (z.B. Transportauftrag) |
| **Konverter**                           | Wandelt interne Daten in das standardisierte EDI-Format um (inkl. Mapping) und umgekehrt |
| **Kommunikationsmodul / Konnektor**     | Übernimmt die technische Datenübertragung zum Geschäftspartner |

**Teil c) EDIFACT-Nachrichtentypen:**

| Prozessschritt                                     | EDIFACT-Typ |
| -------------------------------------------------- | ----------- |
| Buchung / Reservierung von Transportkapazität      | **IFTMBF**  |
| Erteilung von Transportaufträgen                   | **IFTMIN**  |
| Instruktionen zum Umschlag und Transport der Güter | **HANMOV**  |
| Versenden von Transportstatusmeldungen             | **IFTSTA**  |

### Kontext & Häufige Fehler

**Was hat der Student falsch gemacht (0.25/1.5 für EDI-Komponenten!):**
- Nannte `ebXML`, `ANSI ASC X12`, `SWIFT` → das sind **Nachrichtenstandards/Standardisierungsorganisationen**, KEINE EDI-Komponenten!
- Kommentar des Professors: „Keine EDI Komponenten, sondern Nachrichtentypen bzw. Standardisierungsorganisationen"

**Merkhilfe EDI-Komponenten: I-K-K**
- **I**nhouse-Anwendungssystem (ERP) → Datenquelle
- **K**onverter → Format umwandeln (inkl. Mapping)
- **K**ommunikationsmodul / Konnektor → Übertragung zum Partner

> ⚠️ Mapping ist KEINE eigene Komponente — es ist Teil des Konverters!

**Middleware-Modell Vergleich:**#

| Merkmal | Synchron (z.B. RPC) | Asynchron (MOM mit Queue) |
|---|---|---|
| Kopplung | Eng (beide gleichzeitig nötig) | Lose (zeitliche Entkopplung) |
| Analogie | Telefon | E-Mail / Brief |
| Wann nutzen? | Sofortige Antwort nötig | Unabhängigkeit von Verfügbarkeit nötig |

---

## Aufgabe 8: IoT Bestimmungsfaktoren (NUR SS25!)

> **Klausurfrage (nur SS25, in SoSe24 nicht vorhanden):**
>
> Für die Zukunft plant die Airflow SE den unternehmensweiten Aufbau eines Internets der Dinge.
>
> Ordnen Sie den Bestimmungsfaktoren des Internets der Dinge jeweils zwei passende Beispiele (technologisches Verfahren, Standard oder Norm) für die konkrete Umsetzung zu.

### Antwort

*(OCR konnte die genauen Antwortoptionen aus den Bildern nicht vollständig lesen — basiert auf Folienwissen)*

**Die 6 Bestimmungsfaktoren des IoT und typische Beispiele:**

| Bestimmungsfaktor | Beispiel 1 | Beispiel 2 |
|---|---|---|
| **Identifikation** | RFID | NFC / Barcode / QR-Code |
| **Lokalisierung** | GPS | WLAN-Ortung / iBeacon (Bluetooth) |
| **Kommunikation** | MQTT | LoRaWAN / ZigBee / NB-IoT |
| **Sensorik / Aktorik** | Temperatursensor | Schaltaktor / Ventil |
| **Eingebettete Intelligenz** | Smart Sensor / Mikrocontroller | Edge-Computing-Gerät |
| **Miniaturisierung** | MEMS-Sensoren | System-on-Chip (SoC) |

### Kontext

**IoT Bestimmungsfaktoren nach Folie 12ff.:** Das Zusammenspiel dieser Faktoren ermöglicht das IoT. Jeder Faktor hat konkrete Technologien die als Beispiele genannt werden können.

**Tipp:** Immer zwei Beispiele pro Faktor nennen, die im Kurs behandelt wurden. RFID + GPS sind die sichersten Starter, dann MQTT/LoRaWAN für Kommunikation.

---

## Schnell-Checkliste für die Klausur

- [x] **Aufgabe 1a:** idShort in `UpperCamelCase` — `ManufacturerName`, `ManufacturerTypId` oder `ManufacturerTypName`, `AssetId`, `InstanceId`
- [x] **Aufgabe 1b:** Condition Monitoring Merkmale IMMER mit Einheit (°C, bar, kW) oder Strich (-)
- [x] **Aufgabe 2 RAMI:** Kommunikationsmodul → **Integration** (NICHT Communication!)
- [x] **Aufgabe 2 IIRA:** Kommunikationsmodul → **Information Flows (Pfeile)** (keine Domäne!)
- [x] **Aufgabe 2 IIRA:** Modbus Master/Slaves → **Control / Application**
- [ ] **Aufgabe 3a OPC-UA:** Genau 4: Semantisches Datenmodell + Datenaustausch vertikal + Industrieakzeptanz + Sicherheit
- [ ] **Aufgabe 3b MQTT:** Modbus-Master → MQTT-Client (Publisher), Modbus-Slave → MQTT-Client (Publisher), NEU: MQTT-Broker
- [ ] **Aufgabe 3b Topics:** M1 muss im Topic enthalten sein! `Machinery/M1/ConditionMonitoring/Temperature`
- [ ] **Aufgabe 3b QoS:** Sekundentakt + Verluste tolerierbar → **0** | Stündlich + vollständige Historie → **1**
- [ ] **Aufgabe 4a:** Lesbarkeit und Validitätsprüfung → **BEIDE** Formate (Mehrfachzuordnung!)
- [ ] **Aufgabe 4b XML:** CCType-Suffixe: `Identifier`, `DateTime`, `Code`, `Measure unitCode="CEL"`
- [ ] **Aufgabe 4b XML:** Nur 2 Hierarchieebenen! Root = `<ConditionMonitoring>`
- [ ] **Aufgabe 5:** Vorteil benennen + KONKRETES Beispiel aus dem Unternehmenskontext!
- [ ] **Aufgabe 6:** Immer: Jetzt-Situation + I4.0-Lösung + konkrete Veränderung
- [ ] **Aufgabe 7a:** Nachrichtenorientiertes Modell + asynchron + Warteschlange → zeitliche Entkopplung
- [ ] **Aufgabe 7b:** Inhouse-Anwendungssystem + Konverter + Kommunikationsmodul/Konnektor (NICHT ebXML/ANSI/SWIFT! Mapping ≠ eigene Komponente!)
- [ ] **Aufgabe 7c:** IFTMBF=Buchung | IFTMIN=Transportauftrag | HANMOV=Umschlag | DESADV=Status

---

## Punkteübersicht & Klausurstruktur

| Aufgabe | Thema | SoSe24 | SS25 |
|---|---|---|---|
| 1 | Verwaltungsschale (Asset ID + Condition Monitoring) | 4 Pkt. | 4 Pkt. |
| 2 | RAMI 4.0 + IIRA | 3 Pkt. | 3 Pkt. |
| 3 | OPC-UA + MQTT | 5 Pkt. | 5–6 Pkt. |
| 4 | XML/JSON + XML-Nachricht + RDF | 6 Pkt. | 7–8 Pkt. |
| 5 | Edge Computing | 4 Pkt. | 3 Pkt. |
| 6 | Industrie 4.0 + Logistik 4.0 | 3 Pkt. | 4 Pkt. |
| 7 | Middleware + EDI + EDIFACT | 5 Pkt. | 5 Pkt. |
| 8 | IoT Bestimmungsfaktoren | — | 3 Pkt. |
| **Gesamt** | | **30 Pkt.** | **~35 Pkt.** |
