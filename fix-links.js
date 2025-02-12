import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function fixLinks(filePath) {
  let content = readFileSync(filePath, 'utf8');
  
  // Fix relative links with ../../
  content = content.replace(/\]\(\.\.\/..\//g, '](/');
  
  // Fix relative links with ../
  content = content.replace(/\]\(\.\.\//g, '](/');
  
  // Fix .html extensions
  content = content.replace(/\.html\)/g, '')
  
  // Fix relative image paths
  content = content.replace(/\!\[(.*?)\]\(\.\.\/..\//g, '![$1](/');
  content = content.replace(/\!\[(.*?)\]\(\.\.\//g, '![$1](/');
  
  // Update VM documentation links
  content = content.replace(/\]\(\/vm\//g, '](/reference/turbo-vm/');
  
  writeFileSync(filePath, content);
}

function processDirectory(dir) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.md')) {
      fixLinks(fullPath);
    }
  });
}

processDirectory('src');
