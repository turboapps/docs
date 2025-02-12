import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function updateLinks(filePath) {
    const content = readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/\/reference\//g, '/client/');
    writeFileSync(filePath, updatedContent);
}

function processDirectory(dir) {
    const files = readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = join(dir, file);
        const stat = statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.md')) {
            console.log(`Processing ${fullPath}`);
            updateLinks(fullPath);
        }
    });
}

// Update all markdown files in the client directory
processDirectory(join(__dirname, 'src', 'client'));
console.log('Link updates complete');
