# Probeklausur 1 – MW220 Internet of Things (Anwendung)

**Dauer:** 60 Minuten | **Punkte:** 30 | **Hilfsmittel:** Foliensätze 1–3 + alle Skripte
**Format:** angelehnt an die Altklausur 2024-06-27 (durchgehendes Fallbeispiel, Fokus Anwendung & Nachrichtendesign)

---

## Fallbeispiel

Die **AquaPur GmbH** betreibt eine Abfüllanlage für Mineralwasser. In der Produktion kommen mehrere **Abfüllmaschinen** zum Einsatz, die Flaschen befüllen, verschließen und etikettieren. Zur Produktionssteuerung und zur **Zustandsüberwachung (Condition Monitoring)** der Maschinen soll eine durchgängige IoT-Lösung aufgebaut werden.

Im Rahmen einer Digitalisierungsinitiative soll für jede Abfüllmaschine ein **"Digitaler Zwilling"** in Anlehnung an die **Verwaltungsschale der Industrie 4.0** entwickelt werden. Betrachtet wird nur die **Produktivphase** der Maschine. Es soll eine Beschränkung auf das generische Teilmodell **"Asset Identification"** sowie auf ein freies Teilmodell **"Condition Monitoring"** erfolgen.

Aktuell wird zur Maschinenkommunikation die proprietäre Middleware **"AquaLink"** mit dem Feldbusprotokoll **Modbus** eingesetzt. Der Modbus-Master in der zentralen Komponente ruft Daten von den Modbus-Slaves in den Maschinen ab.

---

## Aufgabe 1 – Verwaltungsschale / Digitaler Zwilling (6 Punkte)

**a)** Spezifizieren Sie für das generische Teilmodell **„Asset Identification"** die benötigten **typ- und instanzbezogenen Identifikationsmerkmale**, um die Abfüllmaschinen in Bezug auf den **Hersteller** und die **herstellerseitige Produktnummer** sowie mit einer **global eindeutigen Identifikation** und einer zusätzlichen **Seriennummer** beschreiben zu können. Verwenden Sie Namen im **UpperCamelCase**-Format (englisch). *(3 Punkte)*

- Hersteller: ________________________
- Produktnummer / -bezeichnung: ________________________
- Global eindeutige Nummer der Maschine: ________________________
- Seriennummer der Maschine: ________________________

**b)** Spezifizieren Sie für eine Realisierung des freien Teilmodells **„Condition Monitoring"** vier geeignete **Merkmale** (inkl. Einheiten, sofern relevant), um den aktuellen Zustand der Abfüllmaschinen sowie den Bezug zum aktuell ausgeführten **Fertigungsauftrag** überwachen zu können. Vergeben Sie eigene englische Namen im UpperCamelCase-Format. *(3 Punkte)*

- ________________________
- ________________________
- ________________________
- ________________________

---

## Aufgabe 2 – Referenzarchitekturen (4,5 Punkte)

Die geplante Integrationsarchitektur besteht aus folgenden Komponenten:
*Maschinen mit Sensoren · Kommunikationsmodul · Datenmodell des Maschinenparks · Anwendung für Zustandsüberwachung · Modbus Master und Slaves · Betriebliche Produktionsplanung und -steuerung*

**a)** Ordnen Sie diese Komponenten den passenden **Schichten (Layers) des RAMI 4.0** zu. *(2,5 Punkte)*

| RAMI 4.0 Layer | Komponente |
|----------------|------------|
| Business | |
| Functional | |
| Information | |
| Communication | |
| Integration | |
| Asset | |

**b)** Ordnen Sie dieselben Komponenten den passenden **Domänen der IIRA** (Functional Domains & Physical Systems sowie Information Flows) zu. *(2 Punkte)*

| IIRA Domäne | Komponente |
|-------------|------------|
| Business | |
| Control / Application | |
| Information | |
| Operations | |
| Physical Systems | |
| Information Flows (Pfeile) | |

---

## Aufgabe 3 – OPC-UA & MQTT (7 Punkte)

Da die proprietäre Middleware „AquaLink" veraltet ist, soll sie durch eine moderne Lösung ersetzt werden. Zur Auswahl stehen **OPC-UA** und **MQTT**.

**a)** Markieren Sie **vier** Aspekte, die für **OPC-UA** als Ersatz der proprietären Middleware sprechen. *(1 Punkt)*

- [ ] Beinhaltet ein semantisches Datenmodell
- [ ] Speziell konzipiert für ressourcenbeschränkte Geräte
- [ ] Ermöglicht Datenaustausch zwischen allen Unternehmensebenen
- [ ] Unterstützt Chat-Funktionen wie P2P- und Mehrbenutzerkonferenzen
- [ ] Herstellerspezifischer, proprietärer Standard
- [ ] Durchgängiges Sicherheits- und Authentifizierungskonzept

**b)** Beim Wechsel auf **MQTT**: Welche Komponenten ersetzen die bisherigen Modbus-Komponenten, und in welcher Kommunikationsrolle? *(1,5 Punkte)*

- Modbus-Master wird ersetzt durch: __________ in der Rolle __________
- Modbus-Slave wird ersetzt durch: __________ in der Rolle __________

**c)** Definieren Sie für die Kommunikation passende **Topics** mit Bezug zu „Condition Monitoring", die eine separate Subskription von aktueller **Temperatur** und aktuellem **Füllstand (FillLevel)** pro Maschine ermöglichen. Die Maschinen sind Teil eines Maschinenparks (`Machinery`). *(1,5 Punkte)*

- Topic 1: ________________________
- Topic 2: ________________________

**d)** Geben Sie die Topics (inkl. Wildcards) an für: *(1,5 Punkte)*

- alle Nachrichten aller Maschinen: ________________________
- alle Zustandsnachrichten aller Maschinen: ________________________
- nur die füllstandsbezogenen Zustandsnachrichten aller Maschinen: ________________________

**e)** Welches **Protokollfeature** ermöglicht einem neu hinzukommenden Client den direkten Abruf des letzten Maschinenzustands, ohne auf eine neue Nachricht zu warten? Welcher **QoS-Level** ist sinnvoll, wenn Sensornachrichten im Sekundentakt gesendet werden und die Netzbelastung minimal sein soll? *(1 Punkt)*

---

## Aufgabe 4 – Datenformate & semantische Interoperabilität (6,5 Punkte)

**a)** Ordnen Sie die folgenden Eigenschaften den Datenformaten **XML** und **JSON** zu (Mehrfachnennungen möglich): *(2 Punkte)*
*„gute" Lesbarkeit für Mensch und Maschine · anfällig für Sicherheitslücken · Overhead aufgrund von Redundanz · Validitätsprüfung mit Hilfe von Schemata möglich · Möglichkeit der Definition komplexer Elemente mit Attributen · „kompakter" Aufbau mit nur sehr geringem Overhead*

**b)** Definieren Sie mit **XML** eine Nachrichtenstruktur **„ConditionMonitoring"** zur Übermittlung der aktuellen **Temperatur** einer Abfüllmaschine. Anforderungen: *(3 Punkte)*
- Bezug zur Maschine (MachineID) und zum aktuell bearbeiteten Fertigungsauftrag (ProductionID)
- ein Zeitstempel im **UTC-Format**
- die Maßeinheit der Temperatur **als Attribut**
- die Namensgebung soll die **ebXML Core Component Types** berücksichtigen
- max. zwei Hierarchieebenen, erste Ebene = „ConditionMonitoring"

**c)** Formulieren Sie eine **RDF-Elementaussage** (Subjekt – Prädikat – Objekt), die den Zusammenhang zwischen der **Maschine** und dem **Fertigungsauftrag** beschreibt. *(1,5 Punkte)*

| Subjekt | Prädikat | Objekt |
|---------|----------|--------|
| | | |

---

## Aufgabe 5 – Edge Computing (3 Punkte)

Die bisherige Cloud-basierte Zustandsüberwachung soll durch eine **Edge-Computing-Lösung** ersetzt werden. Nennen Sie **zwei Vorteile** des dezentralen Edge-Ansatzes gegenüber einer zentralen Cloud-Lösung und geben Sie jeweils ein **konkretes Einsatzbeispiel** in Bezug auf die Abfüllmaschinen an.

---

## Aufgabe 6 – Kommunikationsorientierte Middleware & EDI (3 Punkte)

Für die Auslieferung kooperiert AquaPur mit einem Transportdienstleister. Der bisher telefonische Medienbruch soll durch eine Integrationslösung mit elektronischem Datenaustausch (**EDI**) beseitigt werden.

**a)** Welches **Modell der kommunikationsorientierten Middleware** und welcher **Kommunikationsmodus** sollten gewählt werden, wenn die Lösung eine größtmögliche **Unabhängigkeit von der Verfügbarkeit** des Anwendungssystems des Transportdienstleisters bieten soll? Begründen Sie kurz. *(1,5 Punkte)*

**b)** Welche **EDIFACT-Nachrichtentypen** sollten für folgende Prozessschritte eingesetzt werden? *(1,5 Punkte)*
1. Buchung / Reservierung von Transportkapazität: __________
2. Erteilung von Transportaufträgen: __________
3. Versenden von Transportstatusmeldungen: __________

---
---

# LÖSUNGEN – Probeklausur 1

## Aufgabe 1
**a)**
- Hersteller: **ManufacturerName**
- Produktnummer / -bezeichnung: **ManufacturerTypName** (bzw. ManufacturerTypId für die Nummer)
- Global eindeutige Nummer: **AssetId**
- Seriennummer: **InstanceId**

**b)** (englisch, UpperCamelCase, z. B.)
- **Temperature** (Einheit CEL)
- **FillLevel** (Einheit z. B. PERCENT / Liter)
- **EnergyConsumption** (Einheit z. B. kWh)
- **ProductionOrderId** (Bezug zum Fertigungsauftrag)
*(weitere möglich: RotationSpeed, Pressure, Runtime, ProductionStatus)*

## Aufgabe 2
**a) RAMI 4.0:**
- Business → Betriebliche Produktionsplanung und -steuerung
- Functional → Anwendung für Zustandsüberwachung
- Information → Datenmodell des Maschinenparks
- Communication → Kommunikationsmodul
- Integration → Modbus Master und Slaves
- Asset → Maschinen mit Sensoren

**b) IIRA:**
- Business → Betriebliche Produktionsplanung und -steuerung
- Control / Application → Modbus Master und Slaves
- Information → Datenmodell des Maschinenparks
- Operations → Anwendung für Zustandsüberwachung
- Physical Systems → Maschinen mit Sensoren
- Information Flows (Pfeile) → Kommunikationsmodul

## Aufgabe 3
**a)** Korrekt sind: Beinhaltet semantisches Datenmodell · Ermöglicht Datenaustausch zwischen allen Unternehmensebenen · Industrieakzeptanz und relativ große Verbreitung · Durchgängiges Sicherheits- und Authentifizierungskonzept.
*(„Speziell für ressourcenbeschränkte Geräte" = MQTT; „Chat-Funktionen", „proprietär", „mit allen IIRA-Dimensionen vereinbar" sind falsch.)*

**b)**
- Modbus-Master → **MQTT-Broker** in der Rolle **Publisher** (zentrale Verteilung; je nach Sicht auch Vermittler)
- Modbus-Slave → **MQTT-Client** in der Rolle **Subscriber** (bzw. Publisher beim Senden von Sensordaten)
*(zusätzlich benötigte Komponente: Analytics)*

**c)**
- `Machinery/ConditionMonitoring/Temperature`
- `Machinery/ConditionMonitoring/FillLevel`

**d)**
- alle Nachrichten aller Maschinen: `Machinery/#`
- alle Zustandsnachrichten aller Maschinen: `Machinery/ConditionMonitoring` (bzw. `Machinery/+/...` je nach Struktur)
- nur Füllstand aller Maschinen: `Machinery/+/FillLevel`

**e)** **Retained Message** (letzter Wert wird beim Broker gehalten). QoS: **QoS 0** (höchstens einmal, geringste Netzbelastung).

## Aufgabe 4
**a)**
- **XML:** gute Lesbarkeit · anfällig für Sicherheitslücken · Overhead durch Redundanz · Validitätsprüfung per Schema · komplexe Elemente mit Attributen
- **JSON:** gute Lesbarkeit · kompakter Aufbau mit geringem Overhead *(anfällig für Sicherheitslücken kann auch JSON zugeordnet werden)*

**b)** Beispiel:
```xml
<ConditionMonitoring>
    <MachineID>XY</MachineID>
    <ProductionID>1234</ProductionID>
    <DateTime>2026-04-08T18:30:00Z</DateTime>
    <SensorTypeCode>Temperature</SensorTypeCode>
    <Measure>
        <MeasureContent unitCode="CEL">21</MeasureContent>
    </Measure>
</ConditionMonitoring>
```
*(Wichtig: Suffixe nach ebXML CCTypes: …ID, …Code, …Content; Einheit als Attribut `unitCode`; UTC-Zeit mit „Z"; nur zwei Hierarchieebenen.)*

**c)** RDF-Tripel z. B.:

| Subjekt | Prädikat | Objekt |
|---------|----------|--------|
| Maschine (MachineID XY) | bearbeitet Fertigungsauftrag | 1234 |

## Aufgabe 5
Zwei Vorteile + Beispiele, z. B.:
1. **Geringere Latenz / Echtzeitverarbeitung** → Temperaturüberwachung: bei Überhitzung kann die Maschine ohne Cloud-Umweg sofort gestoppt/geregelt werden.
2. **Reduzierte Übertragungskosten / geringere Netzbelastung** → Füllstands-/Energiedaten werden lokal vorgefiltert/aggregiert, nur relevante Werte gehen in die Cloud.
*(weitere: höhere Datensicherheit, Verfügbarkeit bei Netzausfall)*

## Aufgabe 6
**a)** **Nachrichtenorientiertes Modell** mit **asynchronem Kommunikationsmodus** und **Warteschlange (Message Queue)** → Sender und Empfänger müssen nicht gleichzeitig verfügbar sein (maximale Entkopplung). Beispiel: Message-oriented Middleware / IBM MQ.

**b)**
1. Buchung/Reservierung Transportkapazität: **IFTMBF**
2. Erteilung Transportaufträge: **IFTMIN**
3. Transportstatusmeldungen: **IFTSTA**
