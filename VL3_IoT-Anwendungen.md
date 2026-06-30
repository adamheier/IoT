---
tags:
  - IoT
  - MW220
  - Anwendungen
  - Klausurvorbereitung
modul: MW220 Internet of Things – Technologien und Anwendungen
teil: 3
thema: IoT Anwendungen
folien: 150–182
---

# VL3 – IoT Anwendungen

## Agenda

- [[#3.1 Überblick über IoT Anwendungsgebiete]]
- [[#3.2 Vertiefung ausgewählter IoT Anwendungsgebiete]]
  - [[#Smart Home]]
  - [[#Ambient Assisted Living (AAL)]]
  - [[#Smart Grid – Internet der Energie]]
  - [[#Industrie 4.0]]
  - [[#Logistik 4.0]]

---

## 3.1 Überblick über IoT Anwendungsgebiete

### IoT Wertschöpfungspotenzial

Laut McKinsey Global Institute (2015 & 2024) hat IoT ein enormes wirtschaftliches Potenzial mit stark steigendem Wachstum bis 2030. Die größten Wertschöpfungspotenziale liegen in Fabrikumgebungen, Gesundheitswesen und Smart Cities.

### Klassifikation von IoT Anwendungsgebieten

```
                    Smart Logistics

  Smart               Smart Cities         Smart Home /
  Production                               Buildings

                  Internet of Things

  Smart Energy       Smart                   Ambient
                  Environments /          Assisted Living /
                  Smart Cars /               eHealth
                   Mobility
```

**Sieben Hauptbereiche:**
1. **Smart Logistics** – vernetzte, automatisierte Logistik
2. **Smart Production** (Industrie 4.0) – intelligente Fertigung
3. **Smart Cities** – stadtweite IoT-Infrastruktur
4. **Smart Home / Buildings** – vernetzte Gebäudesteuerung
5. **Smart Energy** – intelligente Energieversorgung (Smart Grid)
6. **Ambient Assisted Living / eHealth** – altersgerechte Assistenzsysteme
7. **Smart Cars / Mobility** – vernetzte Mobilität

---

## 3.2 Vertiefung ausgewählter IoT Anwendungsgebiete

### Smart Home

> [!definition] Smart Home
> Vernetzung und intelligente Steuerung bzw. Regelung bislang isolierter Komponenten und Systeme eines Wohngebäudes unter Nutzung von Informations- und Kommunikationstechnik.

**Prognosen:** Jährliche Wachstumsraten 10–25 %; bis 2030 fast jedes dritte neu gebaute/sanierte Haus in Deutschland mit umfassender Smart-Home-Lösung.

**Drei wesentliche Ziele:**
1. Höherer **Komfort**
2. Bessere **Sicherheit**
3. Steigerung der **Energieeffizienz**

**Vier Smart-Home-Teilbereiche:**
1. **Gebäudetechnik und -automation** – Heizung, Lüftung, Beschattung
2. **Zugangskontrolle / Überwachung** – smarte Schlösser, Kameras
3. **Haushaltsgeräte** – vernetzte Kühlschränke, Waschmaschinen
4. **Unterhaltungselektronik** – Mediensysteme, Voice Control

**Systemarchitektur (Hausautomation und Energiemanagement):**

```
WAN (DSL/Glasfaser/Mobilfunk)
        ↓
     Router
   /        \
Home Server    Smart Meter Gateway (BSI Schutzprofil)
(Hausautomation  ↕
& Energie-    Smart Meter
management)      ↕
  ↕         Local Metrological Network (LMN)
Funk/TP/Powerline
  ↕
Aktoren & Sensoren / Kameras & Multimedia
```

Zugriffsgeräte: Smartphone, Tablet, PC (über WLAN im HAN – Home Area Network)

**Relevante Protokolle:** [[VL2_IoT-Technologien#ZigBee|ZigBee]], [[VL2_IoT-Technologien#EnOcean|EnOcean]], [[VL2_IoT-Technologien#Z-Wave|Z-Wave]], [[VL2_IoT-Technologien#Homematic|Homematic]], [[VL2_IoT-Technologien#MQTT – Grundprinzip|MQTT]]

---

### Ambient Assisted Living (AAL)

> [!definition] AAL-Systeme
> Informationstechnische Systeme, die einen älteren Menschen im Alltag dadurch unterstützen, dass sie für ihn auf Basis von Daten über die aktuelle Situation Entscheidungen übernehmen oder Handlungsvorschläge unterbreiten und damit ein selbständiges und selbstbestimmtes Leben im eigenen Heim ermöglichen.
> *(BMBF/VDE: Deutsche Normungs-Roadmap AAL, 2011)*

**Vier wesentliche Merkmale:**
1. In Alltagsumgebung integriert (unsichtbar/unaufdringlich)
2. Vernetzt innerhalb der Wohnung und mit der Außenwelt (kooperationsfähig)
3. Reagieren auf Nutzerbedürfnisse und Situation (personalisiert, kontextspezifisch)
4. Gestaltet für ältere Menschen (sicher und intuitiv bedienbar)

**Unterstützungsbereiche nach Alter:**

| Ab ca. | Unterstützung |
|---|---|
| 60 Jahre | Sinne (Sehen, Hören, Tasten), Körper (Beweglichkeit, Fingerfertigkeit), Geist (Koordination) |
| 70 Jahre | Sinne (Sehen), Körper (Kraft), Geist (Gedächtnis) |
| 80 Jahre | Spezifische Krankheitsbilder (Demenz), pflegerische Unterstützung |

**Technische Funktionsbereiche von AAL-Systemen:**

```
         Vitaldaten- und Telemonitoring-Systeme
                    /
Erinnerungssysteme  -  Smart Home / Internet der Dinge
                    \
          Video- und Sprachkommunikationssysteme
```

**Praxisbeispiele (HWG Ludwigshafen):**
- Kommunikations- und Unterhaltungssystem (psychische Unterstützung)
- Notrufsystem mit **Geofencing** und **Sturzerkennung**

---

### Smart Grid – Internet der Energie

> [!definition] Smart Grid
> Intelligentes Stromnetz, das dezentrale Erzeugung (z. B. Solar, Wind), Speicherung und Verbrauch durch digitale Kommunikation und Steuerung optimiert.

**Smart Grid Architecture Model (SGAM):**
- Entwickelt von der Smart Grid Coordination Group (CEN, CENELEC, ETSI)
- 3-dimensionales Rahmenwerk
- Kombination aus NIST Conceptual Model und Automatisierungspyramide
- Dient zur Beschreibung und zum Vergleich von Smart Grid-Anwendungsfällen
- Basis für [[VL1_IoT-Grundlagen#Reference Architecture Model Industrie 4.0 (RAMI 4.0)|RAMI 4.0]]

**Beispiel:** E-Energy Modellstadt Mannheim (moma) – intelligentes Energiemanagement mit Smart Meter Gateway nach BSI-Schutzprofil.

---

### Industrie 4.0

> [!definition] Industrie 4.0
> Digitale Transformation der industriellen Produktion: Dezentrale Selbstorganisation statt zentraler Steuerung durch Vernetzung von Maschinen, Sensoren und Planungssystemen.

**Fünf zentrale Merkmale:**

1. **Flexible Produktion**
   - Verstärkte Digitalisierung und Vernetzung von Planungssystemen, Maschinen und Sensoren
   - Modularisierung der Produktionsstraßen
   - Kostengünstige Fertigung in kleiner Stückzahl (**„Losgröße 1"**)

2. **Kundenzentrierte Lösungen**
   - Engere Verbindung Konsument–Produzent
   - Verbesserung durch Auswertung von Nutzungsdaten

3. **Optimierte Logistik**
   - Algorithmen zur Optimierung logistischer Prozesse
   - „Smarte Vernetzung" der Produktionsmaschinen

4. **Einsatz von IT / Data Science**
   - [[VL1_IoT-Grundlagen#Digitaler Zwilling – Vier Typen|Digitale Zwillinge]]
   - [[VL1_IoT-Grundlagen#Cyber-Physisches System (CPS)|Cyber-Physische Systeme]]
   - Condition Monitoring, **Pay per Use**, **Predictive Maintenance**

5. **Ressourcenschonende Kreislaufwirtschaft**
   - Vollständiger Produktlebenszyklus
   - Nachhaltigkeit und Wiederverwertung „by Design"

**Standardisierungsfelder für Industrie 4.0:**
Referenzarchitekturen, Vernetzung/Kommunikation, Automatische Identifikation, IT-Sicherheit, Betriebssicherheit, Big Data/Cloud, Qualitätssicherung, Prozessautomation.

**Hindernisse (Bitkom 2021):** Datenschutz/-sicherheitsbedenken, fehlende Standards, IT-Kompetenz, Investitionskosten.

#### Kommunikation in der Automatisierungspyramide

```
Geschäftspartner ↔  ERP  ↔ Geschäftspartner    (Informationstechnik)
                    ↕
                   MES
                    ↕
                  SCADA
                    ↕
                   SPS
                    ↕
            Ein-/Ausgangssignale                  (Industrieautomation)
```

- **Vertikale Integration** – von Feldebene bis ERP
- **Horizontale Integration** – zwischen Maschinen, Werken, Unternehmen

**Relevante Technologien:** [[VL2_IoT-Technologien#OPC-UA (Open Platform Communications – Unified Architecture)|OPC-UA]], [[VL2_IoT-Technologien#MQTT – Grundprinzip|MQTT]], [[VL1_IoT-Grundlagen#Reference Architecture Model Industrie 4.0 (RAMI 4.0)|RAMI 4.0]], [[VL2_IoT-Technologien#RFID – Radio Frequency Identification|RFID]]

**Praxisbeispiel HWG:** Streaming, Monitoring und Analyse von Maschinendaten; KI-gestütztes Campus-, Gebäude- und Energiemanagement (KICaGEM).

---

### Logistik 4.0

> [!definition] Logistik 4.0
> Anwendung von Industrie 4.0 Konzepten auf die Logistik: Echtzeitvernetzung aller Mitglieder einer Liefer-/Wertschöpfungskette, verstärkte Automatisierung, Selbststeuerung und Selbstorganisation.

**Eingesetzte Technologien:**

| Kategorie | Beispiele |
|---|---|
| **Lokalisierung** | GPS, WLAN-Ortung, Mobilfunk-Ortung |
| **Identifikation** | Barcode, RFID, Sensoren |
| **Übertragung** | WLAN, Mobilfunk, Low-Power-Wireless |
| **Speicherung** | In-Memory-Datenbanken, Cloud Computing |
| **Software** | Data Science, Maschinelles Lernen |
| **Sicherheit** | Blockchain-Technologien |

**Anwendungsfelder:** Lagerhaltung (automatisierte Gabelstapler, Roboter, GPS), Transportsteuerung, Supply-Chain-Visibility, letzte Meile.

**Praxisbeispiel HWG:** Smart Energy – intelligentes Energiemanagementsystem für die Hochschule Ludwigshafen.

---

## Praxisprojekte (HWG Ludwigshafen)

| Projekt | Beschreibung |
|---|---|
| Industrie 4.0 | Streaming, Monitoring und Analyse von Maschinendaten |
| Smart Energy | Intelligentes Energiemanagementsystem für die Hochschule |
| Smart Office | Steuerungs- und Analysesystem (Analytics + Control + Sensors/Actors) |
| AAL – Kommunikation | Kommunikations- und Unterhaltungssystem zur psychischen Unterstützung |
| AAL – Notruf | Notrufsystem mit Geofencing und Sturzerkennung |
| Smart City | Dashboard-Konzept für die Stadt Ludwigshafen |
| KICaGEM | KI-gestütztes Campus-, Gebäude- und Energiemanagement |
| Robotik | Interaktive Anwendung für humanoiden Roboter NAO (Bibliotheksassistenz) |

---

## Verknüpfte Notizen

- [[VL1_IoT-Grundlagen]] – IoT Grundlagen, CPS, Digitaler Zwilling, RAMI 4.0
- [[VL2_IoT-Technologien]] – Technologien (RFID, MQTT, OPC-UA, ZigBee, Middleware)
