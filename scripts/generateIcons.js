const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../src/symbolSet.json');

const outputDir = path.join(__dirname, '../icons');

const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function createSVGFile(symbolName, pathData, weight) {
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="${pathData}" />
        </svg>
    `;
    const fileName = `${symbolName}-${weight}.svg`;
    const filePath = path.join(outputDir, fileName);
    fs.writeFileSync(filePath, svgContent, 'utf-8');
    console.log(`SVG saved: ${filePath}`);
}

for (const [symbolName, symbolEntry] of Object.entries(data.symbols)) {
    for (const [weight, entry] of Object.entries(symbolEntry)) {
        createSVGFile(symbolName, entry.path, weight);
    }
}