# 🍎 Apple Icons

## Beschreibung

Apple Icons ist eine Sammlung von hochwertigen, anpassbaren SVG-Icons für Ihre Apple-bezogenen Projekte. Diese Icons sind in React-Komponenten verpackt und können einfach in Ihren Projekten verwendet werden, um eine konsistente und ansprechende Benutzeroberfläche zu erstellen.

## Features

- **Alle aktuellen Icons**: Das Package beinhaltet alle aktuell verfügbaren Icons von Apple.
- **Anpassbar**: Einfach zu integrieren und anzupassen, einschließlich der Möglichkeit, Farben, Größen und Klassen zu ändern.
- **Modular**: Importiere nur die Icons, die du benötigst, um die Bundle-Größe zu minimieren.
- **React-Komponenten**: Jedes Icon wird als React-Komponente bereitgestellt, was die Integration in React-Projekte erleichtert.

## Installation

Um `apple-icons` in deinem Projekt zu verwenden, kannst du es direkt aus dem npm-Registry installieren:

```bash
npm install apple-icons
```

Oder mit Yarn:

```bash
yarn add apple-icons
```

## Verwendung

Importiere die gewünschten Icons in deine React-Komponenten und verwende sie wie folgt:

```javascript
import { AppleLogoBold } from "apple-icons";
import "./App.css";

function App() {
  return (
    <div>
      <AppleLogoBold className="fill-black" />
    </div>
  );
}

export default App;
```

## Anpassung

Jedes Icon kann durch das Hinzufügen von Props angepasst werden:

- **`className`**: Fügt dem `<svg>`-Tag eine CSS-Klasse hinzu.
- **`width` und `height`**: Ändert die Größe des Icons.
- **`color`**: Ändert die Farbe des Icons (wenn die `currentColor`-Einstellung verwendet wird).

Beispiel:

```javascript
<AppleLogoBold className="custom-icon" width="50px" height="50px" />
```

## Entwicklung

Um das Paket lokal zu entwickeln, folge diesen Schritten:

1. Klone das Repository:

    ```bash
    git clone https://github.com/jonas-is-coding/apple-icons.git
    ```

2. Wechsle in das Verzeichnis:

    ```bash
    cd apple-icons
    ```

3. Installiere die Abhängigkeiten:

    ```bash
    npm install
    ```

4. Führe den Build-Prozess aus:

    ```bash
    npm run build
    ```

## Contributing

Beiträge sind willkommen! Wenn du Vorschläge zur Verbesserung hast oder neue Icons hinzufügen möchtest, erstelle bitte einen Pull-Request. Beachte dabei bitte folgende Richtlinien:

- Stelle sicher, dass alle Tests bestehen.
- Achte darauf, dass die neuen Icons gut dokumentiert sind.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe die [LICENSE](/LICENSE.md) Datei für Details.

## Kontakt

Wenn du Fragen hast, kannst du mich über [GitHub](https://github.com/jonas-is-coding) kontaktieren.