## MW220 Internet of Things (loT) Technologien und Anwendungen Teil 2

<!-- image-->

<!-- image-->

Master Wirtschaftsinformatik (DataCon)

Sommersemester 2026

Prof. Dr. Frank Thomé

<!-- image-->

<!-- image-->

## 2 loT Technologien

## 2.1 Sensoren und Aktoren

2.2 ldentifikations- und Lokalisierungstechnologien

2.3Kommunikationsprotokolle

2.4 Interoperabilität

2.5 Middleware und loT Plattformen

<!-- image-->

Messfuhler zur qualitativen oder quantitativen Detektion einer physikalischen Groβe oder chemischen Eigenschaft

Umwandlung der physikalischen Groβen oder chemischen Eigenschaften in elektrische Signale

durch Einsatz induktiver,piezoelektrischer,magnetischer,feldstarkegesteuerter oder photoelektrischer Wandler

- auch Detektor, Aufnehmer oder Fuhler genannt

## Unterscheidung in:

mechanische Sensoren, z.B. Position, Annäherung, Kraft

- nicht-mechanische Sensoren, z.B. Temperatur, Licht, Magnetfeld

## Netzwerkintegration über:

direkte Anbindung drahtgebunden oder über Funktechnologie

indirekte Anbindung durch ubergeordnete Komponente (z.B. Maschine), z.T. auch mit Mikrocomputer und eigener Signalverarbeitungslogik (,Smart Sensor")

<!-- image-->  
Tur- /Fensterkontakt  
Fotoresistor

<!-- image-->

<!-- image-->  
Bewegungsmelder

<!-- image-->  
Sensor Tag

<!-- image-->  
Gassensor

<!-- image-->  
MEMS-Sensor

<!-- image-->

<!-- image-->  
Temperatursensoren  
www.hwg-lu.de

Low Power Sensor Tag mit 10 Sensoren

u.a.fur Heligkeit, Feuchtigkeit, Temperatur und Beschleunigung,

bietet Cloud-Konnektivitat und unterstutzt funkbasierte Anbindungen - u.a. über Bluetooth und ZigBee

□ Gerätearchitektur:

<!-- image-->

<!-- image-->  
Quelle: Texas Instruments Inc.: Multi-Standard CC2650 SensorTag Design Guide (2015).

## Beispiel: Elsys ERS CO2 LoRaWAN

## LPWAN Sensor Tag mit 5 Sensoren

speziell ausgerichtet auf Uberwachung von Innenräumen, insbesondere Raumklima und Bewegung

Sensoren fur Messung von CO2 Gehalt (ppm), Temperatur (Grad Celsius), Lichtstärke (Lux), Luftfeuchtigkeit (%) sowie Bewegungen (passive Infrarotkamera)

- Batterielaufzeit bis 10 Jahre

Konfiguration über Near Field Communication (NFC)

<!-- image-->  
LORaWAN"

<!-- image-->

## Antriebselement, das physikalische Eingangsgroβe (z.B.elektrische Spannung) in mechanische Bewegung oder andere physikalische Ausgangsgroβe umwandelt

Gegenstuck zum Sensor in der Mess-, Steuer- und Regelungstechnik (MSR)

- bildet Stellglied in einer Steuer- oder Regelstrecke, z.B.:

. Ein- oder Ausschalten einer Lichtquelle

. Offnen oder Schlieβen eines Ventils

. Beschleunigen oder Bremsen eines Fahrzeugs

auch Aktuator oder Antriebselement

## Aktion des Aktors wird als Aktorik bezeichnet

: Einsatz V.a. in Antriebs-, Regelungs- und Automatisierungstechnik

- In der Robotik auch als Effektorik bezeichnet

. Ergreifen und Bearbeiten von Gegenständen

<!-- image-->

## Funk-Schaltaktoren (Unterputz)

Funk-Schaltaktor (Steckdose)

<!-- image-->

<!-- image-->  
Philips Hue Lichtsteuerung

<!-- image-->

<!-- image-->  
Heizstellregler  
Funkschaltaktor (Hutschiene)

<!-- image-->

<!-- image-->  
Industrie-Digitalsteuerung

Vorgang in einem System, bei dem eine oder mehrere Eingangsgroβen andere Groβen als Ausgangs- bzw. Steuergroβen aufgrund der dem System eigentumlichen Gesetzmaβigkeiten beeinflussen (DIN IEC 60050-351)

Offener Wirkablauf in sogenannter Steuerkette

· d.h. keine Messung der Steuergroβe und keine Ruckwirkung auf die Stellgröβe

- evtl. Storungen werden nicht berücksichtigt

<!-- image-->

y(t): Steuergroβe (Ausgangsgroβe der zu steuernden Strecke)

Z(t): Störgroöβe (von aulBen auf die Steuerstrecke einwirkende Groβe)

Vorgang in einem System,bei dem fortlaufend eine variable Groβe,die Regelgroβe erfasst, mit einer anderen variablen Groβe,der Fuhrungsgroβe, verglichen und im Sinne einer Angleichung an die Führungsgroβe beeinflusst wird (DIN IEC 60050-351)

Geschlossener Wirkablauf in sogenanntem Regelkreis

d.h. fortlaufende Erfassung der Regelgroβe und Anpassung an die Fuhrungsgröβe

Berücksichtigung auch groβerer Storungen moglich

<!-- image-->

w(t): Fuhrungsgroβe (von auβen vorgegeben)

u(t): Stellgroβe (Eingangsgroβe der zu regelnden Strecke)

y(t): Regelgröβe (Ausgangsgroβe der zu regelnden Strecke)

e(t): Regelabweichung (Differenz zwischen Sollwert w(t) und Istwert y(t))

z(t): Störgroβe (von auβen auf die Regelstrecke einwirkende Groβe)

## Sensor-Aktor-Systeme

Kabelgebundene und/oder kabellose Systeme (Netzwerke), bestehend aus:

einem oder mehreren Aktoren und Sensoren

- einer Messelektronik, die mit den Sensoren verbunden ist

einer Steuer- oder Regelungseinrichtung zum Empfang der Sensordaten über die Messelektronik und zur Beeinflussung der Aktoren

Beispiel: Prozess-Regelung mit einem Sensor (S) und einem Aktor (A)

<!-- image-->

e(t): Regelabweichung (Diferenz zwischen gewunschtem und tatsäachlichem Verhalten der Regelgröβe)

Z(t): StorgroBe (von auβen einwirkende GroBe, die Regelung beeinflusst)

1 Definieren Sie den Begriff,Sensor" und geben Sie zwei Beispiele fur Sensoren. (Folie 49 bis 52)

2. Definieren Sie den Begrif,Aktor" und geben Sie zwei Beispiele fur Aktoren. (Folie 53 und 54)

3. Erlautern Sie den Unterschied der Vorgänge,Steuerung" und,Regelung" in einem System und geben Sie jeweils ein praktisches Beispiel. (Folie 55 und 56)

4 Skizzieren Sie ein_,Sensor-Aktor-System" zur Prozessregelung mit einem Sensor und einem Aktor. Erläutern Sie die Bestandteile,aus denen sich ein solches System Zusammensetzt und geben Sie ein praktisches Beispiel. (Folie 57)

<!-- image-->

## 2 loT Technologien

2.1 Sensoren und Aktoren

2.2 Identifikations- und Lokalisierungstechnologien

2.3Kommunikationsprotokolle

2.4 Interoperabilität

2.5 Middleware und loT Plattformen

<!-- image-->

## Identifikation versus Lokalisierung

## Identifikation

Eindeutige Bestimmung von physischen Objektes oder Lebewesen (auch von abstrakten Begriffen)

Identifikatoren physischer Objekte meist Nummern oder Codes

Verknüpfung mit zugehorigen Information in Datenbank

Zum Einsatz kommende Technologien z.B. Barcode, RFID, NFC, biometrische Verfahren

## Lokalisierung

- im Allgemeinen: Ortsbestimmung in Bezug zu einem definierten Fixpunkt

- im Speziellen: Bestimmung des eigenen Standortes bzw. der Position eines entfernten Objektes

Zum Einsatz kommende Technologien z.B. GPS, Mobilfunk,WLAN, Bluetooth / iBeacon, RFID

## Komponenten eines RFID-Systems

RFID: Radio Frequency ldentification  
<!-- image-->

<!-- image-->

Unterschiedliche Antennengeometrien

<!-- image-->

<!-- image-->

<!-- image-->

<!-- image-->

Unterschiedliche Transpondergroβen und -materialien

<!-- image-->

<!-- image-->

<!-- image-->

www.hwg-lu.de

## RFID-Erfassungsgerate

## Stationäre Erfassungsgeräte

<!-- image-->  
Flieβband-Lesegerat (RFID Tunnel)

Mobile Erfassungsgeräte

<!-- image-->

<!-- image-->

<!-- image-->

<!-- image-->  
Torlesegerat (RFID Gate Reader)

<!-- image-->

Kartenlesegerat (RFID Card Reader)

## Unterscheidungsmerkmale von RFID-Systemen

## Hochschule für Wirtschaft und Gesellschaft Ludwigshafen

<!-- image-->  
Quelle: In Anlehnung an BSI: Risiken und Chancen des Einsatzes von RFID-Systemen (2004).

## Near Field Communication (NFC)

Funkbasierter Kommunikationsstandard auf Induktionsbasis zur kontaktlosen Datenübertragung über geringe Distanzen

Ursprunglich im Jahr 2002 spezifiziert von Sony und NXP Semiconductors

<!-- image-->

- NFC-Forum zur Standardisierung und Verbreitung der NFC Technologie

## Kombiniert RFID und Smart Card Technologie

Reichweite von nur wenigen Zentimetern

- Nutzt 13,56 MHz Frequenz

Geringe Ubertragungsraten von maximal 424 kbit/s

## Unterstuitzung von zwei Betriebsmodi:

Passiver Modus: Smart Card oder Smart Card Emulation zur Interaktion mit NFC / RFID Lesegeraten

: Aktiver Modus: P2P Kommunikation oder als Lese-/Schreibgerat zur Interaktion mit passiven RFID Transpondern

## Funkbasierter Kommunikationsstandard zur Sprach- und Datenubertragung über kurze Distanzen gemäβ IEEE 802.15.1

- Ursprünglich im Jahr 1994 von Ericsson spezifiziert

<!-- image-->

Bluetooth Special Interest Group (SIG) zur Entwicklung und Verbreitung der Bluetooth-Technologie

## Technische Merkmale:

- Nutzt lizenzfreien Frequenzbereich zwischen 2.402-2.480 GHz mit sog. Frequenzsprungverfahren zur robusteren Kommunikation

Verschiedene technische Klassen mit Reichweiten von 1 bis 100 m (zukunftig sogar 200 m)

Unterstutzt synchrone Kommunikation (SCO) fur Sprachubertragung und asynchrone Kommunikation (ACL) fur Datenübertragung

Datenubertragungsraten von 64 kbit/s bis 723,2 kbit/s in der ursprunglichen Spezifikation

Enhanced Data Rates über 2 Mbit/s moglich## Proprietäres Verfahren zur Lokalisierung in geschlossenen Räumen

- von Apple im Jahre 2013 eingefuhrt

- ab iOS Version 7 und Android Version 4.3 unterstutzt

## Technische Merkmale:

- Basiert auf Bluetooth Low Energy (BLE)

Geringer Stromverbrauch

Reichweite bis ca. 30 m

<!-- image-->

## Sender-Empfanger-Prinzip

Beacons senden gleichbleibende Signale mit UUID sowie Major an Minor Werten

Empfanger (z.B. Smartphone mit iBeacon App) identifiziert UUID und misst Signalstärke (= Entfernung zum iBeacon)

Benotigt 3 bzw. 4 Beacons zur exakten Positionsbestimmung im zwei- bzw. dreidimensionalen Raum

- Kann über Smartphone App nachgelagerte Funktionen anstolen

z.B. Schaltvorgänge, Informationsbereitstelung, Werbeeinblendungen

<!-- image-->

## Wiederholungsfragen zu Kapitel 2.2

1 Grenzen Sie die Begriffe,Identifikation" und,Lokalisierung" voneinander ab und geben Sie jeweils zwei Beispiele fur eine ldentifikations- und eine Lokalisationstechnologie. (Folie 60)

2 Nennen Sie vier wesentliche Komponenten_aus denen ein RFID System besteht und beschreiben Sie kurz deren Funktion. (Folie 61)

3. Erläutern Sie die beiden grundlegenden Betriebsmodi von Near Field Communication (NFC) und geben Sie jeweils ein konkretes Einsatzbeispiel. (Folie 65)

叉 Erläutern Sie das grundlegende Sender-Empfänger-Prinzip von iBeacons und nennen Sie zwei mogliche Einsatzbereiche dieser Technologie. (Folie 67 und dazugehoriges Video im OLAT-Kurs)

<!-- image-->

## 2 loT Technologien

2.1 Sensoren und Aktoren

2.2 Identifikations- und Lokalisierungstechnologien

2.3 Kommunikationsprotokolle

2.4 Interoperabilität

2.5 Middleware und loT Platformen

<!-- image-->

## Begriff Kommunikationsprotokoll

Vereinbarung bzw. Vorschrift nach der die Ubertragung von Daten zwischen Zwei oder mehreren Kommunikationssystemen erfolgt

Regeln,die Syntax, Semantik und Synchronisation der Kommunikation festlegen, z.B.:

Datenformat

- Ubertragungsart (parallel / seriell)

Synchronitat der Ubertragung (synchron /asynchron)

Richtung der Ubertragung (unidirektional / bidirektional)

Datenübertragungsraten

■ Unterstutzt verbindungstechnische Verfahren wie Paketierung, Routing und Fehlerkorrektur

Kann durch Hardware, Software oder eine Kombination von beiden implementiert werden

Zumeist aus Schichten aufgebaute Protokolstapel mit Aufgabenteilung (insb. bei Netzwerkprotokollen → OSi Referenzmodell)

## Kommunikationsprotokolle zur E-Mailund Dateiubertragung (1)

## X.400

Protokoll fur die E-Mail-Ubertragung auf Basis des OSl-Modells

- noch häufig im professionellen elektronischen Datenaustausch verwendet

FTAM (File Transfer and Access Management)

: Protokollfur die Dateiubertragung auf Basis des OSl-Modells

- Groβerer Funktionsumfang als rudimentare Dateitransferprotokolle wie FTP

Protokolle der Anwendungsschicht des TCP/IP-Modells, insb.:

Hypertext Transfer Protocol (HTTP) bzw. HTTP Secure (HTTPS)

File Transfer Protocol (FTP) bzw. Secure FTP (SFTP)

- Simple Mail Transfer Proctocol (SMTP)

- Internet Message Access Protocol (IMAP)

- Post Office Protocol, Version 3 (POP3)

## Kommunikationsprotokolle zur E-Mailund Dateiubertragung (2)

## OFTP (Odette File Transfer)

- Protokollfur die direkte Dateiubertragung zwischen zwei Kommunikationspartnern

Einsatz in der Automobilindustrie (Empfehlung des VDA)

## AS2 (Applicability Statement 2)

- Protokoll fur gesicherten und nachweisbaren Nachrichtentransport über das Internet auf Basis von HTTP bzw. HTTPS

Spezifiziert Verbindungsaufbau, Nachrichtenvalidierung, Nachrichtenversendung und Empfangsbestatigung

Verwendung von digitale Signaturen zur Uberprufung von Urheberschaft und Datenintegrität sowie zur Sicherstellung der Unwiderrufbarkeit der Nachrichtenubertragung

Verwendung von Verschlusselungsmethoden zur Gewährleistung der Datensicherheit (Vertraulichkeit) während der Nachrichtenübertragung

. SSL / TLS sowie Payload-Verschlusselung

Protokollvielfalt fur das ,Internet of Things"

<!-- image-->

<!-- image-->

<!-- image-->

<!-- image-->

Industrieautomation

<!-- image-->

## Kommunikationsprotokolle aus dem Bereich Industrieautomation (1)

Industrielle Kommunikationsstandards zur Verbindung von Sensoren und Aktoren mit Steuerungsgeräten und Leitrechnern

- zeichnen sich durch hohe Ausfallsicherheit und exakt vorhersagbares Zeitverhalten aus

Realisierung mit unterschiedlichen Topologien, wie z.B. Bus-, Ring- oder Sterntopologie

## Für jeweiliges Einsatzgebiet und /oder Branche optimiert

zumeist ursprünglich proprietäre Systeme, die durch Interessengruppen weiterentwickelt und standardisiert wurden

verschiedene Ausprägungen fur Maschinenbau, Automobilbau, Anlagenbau und Gebaudeautomation

## Gangige Feldbusse:

ProfiBus /ProfiNet

- Modbus

- CANopen

EtherCAT

www.hwg-lu.de

## Beispiel: Einsatz von Modbus an der Hochschule Ludwigshafen

Modbus Registeradressentabelle  
<!-- image-->  
Slave

<table><tr><td></td><td>TPID</td><td>Messpunkt</td><td></td><td colspan="2">Register Adresse</td><td></td><td colspan="2">Typ</td><td></td><td>Register</td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau</td><td>PO</td><td></td><td>41000</td><td></td><td></td><td>FLOAT</td><td>&lt;</td><td></td><td>2</td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau</td><td>TMPI</td><td></td><td>41002</td><td></td><td></td><td>FLOAT</td><td>v</td><td>2</td><td></td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau</td><td>TMPO</td><td></td><td>41004</td><td></td><td></td><td>FLOAT</td><td>v</td><td></td><td>2</td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau</td><td>VFA</td><td></td><td>41006</td><td></td><td></td><td>FLOAT</td><td>v</td><td></td><td>2</td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau</td><td>HQ</td><td></td><td>41008</td><td></td><td></td><td>FLOAT</td><td>√</td><td></td><td>2</td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau</td><td>w</td><td></td><td>41010</td><td></td><td></td><td>FLOAT</td><td>~</td><td></td><td>2</td></tr><tr><td></td><td>EZ_Vodafone</td><td>EE</td><td></td><td>41012</td><td></td><td></td><td>FLOAT</td><td>√</td><td></td><td>2</td></tr><tr><td></td><td>EZ_Vodafone</td><td>PO</td><td></td><td>41014</td><td></td><td></td><td>FLOAT</td><td>v</td><td></td><td>2</td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau2</td><td>PO</td><td></td><td>41016</td><td></td><td></td><td>FLOAT</td><td>&lt;</td><td></td><td>②</td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau2</td><td>TMPI</td><td></td><td>41064</td><td></td><td></td><td>FLOAT</td><td>v</td><td></td><td>2</td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau2</td><td>TMPO</td><td></td><td>41018</td><td></td><td></td><td>FLOAT</td><td>v</td><td></td><td>2</td></tr><tr><td></td><td> WMZ_Lueftungszentrale_Neubau2</td><td>VFA</td><td></td><td>41020</td><td></td><td></td><td>FLOAT</td><td>&lt;</td><td></td><td>②</td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau2</td><td>HQ</td><td></td><td>41022</td><td></td><td></td><td>FLOAT</td><td>&lt;</td><td></td><td>2</td></tr><tr><td></td><td>WMZ_Lueftungszentrale_Neubau2</td><td>w</td><td></td><td>41024</td><td></td><td></td><td>FLOAT</td><td>~</td><td></td><td>2</td></tr><tr><td></td><td>EZ_Photovotaic</td><td>EE</td><td></td><td>41026</td><td></td><td></td><td>FLOAT</td><td>√</td><td></td><td>2</td></tr><tr><td></td><td>EZ_Photovotaic</td><td>PO</td><td></td><td>41028</td><td></td><td></td><td>FLOAT</td><td>√</td><td></td><td>园</td></tr></table>

## Kommunikationsprotokolle aus dem Bereich Industrieautomation (2)

OPC-UA (Open Platform Communications - Unified Architecture)

M2M-Kommunikationsprotokoll, insbesondere im Rahmen von Industrie 4.0 Projekten

herstellerunabhängiger, offener Standard

<!-- image-->

unterstutzt Datenaustausch zwischen allen Ebenen eines Unternehmens sowie unternehmensubergreifend

:durchgängiges Sicherheits- und Authentifizierungskonzept

umfasst neben verschiedenen Transportschichten auch semantisches Datenmodell zur sinnhaften Abbildung von Informationen

. z.B. Modellierung eines Maschinenparks

verfugt über Mechanismen zur Speicherung und Bereitstellung historischer Daten, Zur Signalisierung von Ereignissen und zur Ausfuhrung von Funktionen

- lässt sich mit allen Dimensionen von RAMl 4.0 vereinen

<!-- image-->

## Beispiel: Maschinenzustands-Monitoring mit OPC UA (Simulation)

## Hochschule für Wirtschaft und Gesellschaft Ludwigshafen

<!-- image-->

<!-- image-->

## Kommunikationsprotokolle aus dem Bereich Informationstechnik (1)

XMPP (Extensible Messaging and Presence Protocol)

- auf XML-Standard aufbauendes offenes Kommunikationsprotokoll

- wird insbesondere fur Instant Messaging eingesetzt

<!-- image-->

: unterstutzt gängige ,,Chat-Programm" Funktionen wie z.B.:

P2P- und Mehrbenutzerkonferenzen

<!-- image-->

. Verbindung zu anderen Chat-Netzwerken

benotigt mindestens einen XMPP-Server

## DDS (Data Distribution Service)

offenes Kommunikationsprotokoll, spezifiziert von der Object Management Group (OMG)

<!-- image-->

- basiert auf datenzentrierter Kommunikation mit Publish/Subscribe Konzept und Quality of Service (QoS)

： unterstutzt Discovery von Publisher und Subscriber über zentralen Server oder über Multicast

## Kommunikationsprotokolle aus dem Bereich Informationstechnik (2)

## CoAP (Constrained Application Protocol)

leichtgewichtiges M2M-Kommunikationsprotokoll basierend auf REST (Representational State Transfer)

<!-- image-->

:2014 von der Internet Engineering Task Force (IETF) als Standard veroffentlicht

speziell konzipiert fur ressourcenbeschränkte Geräte sowie Netzwerke mit geringen Datenubertragungs- und hohen -verlustraten

- Request/Response Kommunikationsmodell mit Discovery und Multicast Unterstutzung

## MQTT (urspr. Message Queue Telemetry Transport)

<!-- image-->

- M2M-Kommunikationsprotokoll mit minimalem Protokoll-Overhead

: seit 2013 standardisiert über die Organization for the Advancement of Structured Information Standards (OASlS) als Protokol fur das Internet der Dinge

- basiert auf ereignisgesteuertem Push-Ansatz mit Publish/Subscribe Konzept und Quality of Service (QoS)

www.hwg-lu.de

## Grundprinzip:

Message Broker als zentraler Kommunikationsverteiler

- Nachrichtensendung durch Clients (Publisher) mit Topic und Nutzdaten

- Nachrichtenweiterleitung an Clients,die Topic abonniert haben (Subscriber)

- Moglichkeit der Nutzung von Single Level und Multi Level Wildcards, z.B.:

. Home/+/Temperature

Home/# oder Home/LivingRoom/#

<!-- image-->

## MQTT Protokollfeatures (1)

## Reservierte Ports

- 1883 fur unverschlusselte Verbindung

8883 fur sichere Verbindungen über SSL/TLS

- 443 über WebSockets

## Retained Message

- zuletzt gesendete Nachricht eines Topics wird im Broker hinterlegt

Clients,die Topic neu abonnieren, bekommen direkt hinterlegte Nachricht

- wichtiges Feature im loT Umfeld,um Sensordaten ohne Wartezeit zu erhalten

· Z.B. direkte Anzeige der (zuletzt ubertragenen) Temperaturdaten bei Aufruf eines Uls

## Last Will and Testament

,letzter Wille" eines Clients wird nach Abbruch der Verbindung durch Broker als Nachricht an alle registrierten Subscriber gesendet

- wichtiges Feature im loT Umfeld,um Ausfall von Komponenten Zu erkennen

· z.B.: Auslosen der Nachricht "Temperatursensor ist ofline" bei Ausfall des Sensors

## Quality of Service (QoS)

- QoS O (At most once): garantiert, dass Nachricht hochstens einmal ankommt

<!-- image-->

QoS 1 (At least once): garantiert, dass Nachricht mindestens einmal ankommt

<!-- image-->

QoS 2 (Exactly once): garantiert, dass keine Nachrichten verloren gehen und dass keine Duplikate entstehen

$$
\mathsf { P U B L 1 S H Q o S } = 2 , \mathsf { P a c k e t } | \mathsf { D } = 4 7 1 2
$$

PUBACK Packet ID = 4712

Sender

PUBREL Packet ID = 4712

Receiver

PUBCOMP Packet ID = 4712

www.hwg-lu.de

## Beispiel: Institutsraum-Monitoring mit openHAB und MQTT (E35)

<!-- image-->

<!-- image-->

## Kommunikationsprotokolle aus dem Bereich Gebäudeautomation (1)

## ZigBee

Spezifikation fur funkbasierte Kommunikation mit geringer Datenubertragung und kurzer Reichweite

<!-- image-->

baut auf Standard IEEE 802.15.4 fur Wireless Personal Area Networks (WPAN) auf

<!-- image-->

Entwicklung und Verbreitung der Technologie durch ZigBee-Alianz seit 2002

Einsatz v.a.in Gebäudeautomation,aber auch in Industrieautomation und im medizinischen Bereich

## Enocean

- Funkbasierter Kommunikationsstandard nach ISO/lEC 14543-3-10

<!-- image-->

Fokus auf Aktuatoren/Sensoren die Ihre Energie selbst erzeugen und damit batterielos arbeiten konnen (sog. Energy Harvesting)

<!-- image-->

Nutzung von Solar-, Piezo-, thermischer oder elektromagnetischer Energie

Entwicklung und Verbreitung der Technologie durch EnOcean-Alianz seit 2008

## Kommunikationsprotokolle aus dem Bereich Gebäudeautomation (2)

## Z-Wave

Funkbasierter Kommunikationsstandard fur Heimautomation mit geringer Datenübertragung und kurzer Reichweite 1

Optimiert fur Datenubertragung mit geringem Energieverbrauch und hoher Sicherheit

<!-- image-->

- Entwicklung und Verbreitung der Technologie durch Z-Wave-Allianz seit 2005

## Homematic

proprietäres System der Firma eQ-3 (ELV Elektronik AG)

definiert als Funk- und drahtgebundenes Protokoll,Bidirectional Communication Standard" (BidCoS)

unterstutzt bidirektionale Verbindungen mit Bestatigung durch den Empfanger

<!-- image-->

relativ gunstige Anschaffungspreise fur Hardwarekomponenten aufgrund des Vertriebs über Elektronikmärkte

## Low Power Wide Area Networks (LPWAN)

## Funkbasierte WAN Technologie,optimiert fur Kommunikation über groβere Entfernungen hinweg

- niedrige Datenubertragungsraten und geringer Energieverbrauch

- insbesondere geeignet fur Kommunikation im regionalen Umfeld (,Smart Cities")

## Long Range WAN (LoRaWAN)

- Basiert auf sogenannter Zirpenfrequenzspreizung

Nutzung verschiedener Frequenzen, z.B. 433 MHz und 868 MHz (in Europa), 915 MHz (in den USA)

- Reichweite von 2 bis 40 km

## NarrowBand loT (NB loT)

Basiert auf Long Term Evolution (LTE) Technologie

- Nutzung verschiedener Frequenzen im Bereich 800 und 900 MHz

Reichweite ca.10 km

<!-- image-->

## Wi-Fi HaLow (IEE 802.11ah)

- Basiert auf on WLAN Standard

- Nutzung verschiedener Frequenzen, hauptsächlich im Bereich 90o MHz

Reichweite doppelt so weit wie heutiges Wi-FiLABS

LEARN

FORUM

## ALL OVER THE WORLD

<!-- image-->

## Wiederholungsfragen zu Kapitel 2.3

Definieren Sie den Begriff,Kommunikationsprotokoll und geben Sie zwei Beispiele fur typische Regeln, die durch ein Kommunikationsprotokollfestgelegt werden. (Folie 70)

2. Nennen Sie drei Verfahren Zur Sicherstellung von Datenintegritat bzw. Datensicherheit, die vom Applicability Statement 2 (AS2) Protokoll unterstutzt werden. (Folie 72)

3. Nennen Sie die beiden wesentlichen Vorteile industrieller Kommunikationsstandards im Hinblick auf die Verbindung von Sensoren und Aktoren mit Steuerungsgeräten und Leitrechnern. Geben Sie zwei Beispiele fur aktuell gängige Feldbusse. (Folie 74)

4. Nennen Sie vier zentrale Merkmale des Kommunikationsprotokols OPC-UA, die dessen aktuelle Verbreitung im Rahmen von Industrie 4.0 Projekten begrunden. (Folie 76)

5. Erläutern Sie das grundlegende Kommunikationsprinzip des MQTT (Message Queue Telemetry Transport) Protokolls anhand des nachfolgenden Beispiels mit vier Clients (C1, C2, C3, C4) und einem Message-Broker (MB). (Folie 80 bis 82)

<!-- image-->

a) Welches Topic muss Client C3 abonnieren, damit nurdie Temperaturmeldung aus der Kuche empfangen wird?

b) Welches,,Topic" muss Client 4 abonnieren, damit alle hausbezogenen Nachrichten mit nur diesem einen ,Topic" empfangen werden?

C) Welches Protokolfeature sollte genutzt werden, um neu hinzukommenden Clients direkt einen Abruf des letzten Datenstands Zu ermoglichen, ohne auf eine neue Nachrichtensendung warten zu müssen?

<!-- image-->

## 2 loT Technologien

2.1 Sensoren und Aktoren

2.2 Identifikations- und Lokalisierungstechnologien

2.3Kommunikationsprotokolle

2.4 Interoperabilität

2.5 Middleware und loT Platformen

<!-- image-->

## Begriff Interoperabilität

## Fähigkeit eines nahtlosen Zusammenspiels unabhängiger, heterogener IT-Systeme

- vollautomatischer Informationsaustauch ohne gesonderte Vereinbarungen zwischen beteiligten Systemen (.,Plug & Play")

- in der Regel durch Nutzung gemeinsamer Kommunikationsprotokolle und standardisierter Systemschnittstellen

## Wesentliche Vorteile:

Vermeidung von Medienbruchen durch integrierte Informationsubertragung

： Hohe Geschwindigkeit der Informationsubertragung

- Vermeidung menschlicher Fehler durch vollautomatische Ubertragungsverfahren

Senkung der Integrations- bzw. Transaktionskosten

Ausschopfung von Rationalisierungspotential

## Formen der Interoperabilität

## Strukturelle Interoperabilität

- ausgetauschten Informationen liegt gemeinsames Datenmodell zugrunde

## Syntaktische Interoperabilität

- ausgetauschte Informationen besitzen gemeinsame Kodierungssyntax

- Z.B.XML, JSON

## Semantische Interoperabilität

ausgetauschte Informationen verwenden gemeinsames Vokabular

- z.B. EDl-Nachrichtenstandards, Ontologien

## Interoperabilitatskomponenten in Bezug auf Datenubertragung

## Standardisiertes Vokabular

semantisch z.B.an Geschäftsdokumenten orientiert oder Ontologien zur Wissensrepräsentation nutzend

<!-- image-->

## □ Konverter

Umwandlung der Daten aus internem / proprietärem Format in standardisiertes Format und umgekehrt

<!-- image-->

## ■ Kommunikationsprotokolle

Vereinbarung bzw. Vorschrift, nach der Ubertragung von Daten zwischen zwei oder mehreren Kommunikationssystemen erfolgt

<!-- image-->

## Ubertragungsnetzwerke

Internet

<!-- image-->

## Syntaktische Interoperabilitat: XML

## Extensible Markup Language (XML)

Auszeichnungssprache zur Darstellung hierarchisch strukturierter Dokumente im Textformat $( \sqcup \sqcap \sqcap - 8 )  B s _ { \ell } . < | n _ { 1 } > : | \tan \limits _ { g } |$

wird primär fur platform- und implementierungsunabhängigen Datenaustausch zwischen Computersystemen verwendet

Ursprunglich veroffentlicht 1998 vom World Wide Web Consortium (W3C)in der Version 1.0

## Kennzeichen eines XML Dokuments

- Elemente mit Beginn- und Endauszeichner (Tags) als zentrale Struktureinheiten

- Wohlgeformtheit, d.h. konform mit allen spezifizierten Syntaxregeln  fmendus & sdledes Tg

Validitat (Gultigkeit), d.h. Verprobung gegen eine Document Type Definition (DTD) oder ein XML Schema, in dem erlaubte Elemente, Attribute und grammatische Regeln definiert sind

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Observation>
<Device>
<ID>4711</ID>
<Type>TemperatureSensor</Type>
</Device>
<Location>
<ID>E035</ID>
<Type>Room</Type>
</Location>
<Measure>
<Value>25</Value>
<Unit>CEL</Unit>
<DateTime>2017-10-11T11:10:20Z</DateTime>
</Measure>
</Observation>
```

```xml
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
<xs:element name="Observation">
<xs:complexType>
<xs:sequence>
<xs:element name="Device">
<xs:complexType>
<xs:sequence>
<xs:element name="ID" type="xs:integer" />
<xs:element name="Type" type="xs:string" />
</xs:sequence>
</xs:complexType>
</xs:element>
```

```xml
<xs:element name="Location">
<xs:complexType>
<xs:sequence>
<xs:element name="ID" type="xs:string" />
<xs:simpleType>
<xs:restriction base="xs:string">
<xs:pattern value="[A-Z][0-9][0-9][0-9]"/>
</xs:restriction>
</xs:simpleType>
</xs:element>
<xs:element name="Type" type="xs:string" />
</xs:sequence>
</xs:complexType>
</xs:element>
```

<xs:element name="Measure">   
<xs:complexType>   
<xs:sequence>   
<xs:element name="Value" type="xs:integer" />   
<xs:element name="Unit">   
<xs:simpleType>   
<xs:restriction base="xs:string">   
<xs:enumeration value="CEL"/>   
<xs:enumeration value="FAH"/>   
</xs:restriction>   
</xs:simpleType>   
</xs:element>   
<xs:element name="DateTime" type="xs:dateTime" />   
</xs:sequence>   
</xs:complexType>   
</xs:element>   
</xs:sequence>   
</xs:complexType>   
</xs:element>   
</xs:schema> www.hwg-lu.de www.hwg-lu.de

## Syntaktische Interoperabilitat: JSON

## JavaScript Object Notation (JSON)

: Syntax Zur Speicherung und zum Austausch von strukturierten Daten im Textformat (standardmaβig UTF-8)

wird primär bei Webanwendungen und mobilen Applikationen in Verbindung mit JavaScript verwendet

- jedes JSON Objekt ist (solte) gultiges JavaScript (sein)

## Kennzeichen eines JSON Objektes

：,,kompakter" Aufbau mit leichter Lesbarkeit

Objekt beginnt mit { und endet mit } und enthält durch Kommata getrennte Liste von Eigenschaften

Eigenschaften bestehen jeweils aus Schlussel (Zeichenkette) und Wert (Datentyp), getrennt mit :

Zeichenketten beginnen und enden mit Anfuhrungszeichen

Arrays sind möglich, sie beginnen mit [ und enden mit ]

Validitatsprufung mit Hilfe von JSON Schema moglich

## Beispiel: JSON Dokument einer Temperaturmessung

```jsonl
{
"Observation":
{
"Device":
{"ID": 4711,
"Type": "TemperatureSensor"
}
"Location":
{"ID": "E035",
"Type": "Room"
}
"Measure":
{"Value": 25,
"Unit": "CEL",
"DateTime": "2017-10-11T11:10:20Z"
}
}
}
100
```

```html
{
"$schema": "https://json-schema.org/draft/2020-12/schema",
"title": "Observation”,
"type": "object",
"properties":
{
"Device":
{
"type": "object",
"properties":
{
"ID":
{
"type": "number"
}
1 'Type":
{
"type": "string"
}
}
1 www.hwg-l www.hwg-lu.de
```

```json
"Location":
{
"type": "object",
"properties":
{
"ID":
{
"type": ,string"
}，
"Type":
{
"type": "string"
}
}
}
```

```snap
"Measure":
{
"type": "object",
"properties":
{
"Value":
{
"type": "number"
"Unit":
{
"type": "string"
"DateTime":
{
"type": "string"
}
}
}
}
}
103
```

## Web Service Standards

## Simple Object Access Protocol (SOAP)

Spezifikation fur Web Service basierte Kommunikation

Unabhängig vom Transportprotokoll (z.B. HTTP, SMTP, FTP)

- XML basiertes Nachrichtenformat mit Envelope, Header und Body

## Web Services Description Language (WSDL)

- XML basierte Sprache zur Beschreibung von Web Service APls

→ Datenformat

Abstrakte Beschreibung auf funktionaler Ebene

→ Interfaces und Operations

- Konkrete Beschreibung auf technischer Ebene

→ Binding und Service

## Universal Description, Discovery and Integration (UDDI)

- Verzeichnisdienst fur die Publikation und Auffindung von Web Services:

White Pages mit unternehmensspezifischen Informationen zu Serviceanbietern

Yellow Pages mit branchenspezifischen Informationen zu Serviceanbietern

Green Pages / Service Type Registration mit Web Service spezifischen Informationen

<!-- image-->## Representational State Transfer (REST)

## ■ Architekturansatz fur Kommunikation zwischen Client und Server in verteilten Systemen

Programmierparadigma zur (einfachen) Realisierung von Web Services

Alternative zu SOAP,WSDL und RPC

. Realisierung sog. RESTful Anwendungen

Weder Protokoll noch Standard, sondern:

Nutzung Von Standards wie HTTP/S, URI, HTML, JSON oder XML

· Jede REST-Nachricht enthalt alle Informationen, die fur Server bzw. Client notwendig sind, um Nachricht zu interpretieren (Zustandslosigkeit)

## Verwendung moglichst vieler HTTP-Methoden, z.B.

GET: Lesen (Anfordern) einer Ressource vom Server

- POST: Anlegen (Einfugen) einer Ressource auf dem Server

- PUT: Andern einer Ressource auf dem Server

DELETE: Loschen einer Ressource auf dem Server

OPTIONS: Prufung, welche Methoden fur eine Ressource vom Server angeboten werden

## HTTP-basiertes Protokoll fur Client-Server-Kommunikation

ursprunglich von Microsoft veroffentlicht, mittlerweile von vielen Softwareherstellern unterstutzt (z.B. SAP mit Fiori und SAP Gateway)

:basiert auf REST-Architekturansatz

- ist Plattform- und Technologie- sowie Programmiersprachenunabhangig

## Ermoglicht konsistente und strukturierte Entwicklung von RESTful Web Services mit:

- ldentifikation von Ressourcen über URls

Definition der Ressourcen in Datenmodellen

- einheitliche Semantik fur Datenaustausch über CRUD-Operationen

- Nutzung von Filtern (z.B.orderBy) oder mathematischen Operationen (z.B. round)

## → OData URL Conventions

## OData URL Conventions

Regeln zum Erstellen von URLs i.V.m. RESTful Web Services - ldentifikation der von OData-Services bereitgestellten Ressourcen und Metadaten - Festlegung erlaubter Query-Operatoren fur die OData-Services

## Grundlegender URL-Aufbau:

<!-- image-->

## Beispiele:

[Service URL] /ServiceName/Students → Alle Entitäten vom Typ Student

[Service URL] /ServiceName/Students?\$top=5&\$orderby=Name → die ersten 5 Entitaten vom Typ Studierende, sortiert nach ,Name"

[Service URL] /ServiceName/Students?filter=Name eq 'Meyer' → Alle Studierenden mit Namen ,Meyer"

[Service URL] /ServiceName/Students('4711') → Entitat vom Typ Studierende mit der ID ,4711"

## Semantische Interoperabilität durch Nachrichten-Standards

Standardisierte Nachrichtenstruktur zumeist fur die B2B Integration

Globale, nationale oder Industrie-Standards

Semantisch an Geschaftsdokumenten oder Geschäftsprozessschritten orientiert

Ziel ist vollautomatisierte Kommunikation zwischen Anwendungssystemen verschiedener Geschäftspartner

- Zumeist konzipiert fur asynchronen,seltener fur synchronen Datenaustausch

## Beispiele fur B2B Standards:

UN/EDIFACT: United Nations Directories for Electronic Data Interchange for Administration, Commerce and Transport

ANSI ASC X12: American National Standards Institute, Accredited Standards Committee X12

- SWIFT: Society for Worldwide Interbank Financial Telecommunication

: RosettaNet: Konsortium von Unternehmen aus der High-Tech Branche

- ebXML: Electronic Business using XML

## Bedeutung

United Nations Directories for Electronic Data Interchange for Administration, Commerce and Transport

Von Vereinten Nationen herausgegebenes, weltweit gultiges Regelwerk fur elektronischen Informationsaustausch in Verwaltung, Wirtschaft und Transport

## □ Grundprinzip

Definition sog. Nachrichtentypen zur Ubertragung strukturierter Informationen

Nachrichtentyp bezieht sich i.d.R.auf Geschäftsvorfall:

. Kann semantisch und funktionell mit einem oder mehreren traditionellen Papierdokumenten übereinstimmen

. Kann aber auch einem dokumentenunabhängigen Bearbeitungsschrittim Rahmen der betrieblichen Aufgabenerfulung unterstutzen

## United Nations Trade Data Interchange Directory (UNTDID)

Beschreibung der Nachrichtentypen mit Strukturelementen und Syntax-Regeln

- Richtlinien fur Entwicklung der Nachrichtentypen

- Durchfuhrungsregeln fur Nachrichtenubertragung

## Beispiel: B2B Integration mit EDIFACT

<!-- image-->

## EDIFACT-Nachrichtentypen (1)

fur Wirtschaft und Gesellschaft Ludwigshafen

<table><tr><td rowspan=1 colspan=1> Abkurzung des Nachrichtentyps</td><td rowspan=1 colspan=1>Deutsche Bezeichnung</td><td rowspan=1 colspan=1> Englische Bezeichnung</td></tr><tr><td rowspan=1 colspan=1>DELFOR</td><td rowspan=1 colspan=1>Lieferabruf / -plan</td><td rowspan=1 colspan=1>Delivery schedule</td></tr><tr><td rowspan=1 colspan=1>DELJIT</td><td rowspan=1 colspan=1>Feinabruf</td><td rowspan=1 colspan=1>Delivery just in time</td></tr><tr><td rowspan=1 colspan=1>DESADV</td><td rowspan=1 colspan=1>Liefermeldung</td><td rowspan=1 colspan=1>Despatch advice</td></tr><tr><td rowspan=1 colspan=1>HANMOV</td><td rowspan=1 colspan=1>Nachricht fur den Ladungs- /Guterumschlag und -transport</td><td rowspan=1 colspan=1>Cargo goods handling andmovement message</td></tr><tr><td rowspan=1 colspan=1>IFCSUM</td><td rowspan=1 colspan=1>Speditions- und Sammel-ladungsnachricht (Bordero)</td><td rowspan=1 colspan=1>Forwarding and consolidation summary message</td></tr><tr><td rowspan=1 colspan=1>IFTMBF</td><td rowspan=1 colspan=1>Buchung /Reservierung</td><td rowspan=1 colspan=1>Firm booking</td></tr><tr><td rowspan=1 colspan=1>IFTMIN</td><td rowspan=1 colspan=1>Transport- / Speditionsauftrag</td><td rowspan=1 colspan=1> Instruction</td></tr><tr><td rowspan=1 colspan=1>IFTSTA</td><td rowspan=1 colspan=1>Multimodaler Statusbericht</td><td rowspan=1 colspan=1>Multimodal status report</td></tr><tr><td rowspan=1 colspan=1>INVOIC</td><td rowspan=1 colspan=1>Rechnung</td><td rowspan=1 colspan=1>Invoice</td></tr></table>

## EDIFACT-Nachrichtentypen (2)

<table><tr><td rowspan=1 colspan=1> Abkurzung desNachrichtentyps</td><td rowspan=1 colspan=1>Deutsche Bezeichnung</td><td rowspan=1 colspan=1>Englische Bezeichnung</td></tr><tr><td rowspan=1 colspan=1>INVRPT</td><td rowspan=1 colspan=1>Lagerbestandsbericht</td><td rowspan=1 colspan=1>Inventory report</td></tr><tr><td rowspan=1 colspan=1>ORDCHG</td><td rowspan=1 colspan=1>Bestelläanderung</td><td rowspan=1 colspan=1>Purchase order changerequest</td></tr><tr><td rowspan=1 colspan=1>ORDERS</td><td rowspan=1 colspan=1>Bestellung</td><td rowspan=1 colspan=1>Purchase order</td></tr><tr><td rowspan=1 colspan=1>ORDRSP</td><td rowspan=1 colspan=1>Bestellantwort</td><td rowspan=1 colspan=1>Purchase order response</td></tr><tr><td rowspan=1 colspan=1>PAYORD</td><td rowspan=1 colspan=1>Zahlungsanweisung</td><td rowspan=1 colspan=1>Payment order message</td></tr><tr><td rowspan=1 colspan=1>PRICAT</td><td rowspan=1 colspan=1>Preisliste / Katalog</td><td rowspan=1 colspan=1> Price catalogue message</td></tr><tr><td rowspan=1 colspan=1>RECADV</td><td rowspan=1 colspan=1>Wareneingangsmeldung</td><td rowspan=1 colspan=1>Receiving advice</td></tr><tr><td rowspan=1 colspan=1>REMADV</td><td rowspan=1 colspan=1>Zahlungsavis</td><td rowspan=1 colspan=1>Remittance advice</td></tr><tr><td rowspan=1 colspan=1>RETINS</td><td rowspan=1 colspan=1>Anweisung zur Warenrückgabe</td><td rowspan=1 colspan=1>Instruction for returns</td></tr><tr><td rowspan=1 colspan=1>SLSFCT</td><td rowspan=1 colspan=1>Verkaufsprognose</td><td rowspan=1 colspan=1>Sales Forecast</td></tr></table>

<!-- image-->

## Beispiel: EDIFACT-Ubertragungsdatei mit einer Bestellung

```csv
UNA:+.？ '
UNB+UNOC:3+SenderlD+ReceiverlD+110625:0930+1234567'
UNH+1+ORDERS:D:96A:UN'
BGM+220+B10001+9'
DTM+4:20110625:102'
NAD+BY+++Mustermann+Musterstrasse+Ludwigshafen++67059+DE
LIN+10++Musterprodukt:SA'
QTY+1:1000:ST'
UNS+S'
CNT+2:1'
UNT+9+1'
UNZ+1+1234567'
```

Initiative zur Entwicklung eines technischen Rahmens fur die Nutzung von XML in elektronischen Geschäftsprozessen

gemeinsam getragen von UN/CEFACT und OASlS (1999 bis 2005)

primäres Ziel: Senkung der EDl-Eintrittsbarrieren fur kleine und mittlere Unternehmen sowie Entwicklungsländer

insbesondere ebXML Core Components Technical Specification stellen (noch immer) sehr gute Referenz fur Entwicklung von Nachrichtenformaten dar

## ebXML Spezifikationen als internationale Standards in ISO 15000 veroffentlicht:

ISO 15000-1:2004: Part 1: Collaboration-protocol profile and agreement specification (ebCPP)

- ISO 15000-2:2004: Part 2: Message service specification (ebMS)

- ISO 15000-3:2004: Part 3: Registry information model specification (ebRIM)

ISO 15000-4:2004: Part 4: Registry services specification (ebRS)

ISO 15000-5:2005: Part 5: ebXML Core Components Technical Specification, Version 2.01 (ebCCTS)

## ebXML Core Component Types (1)

Hochschule

fur Wirtschaft und Gesellschaft Ludwigshafen

<table><tr><td rowspan=1 colspan=1> CCT Dictionary Entry Name</td><td rowspan=1 colspan=1>Definition</td><td rowspan=1 colspan=1>ObjectClass</td><td rowspan=1 colspan=1>CCT Components</td></tr><tr><td rowspan=1 colspan=1> Amount. Type</td><td rowspan=1 colspan=1>A number of monetary unitsspecified in a currency where the unit of currency is explicit orimplied.</td><td rowspan=1 colspan=1>Amount</td><td rowspan=1 colspan=1>Amount. ContentAmount Currency. ldentifier Amount Currency. Code List Version.Identifier</td></tr><tr><td rowspan=1 colspan=1> Binary Object.Type</td><td rowspan=1 colspan=1>A set of finite-length sequencesof binary octets.</td><td rowspan=1 colspan=1>BinaryObject</td><td rowspan=1 colspan=1>Binary Object. ContentBinary Object. Format. TextBinary Object. Mime. CodeBinary Object. Encoding. CodeBinary Object. Character Set. CodeBinary Object. Uniform Resource.IdentifierBinary Object. Filename. Text</td></tr><tr><td rowspan=1 colspan=1>Code. Type</td><td rowspan=1 colspan=1>A character string that forbrevity and/or language independence may be used torepresent or re-place a definitive value or text of an attribute together with relevantsupplementary information.</td><td rowspan=1 colspan=1>Code</td><td rowspan=1 colspan=1>Code. ContentCode List. ldentifierCode List. Agency. IdentifierCode List. Agency Name. TextCode List. Name. TextCode List. Version. ldentifierCode. Name. TextLanguage. IdentifierCode List. Uniform Resource. ldentifierCode List Scheme. Uniform Resource.Identifier</td></tr></table>

## ebXML Core Component Types (2)

Hochschule

fur Wirtschaft und Gesellschaft Ludwigshafen

<table><tr><td rowspan=1 colspan=1> CCT DictionaryEntry Name</td><td rowspan=1 colspan=1>Definition</td><td rowspan=1 colspan=1>ObjectClass</td><td rowspan=1 colspan=1>CCT Components</td></tr><tr><td rowspan=1 colspan=1>Date Time. Type</td><td rowspan=1 colspan=1>A particular point in theprogresssion of time togetherwith relevant supplementaryinformation.</td><td rowspan=1 colspan=1>Date Time</td><td rowspan=1 colspan=1>Date Time. ContentDate Time. Format. Text</td></tr><tr><td rowspan=1 colspan=1>Identifier. Type</td><td rowspan=1 colspan=1>A character string to identify anddistinguish uniquely, one instance of an object in anidentification scheme from allother objects in the same scheme together with relevantsupplementary information.</td><td rowspan=1 colspan=1>Identifier(ID*)</td><td rowspan=1 colspan=1>Identifier. ContentIdentification Scheme.IdentifierIdentification Scheme.Name.Text Identification Scheme Agency. IdentifierIdentification Scheme. Agency Name.TextIdentification Scheme. Version.IdentifierIdentification Scheme Data. UniformResource. ldentifierIdentification Scheme. UniformResource. Identifier</td></tr><tr><td rowspan=1 colspan=1>Indicator. Type</td><td rowspan=1 colspan=1>A list of two mutually exclusiveBoolean values that express theonly possible states of a property.</td><td rowspan=1 colspan=1>Indicator</td><td rowspan=1 colspan=1>Indicator. ContentIndicator. Format. Text</td></tr><tr><td rowspan=1 colspan=1>Measure. Type</td><td rowspan=1 colspan=1>A numeric value determined bymeasuring an object along with the specified unit of measure.</td><td rowspan=1 colspan=1>Measure</td><td rowspan=1 colspan=1>Measure. ContentMeasure Unit. CodeMeasure Unit. Code List Version.Identifier</td></tr></table>

\* Zulässige Kurzschreibweise nach UBL Naming & Design Rules (http://docs.0asis-open.org/ubl/UBL-NDR/v3.0/UBL-NDR-v3.0.html)

## ebXML Core Component Types (3)

Hochschule

fur Wirtschaft und Gesellschaft Ludwigshafen

<table><tr><td rowspan=1 colspan=1>CCT Dictionary Entry Name</td><td rowspan=1 colspan=1>Definition</td><td rowspan=1 colspan=1> ObjectClass</td><td rowspan=1 colspan=1>CCT Components</td></tr><tr><td rowspan=1 colspan=1>Numeric. Type</td><td rowspan=1 colspan=1>Numeric information that isassigned or is determined bycalculation, counting, or sequencing. It does not require a unit of quantity or unit ofmeasure</td><td rowspan=1 colspan=1>Numeric</td><td rowspan=1 colspan=1>=   Numeric. ContentNumeric. Format. Text</td></tr><tr><td rowspan=1 colspan=1>Quantity. Type</td><td rowspan=1 colspan=1>A counted number of non-monetary units possiblyincluding fractions.</td><td rowspan=1 colspan=1>Quantity</td><td rowspan=1 colspan=1>Quantity. ContentQuantity. Unit. CodeQuantity Unit. Code List. IdentifierQuantity Unit. Code List Agency.IdentifierQuantity Unit. Code List Agency Name.Text</td></tr><tr><td rowspan=1 colspan=1>Text. Type</td><td rowspan=1 colspan=1>A character string (i.e.a finite set of characters) generally in the form of words of a language.</td><td rowspan=1 colspan=1>Text</td><td rowspan=1 colspan=1>Text. ContentLanguage. ldentifierLanguage. Locale. Identifie</td></tr></table>

## Erweiterung der herkommlichen World Wide Web Konzepte mit einer semantischen Komponente

- Zusatz eindeutiger Informationen zu Webseiten oder Web Services

## Ziele:

bessere Interpretation der Inhalte von Webseiten bzw. der Schnittstellenbeschreibungen von Web Services

Vereinfachung der maschinellen Verarbeitung der Inhalte von Webseiten bzw. der Nutzung von Web Services

- Darstellung von Vokabularen mit beliebigen Beziehungen, Attibuten und Typen

## Umsetzung:

- Nutzung von Konzepten der Wissensrepräsentation

Einsatz von Semantic Web Technologien

<!-- image-->

## RDF (Resource Description Framework)

## ■ XML basiertes Framework zur Beschreibung beliebiger Dinge (Ressourcen) im Internet

: ursprunglich vom World Wide Web Consortium (W3C) als Standard zur maschinell verarbeitbaren Beschreibung von Metadaten konzipiert

seit 2004 W3C Empfehlung (siehe: https://www.w3.org/RDF)

## Grundprinzip:

- abstraktes Datenmodell, das auf gerichteten Graphen basiert

ohne Festlegung auf spezifische Syntax (XML am verbreitetsten)

- nutzt Uniform Resource Identifiers (URls) zur ldentifikation

Modellierung von Elementaraussagen als Tripel

bestehend aus Subjekt (Ressource), Prädikat (Eigenschaft der Ressource) und Objekt (Wert der Eigenschaft)

z.B.,,Buch 4711",hat den Autor",Max Muller"

## Beispiel fur ein RDF Dokument in XML Syntax

Elementaraussage:

- Das Buch,Semantic Web - Grundlagen"-wird verlegt vom- Springer Verlag.

Zugehoriges RDF Dokument mit Graph:

```rdf
<?xml version="1.0" encoding="utf-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns:ex="http://example.org/">
<rdf:Description rdf:about="http://example.org/SemanticWeb">
<ex:VerlegtBei>
<rdf:Description rdf:about="http://springer.com/Verlag">
</rdf:Description>
</ex:VerlegtBei>
</rdf:Description>
</rdf:RDF>
```

http://example.org/Semanticweb

http://example.org/VerlegtBei

http://springer.comVerlag

www.hwg-lu.de

## RDF-S (RDF Schema)

Standardvokabular zur Typisierung von RDF Ressourcen

ermoglicht Spezifikation von Schemawissen (Bildung einfacher Ontologien) z.B. Bucher haben mindestens einen Autor und werden von einem Verlag publiziert

Beschreibung von Klassen von Ressourcen und Properties sowie deren Zusammenhänge mit Hilfe von RDF-S Konstrukten

: W3C Empfehlung (siehe: https://www.w3.org/TR/rdf-schema)

## □ OWL (Web Ontology Language)

- Ermoglicht Erstellung, Veroffentlichung und Verteilung Von Ontologien

Basiert auf RDF und erweitert die Ausdrucksmächtigkeit von RDFS (bzw. schränkt diese ein)

Ziel: automatisierte Ableitung,semantischer" Aussagen bzw. Ziehen logischer Schlussfolgerungen durch Inferenzmaschinen

W3C Empfehlung (siehe auch: htps://www.w3.org/TR/owl-semantics bzw. https://www.w3.org/TR/owl2-overview)

<!-- image-->

www.hwg-lu.de## Ausgewahlte Ontologien fur loT- und Webanwendungen (1)

## □ schema.org

Initiative zur Schaffung einer Ontologie fur einheitliche Beschreibung von Daten auf Webseiten, in E-Mails und generell im Internet

- ursprünglich von Suchmaschinen-Betreibern Google, Microsoft und Yahoo entwickelt

definierte Schemata beziehen sich derzeit noch schwerpunktmalBig auf Inhalte ,,klassischer" Webseiten

· z.B.: Beschreibung von Ereignissen, Personen, Produkten oder Lokationen

## DBpedia (http://wiki.dbpedia.org)

Gemeinschaftsprojekt verschiedener Forschungseinrichtungen und

Organisationen zur Extraktion strukturierter Informationen aus Wikipedia

ermoglicht automatisierte Abfragen auf Wikipedia-Inhalte

mit anderen Open Data Projekten durch RDF-Standard verbunden

## FOAF (Friend of a Friend: http://xmlns.com/foaf/0.1)

auf RDFS basierende Ontologie fur soziale Netzwerke

- maschinenlesbare Beschreibung von Eigenschaften und Interessen einer Person

z.B.: Name, Alter, Adresse und Kontakte

Verlinkung Zu anderen FOAF-Dokumenten moglich

## Ausgewahlte Ontologien fur loT- und Webanwendungen (2)

Semantic Sensor Network Ontology (https://www.w3.org/TR/vocab-ssn)

- Kern-Ontologie SOSA (Sensor, Observation, Sample, and Actuator)

Beschreibung von Sensoren und Aktoren, beobachteten Eigenschaften und verwendeten Verfahren, untersuchten Merkmale und Proben

: SOSA Klassen und Eigenschaften (Observation Perspektive)

<!-- image-->

www.hwg-lu.de

## Standardkonvention zur Darstellung von Verlinkungen in JSON Dokumenten

Mogliche Referenzierung von global eindeutigen Bezeichnungen oder Definitionen nach dem RDF-Modell (z.B. in Web Services)

W3C Empfehlung (siehe: https://www.w3.org/TR/json-ld)

## Syntax:

- JSON-LD ist gultiges JSON

- JSON-LD Elemente werden über Schlusselworter (beginnend mit @) realisiert:

. z.B.: @context, @id, @type, @vocab

- Verlinkung erfolgt mit Hilfe von IRls (Internationalized Resource Identifier)

## Beispiel (Validierung über https://json-ld.org/playground)

{ "@context": {   
"Vorname": "http://schema.org/givenName",   
"Nachname": "htp:/schema.org/familyName",   
"Geburtstag": "htp://schema.org/birthDate" },   
"Vorname": "Max",   
"Nachname": "Mayer",   
"Geburtstag": "1999-09-09"} www hwg-

<!-- image-->

www.hwg-lu.de

## Web of Things (WoT)

## W3C Standard fur die loT-Anwendungsentwicklung

Ziel der Entwicklungsvereinfachung und Verbesserung der Interoperabilitat, V.a. im Bereich der Cross-Domain Anwendungen bislang zwei Recommendations (seit April 2020)

## WoT Architecture

<!-- image-->

abstrakte Architektur fur das W3C Web of Things, die sich auf verschiedene Anwendungsfälle übertragen lässt

besteht aus mehreren "Building Blocks" unter Nutzung etablierter Webparadigmen

## WoT Thing Description (TD):

Beschreibung der Metadaten und Schnitstellen eines "Dings", d.h. physischer oder virtueller Entitaten in Softwareanwendungen

- Festlegung von Interaktionsmoglichkeiten zur Integration in Softwareanwendungen

. Property: Statusanzeige, z.B. Messwert eines Sensors

Action: funktionale Interaktionsmoglichkeit, z.B. Schlieβen eines Rolladens

Event: Ereignisdefinition mit Ausloser (Trigger), z.B. Feueralarm

Nutzung von JSON als Syntax sowie Unterstutzung von JSON-LD fur Referenzierungen

<!-- image-->

## Wiederholungsfragen zu Kapitel 2.4

Was wird unter dem Begrif,Interoperabilitat" verstanden? Nennen Sie drei wesentliche Vorteile,die mit Interoperabilitat verbunden sind. (Folie 91)

2. Nennen und erlautern Sie die drei moglichen Formen der Interoperabilitat und geben Sie jeweils ein praktisches Beispiel fur die Realisierung. (Folie 92)

3. Nennen Sie die vier wesentlichen Interoperabilitatskomponenten in Bezug auf Datenubertragung und geben Sie jeweils ein Beispiel fur eine mogliche Komponentenausprägung. (Folie 93)

4. XML und JSON sind gangige Datenformate zur Realisierung der syntaktischen Interoperabilität. Nennen Sie jeweils zwei Vor- und zwei Nachteile der beiden Datenformate in Bezug auf den Einsatz in loT-Projekten. (Folie 94 und 99)

5. Skizzieren Sie die Rollen und Aktionen in einer Service-orientierten Architektur und erläutern Sie die damit verbundenen Web Service Standards. (Folie 104 und 105)

## Wiederholungsfragen zu Kapitel 2.4

6. Erlautern Sie den Begriff,Representational State Transfer (REST)" und nennen Sie vier HTTP-Methoden, die damit zum Einsatz kommen konnen. (Folie 106)

Nennen Sie die beiden wesentlichen Ziele des OData Protokols und skizzieren Sie den grundlegenden URL-Aufbau nach den OData URL Conventions. (Folie 108)

8. Stellen Sie den groben Aufbau einer EDIFACT Nachricht mit Hilfe der nachfolgenden Segmente dar und nennen Sie die Funktion des jeweiligen Segments: UNT, UNA, UNB, UNZ, UNH. (Folie 114 und 115)

9. Erläutern Sie den Begrif,Semantic Web" und nennen Sie zwei Ziele, die damit verbunden sind. (Folie 120 und dazugehoriges Video im OLAT-Kurs)

10.Erlautern Sie das Grundprinzip des,Resource Description Framework (RDF)" und geben Sie ein konkretes Beispiel fur eine Elementaraussage. (Folie 122)

11. Nennen Sie drei Ontologien, die haufig in loT- und Semantic Web-Anwendungen zum Einsatz kommen und geben Sie jeweils ein Begrifsbeispiel. (Folie 126 und 127)

<!-- image-->

## 2 loT Technologien

2.1 Sensoren und Aktoren

2.2 Identifikations- und Lokalisierungstechnologien

2.3 Kommunikationsprotokolle

2.4 Interoperabilität

## 2.5 Middleware und loT Plattformen

<!-- image-->

Infrastrukturdienste und Schnittstellenfunktionen fur verteilte Anwendungen zur Uberbrückung der Heterogenität der Anwendungssysteme und Netzwerke

Unabhangigkeit von den Details der Netzwerke und Kommunikationsprotokolle

- Unabhängigkeit von den Details der Betriebssysteme sowie der Hardware

Unabhangigkeit von eingesetzten Programmiersprachen

- Technische und semantische Interoperabilitat

## Vorteile

Vereinfachung der Integration der Anwendungen und ihrer Daten

- Hohere Flexibilität und Skalierbarkeit

Synergieeffekte durch gemeinsame Nutzung von Infrastrukturressourcen

## Nachteile

- Stärkere Komplexitat des Anwendungssystems

: Ggf. hoherer Administrationsaufwand (abhängig von konkreter Middleware-Losung)

Erweiterte Laufzeitumgebung und zusätzliche Dienste zur Realisierung verteilter Anwendungen wie Persistenz, Sicherheit, Transaktion und Ressourcenverwaltung

Beispiel,Transaktionsorientiertes Modell":

Systemweit koordinierter Zugriff auf Ressourcen (primär Datenbanken und Dateien) unter Einhaltung der ACID-Kriterien 1

Beispiel,Objektorientiertes Modell":

- Erweiterung des objektorientierten Programmiermodells auf verteilte Objekte - Z.B. Common Object Request Broker Architecture (CORBA)

## Kommunikationsorientierte Middleware

Abstraktion von der Netzwerkprogrammierung durch Dienste und Laufzeitaspekte zur Unterstützung der Kommunikation zwischen verteilten Anwendungen

## ,Funktionsaufruforientiertes Modell" mit synchronem Kommunikationsmodus:

- Aufruf von entfernter Funktion oder Methode über das Netzwerk, z.B.:

Remote Procedure Call (RPC) oder SAP-spezifisch Remote Function Cal (RFC)

. Remote Method Invocation (RMl)

,,Nachrichtenorientiertes Modell" mit (zumeist) asynchronem Kommunikationsmodus und Warteschlangen

- Lose Kopplung der Anwendungen über Austausch von Nachrichten

## Funktionsaufruforientiertes Modell mit SAP Gateway

## SAP Gateway

Integraler Bestandteil von SAP NetWeaver zur Realisierung von Kommunikationsverbindungen zwischen SAP Systemen und externen Programmen

Standardbasiertes Framework zur einfachen Entwicklung von Web Services mit OData und REST

,Web Service Verschalung" von RFCfähigen ABAP-Funktionsbausteinen (i.d.R. BAPIs) in SAP Backend Systemen z.B. SAP Business Suite oder SAP S/4HANA)

<!-- image-->  
Quelle: SAP Gateway Dokumentation im SAP Help Portal (htp://help.sap.com)

## Nachrichtenorientiertes Modell: Peer-to-Peer Architektur

□ Nutzung mehrerer, anwendungssystemspezifischer Middleware-Komponenten

Individuelle,bilaterale Integrationslosungen zwischen den einzelnen Anwendungssystemen

Groβer Vernetzungs- und ggf. auch Mappingaufwand mit entsprechend hoher Komplexität der gesamten Integrationslosung

<!-- image-->

## Nachrichtenorientiertes Modell: Bus-Architektur mit Message Queues

## AN-abelEhenet

Einsatz eines Message Bus mit Message Queues (MQ),um Nachrichten zwischen Anwendungssystemen auszutauschen

Reduktion der Komplexität durch Minimierung der Anzahl direkter Kommunikationsverbindungen

Anschluss an Message Bus

Verschiedene Transportmoglichkeiten:

Punkt-zu-Punkt mit einer MQ zwischen Zwei Systemen

Publish-Subscriber mit einer MQ von einem zu allen andern Systemen, die an Nachricht interessiert sind

E-Procurement

<!-- image-->  
CRM  
SCM  
ERP  
SRM  
PLM

## Nachrichtenorientiertes Modell: Hub-and-Spoke-Architektur

Einsatz einer zentralen Integrationsplattform zur Kommunikationssteuerung und -kontrolle

Reduktion der Komplexität durch Minimierung der Anzahl direkter Kommunikationsverbindungen

Anschluss an Hub

Reduktion des Anpassungsaufwands durch:

Auslieferung von Adaptern fur Partnerprodukte

Auslieferung von Integrations-Content (z.B. vorkonfigurierte Integrationsszenarien oder Mappings)

<!-- image-->

## Trend: Cloud-basierte Integration

Hohe Kosten ,traditioneller" Integrationsprojekte aufgrund:

：heterogener Anwendungssystemlandschaften

<!-- image-->

Vielzahl unterschiedlicher Schnittstellentechnologien

Verstärkter Zeit- und Kostendruck auf Integrationsprojekte, u.a. durch:

- ,Time to Market"

<!-- image-->

- Senkung der Gesamtbetriebskosten (TCO)

□ Zunehmendes Interesse von Unternehmen auch an Cloud-basierten Integrationslosungen

<!-- image-->

: insbesondere bei positiven Erfahrungen mit SaaS, PaaS und laaS

Steigende Komplexität der Integrationsprojekte durch Kombination von On-Premise und Cloud-basierten Losungen Erfordernis spezieller Expertise von Integrationsanbietern

<!-- image-->

## Integration Platform as a Service - IPaaS (nach Gartner Research)

Cloud-basierte Plattform zur Entwicklung, Ausfuhrung und Steuerung von Integrationslosungen zwischen:

- unternehmensinternen Anwendungssystemen

laaS, PaaS und SaaS Anwendungen aus Public Clouds; (Managed) Private Clouds und Virtual Private Clouds (

Zunehmend auch Anwendungen und Daten des Web 2.0 (insb. Soziale Netzwerke) und des loT

<!-- image-->

Einfache und schnelle Realisierung von Integrationslosungen fur Unternehmen:

- Bereitstellung von Integrationswerkzeugen und -technologien durch IPaaS Anbieter

keine unternehmenseigene Installation und kein unternehmenseigener Betrieb spezieller Integrations-Hardware oder -Middleware

: Nutzungsmoglichkeit grundlegender Cloud-Charakteristika wie Skalierbarkeit, Zuverlässigkeit und Ausfalltoleranz

<!-- image-->

Produkt, das als technische Basis genutzt wird:

zur Anbindung und zum Monitoring unterschiedlicher loT Geräte und Komponenten (Hard- und Software)

- zur Anbindung von Datenbanken Zur Persistierung der loT Daten

- zur Anbindung betriebswirtschaftlicher Anwendungssoftware wie z.B. ERP-Systemen

- zum Betrieb verschiedener Anwendungsprogramme zur Visualisierung und Analyse der Daten

- zur Entwicklung eigener loT Losungen

## □ Aktuelle Marktsituation

mehr als 400 verschiedene loT Produkte Von unterschiedlichen Anbietern aus verschiedenen Branchen, insbesondere:

： Software-Hersteler, Z.B.: Microsoft Azure loT Suite, IBM Watson loT Platform,Software AG Cumolocity loT, ThingsBoard

Telekommunikations-Unternehmen, z.b.: Telekom Cloud of Things

weitere branchenspezifische Anbieter (v.a.Maschinenbau, Handel und Energiewirtschaft), z.B.: Amazon AWS loT, Bosch loT Suite, GE Predix

<!-- image-->

Java-basierte loT-Platform zur Erfassung, Verarbeitung und Visualisierung von Daten sowie zur Gerateverwaltung

Unterstutzt über sog.loT Gateway Vielzahl an Kommunikationsprotokollen - u.a.MQTT, CoAP, Modbus, OPC-UA und HTTP

Produktvarianten:

: Community Edition (Open-Source), Professional Edition (On Premise) und Thingsboard Cloud

<!-- image-->  
Quelle: https:/thingsboard.io/docs/getting-started-guides/what-is-thingsboard

www.hwg-lu.de## Digitaler Dienst / Digital Service

Wird unter Einsatz von Informations- und Kommunikationssystemen entwickelt, vermarktet und in Anspruch genommen

- Digitale Service Plattformen / Web Services

Stellt nutzenzentriertes Angebot dar

- Kundenorientierung /Personalisierbarkeit

Zeichnet sich meist durch hohe fixe,aber geringe variable Entwicklungsund Vertriebskosten aus

Modifikations- und Reproduzierfahigkeit

Kann kontextspezifisch erbracht werden

- Sensoren / Automatische ldentifikationsverfahren

Kann auf Analyse groβer und heterogener Datenmengen (in Echtzeit) basieren

: Big Data / Advanced Analytics Verfahren

→ Smart Services

<!-- image-->

## Wiederholungsfragen zu Kapitel 2.5

Was wird unter dem Begriff,Middleware" verstanden? Nennen Sie zwei Vor- und Zwei Nachteile, die mit dem Einsatz von Middleware verbunden sind. (Folie 133)

2. Nennen und erläutern Sie die beiden Varianten der,Kommunikationsorientierten Middleware" und geben Sie jeweils ein praktisches Anwendungsbeispiel in Bezug auf unternehmensinterne und unternehmensubergreifende Integrationslösungen. (Folie 135)

3. Erlautern Sie den von Gartner Research gepragten Begrif,ntegration Platform as a Service (IPaaS)" und nennen Sie zwei wesentliche Vorteile, die fur Unternehmen durch die Nutzung von IPaaS entstehen konnen. (Folie 141 und 142)

4. Was wird unter einer,loT Plattform" verstanden und welche wesentlichen Funktionskomponenten sind damit verbunden? (Folie 143 und 144)

5. Nennen und erläutern Sie die wesentlichen Eigenschaften eines ,Digitalen Dienstes" und zeigen Sie den Zusammenhang zu einem ,Smart Service" auf. (Folie 146 und 147)