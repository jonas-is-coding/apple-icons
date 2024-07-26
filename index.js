// generate-index.js

const fs = require('fs');
const path = require('path');

// Verzeichnisse
const iconsDir = path.join(__dirname, '../icons');
const indexFilePath = path.join(__dirname, '../icons.js');

// Lese alle SVG-Dateien im icons-Verzeichnis
const files = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));

// Erstelle den Import-Export-Code
let importList = '';
let exportsList = '';

// Generiere Import-Statements
files.forEach(file => {
  const name = path.basename(file, '.svg');
  importList += `import ${name} from './icons/${file}';\n`;
  exportsList += `  ${name},\n`;
});

// Erstelle den Inhalt der index.js-Datei
const content = `${importList}

export {
${exportsList}
};\n`;

// Schreibe die index.js-Datei
fs.writeFileSync(indexFilePath, content);

console.log('index.js has been generated.');