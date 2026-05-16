Erstelle einen vollständigen User Flow für die Startseite von „Pipelinr“, einem CI/CD-SaaS-Produkt. Der Flow startet, wenn ein Nutzer auf einen Button eines Abo-Pakets klickt, zum Beispiel „Free starten“, „Pro kaufen“, „Business kaufen“ oder „Kontakt aufnehmen“.

Ziel:
Wenn der Nutzer auf ein Abo-Modell klickt, soll er zuerst zu einer Registrierungsseite weitergeleitet werden. Dort soll er seine E-Mail-Adresse eingeben und ein Passwort erstellen. Danach soll er auf einen gemockten Kaufbildschirm bzw. Checkout-Screen weitergeleitet werden, auf dem das ausgewählte Paket angezeigt wird.

Allgemeiner Stil:
- Modernes SaaS-Design
- Passend zur Marke „Pipelinr“
- Farbpalette: Dunkles Navy, Blau, Türkis, Weiß und helles Grau
- Klare, professionelle Oberfläche
- Abgerundete Karten und Buttons
- Gute Lesbarkeit
- Responsive Layout für Desktop und Mobile
- Moderne Sans-Serif-Schrift, z. B. Inter oder Manrope

Flow / Interaktion:

1. Ausgangspunkt: Abo-Karten auf der Startseite

Auf der bestehenden Startseite gibt es vier Abo-Karten:
- Free
- Pro
- Business
- Enterprise

Jede Karte hat einen Button:
- Free: „Free starten“
- Pro: „Pro kaufen“
- Business: „Business kaufen“
- Enterprise: „Kontakt aufnehmen“

Wenn der Nutzer auf einen dieser Buttons klickt, soll die Anwendung speichern, welches Paket ausgewählt wurde.

Beispiel:
- Klick auf „Pro kaufen“ → ausgewähltes Paket = Pro
- Klick auf „Business kaufen“ → ausgewähltes Paket = Business

Danach soll der Nutzer zur Registrierungsseite weitergeleitet werden.

2. Registrierungsseite

Erstelle eine neue Seite mit dem Namen:
„Registrierung“

Zweck:
Der Nutzer soll ein Konto erstellen, bevor er zum Kaufbildschirm kommt.

Inhalt der Seite:
- Oben links das Pipelinr-Logo
- Überschrift:
  „Erstelle dein Pipelinr-Konto“
- Untertitel:
  „Registriere dich, um dein ausgewähltes Paket zu kaufen und deine CI/CD-Pipelines zu verwalten.“
- Hinweis auf das ausgewählte Paket:
  „Ausgewähltes Paket: [Paketname]“
  Beispiel: „Ausgewähltes Paket: Pro“

Formularfelder:
- E-Mail-Adresse
  - Placeholder: „name@unternehmen.com“
- Passwort erstellen
  - Placeholder: „Mindestens 8 Zeichen“
  - Passwortfeld soll verdeckt sein
- Passwort bestätigen
  - Placeholder: „Passwort erneut eingeben“
  - Passwortfeld soll verdeckt sein

Optional:
- Checkbox:
  „Ich akzeptiere die AGB und Datenschutzbestimmungen.“
- Kleiner Link:
  „Du hast bereits ein Konto? Anmelden“

Primärer Button:
- Text: „Konto erstellen und weiter zum Kauf“

Button-Aktion:
Wenn der Nutzer auf „Konto erstellen und weiter zum Kauf“ klickt, soll er zum gemockten Kaufbildschirm weitergeleitet werden.

Validierungszustände:
- Wenn die E-Mail fehlt, zeige Fehlermeldung:
  „Bitte gib eine gültige E-Mail-Adresse ein.“
- Wenn das Passwort fehlt oder zu kurz ist, zeige:
  „Das Passwort muss mindestens 8 Zeichen lang sein.“
- Wenn die Passwörter nicht übereinstimmen, zeige:
  „Die Passwörter stimmen nicht überein.“
- Wenn die AGB-Checkbox nicht aktiviert ist, zeige:
  „Bitte akzeptiere die AGB und Datenschutzbestimmungen.“

Design:
- Zentrierte Formular-Karte
- Breite der Karte ca. 420–520 px auf Desktop
- Auf Mobile volle Breite mit Randabstand
- Links oder oberhalb der Karte ein kurzer Vorteilstext:
  „Starte in wenigen Minuten mit automatisierten Builds, Tests und Deployments.“
- Optional rechts eine kleine Illustration oder ein Dashboard-Mockup

3. Gemockter Kaufbildschirm / Checkout

Erstelle eine zweite neue Seite mit dem Namen:
„Checkout“

Zweck:
Der Nutzer sieht eine Zusammenfassung seines ausgewählten Pakets und kann einen gemockten Kauf abschließen.

Inhalt:
- Header mit Pipelinr-Logo
- Fortschrittsanzeige oben:
  1. Paket wählen
  2. Konto erstellen
  3. Kauf abschließen

Der aktuelle Schritt „Kauf abschließen“ soll hervorgehoben sein.

Hauptlayout:
Desktop:
- Zwei Spalten
- Links: Zahlungs- und Rechnungsformular
- Rechts: Bestellübersicht

Mobile:
- Bestellübersicht oben
- Formular darunter

Rechte Spalte: Bestellübersicht
Überschrift:
„Bestellübersicht“

Dynamischer Inhalt je nach ausgewähltem Paket:

Wenn Free ausgewählt wurde:
- Paket: Free
- Preis: 0 € / Monat
- Enthalten:
  - 1 Projekt
  - 100 Build-Minuten pro Monat
  - Einfache Pipelines
  - Community-Support
- Button: „Kostenlos starten“

Wenn Pro ausgewählt wurde:
- Paket: Pro
- Preis: 19 € / Nutzer / Monat
- Enthalten:
  - Unbegrenzte Projekte
  - 2.000 Build-Minuten pro Monat
  - Git-Integration
  - Benachrichtigungen
  - Erweiterte Build-Logs

Wenn Business ausgewählt wurde:
- Paket: Business
- Preis: 49 € / Nutzer / Monat
- Enthalten:
  - Alles aus Pro
  - Secret Management
  - Rollen- und Rechteverwaltung
  - Mehrere Deployment-Umgebungen
  - Prioritäts-Support
  - Audit-Logs

Wenn Enterprise ausgewählt wurde:
- Paket: Enterprise
- Preis: Individuell
- Statt Checkout soll ein Anfrageformular angezeigt werden:
  - Unternehmensname
  - Ansprechpartner
  - E-Mail
  - Nachricht
  - Button: „Anfrage senden“

Für Free, Pro und Business:
Zeige zusätzlich:
- Zwischensumme
- Umsatzsteuer
- Gesamtbetrag
- Abrechnungsintervall:
  Dropdown oder Toggle:
  - Monatlich
  - Jährlich

Linke Spalte: Zahlungs- und Rechnungsformular

Bereich 1: Rechnungsdaten
- Unternehmensname
- Vorname
- Nachname
- Rechnungsadresse
- Stadt
- PLZ
- Land

Bereich 2: Zahlungsdaten
Da es nur ein gemockter Kaufbildschirm ist, sollen keine echten Zahlungsdaten verarbeitet werden.

Zeige trotzdem ein realistisches, aber eindeutig als Demo markiertes Formular:
- Hinweis-Badge:
  „Demo-Checkout – keine echte Zahlung“
- Karteninhaber
- Kartennummer
  - Placeholder: „4242 4242 4242 4242“
- Ablaufdatum
  - Placeholder: „MM/JJ“
- CVC
  - Placeholder: „123“

Primärer Button:
- Für Pro: „Pro kaufen“
- Für Business: „Business kaufen“
- Für Free: „Kostenlos starten“

Sekundärer Link:
- „Zurück zu den Paketen“

Nach Klick auf den primären Button:
Erstelle einen Erfolgszustand oder eine Success-Seite.

4. Success-Seite

Erstelle eine dritte Seite mit dem Namen:
„Erfolg“

Inhalt:
- Großes Checkmark-Icon
- Überschrift:
  „Willkommen bei Pipelinr“
- Text:
  „Dein Konto wurde erstellt und dein Paket wurde erfolgreich aktiviert.“
- Dynamischer Hinweis:
  „Aktives Paket: [Paketname]“
- Button:
  „Zum Dashboard“

Darunter optional:
- Kleine Liste mit nächsten Schritten:
  - „Git-Repository verbinden“
  - „Erste Pipeline erstellen“
  - „Teammitglieder einladen“

5. Prototyping-Verbindungen in Figma

Erstelle klickbare Prototype-Verbindungen:

Von Startseite:
- Button „Free starten“ → Registrierung mit Paket Free
- Button „Pro kaufen“ → Registrierung mit Paket Pro
- Button „Business kaufen“ → Registrierung mit Paket Business
- Button „Kontakt aufnehmen“ → Registrierung oder Enterprise-Anfrage mit Paket Enterprise

Von Registrierung:
- Button „Konto erstellen und weiter zum Kauf“ → Checkout mit ausgewähltem Paket

Von Checkout:
- Button „Zurück zu den Paketen“ → Startseite / Preisbereich
- Button „Kostenlos starten“ → Erfolg
- Button „Pro kaufen“ → Erfolg
- Button „Business kaufen“ → Erfolg
- Button „Anfrage senden“ → Erfolg oder Kontaktbestätigung

Von Erfolg:
- Button „Zum Dashboard“ → gemocktes Dashboard oder Platzhalterseite

6. UI-Komponenten

Erstelle wiederverwendbare Komponenten für:
- Header
- Buttons
- Textfelder
- Passwortfelder
- Checkbox
- Preiskarte
- Checkout-Karte
- Fortschrittsanzeige
- Bestellübersicht
- Success-Message

7. Wichtige Anforderungen

- Der ausgewählte Tarif soll auf Registrierung, Checkout und Success-Seite sichtbar bleiben.
- Die Buttons der Abo-Modelle sollen klar als Einstieg in den Kaufprozess erkennbar sein.
- Der Checkout soll realistisch aussehen, aber eindeutig als Demo oder Mock gekennzeichnet sein.
- Der Nutzer soll sich zuerst registrieren, bevor er zum Kaufbildschirm kommt.
- Das Design soll konsistent mit der Pipelinr-Startseite sein.
- Alle Seiten sollen Desktop- und Mobile-Versionen haben.
- Der Flow soll so wirken, als wäre er Teil eines echten Webshops für ein SaaS-Produkt.