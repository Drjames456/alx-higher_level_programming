#!/usr/bin/node
const fs = require('fs');

function writeStringToFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('File has been written successfully.');
    });
}

const filePath = process.argv[2];
const content = process.argv[3];

if (!filePath || !content) {
    console.error('Usage: node script.js <file_path> <string_to_write>');
    process.exit(1);
}

writeStringToFile(filePath, content);
