#!/usr/bin/node
const fs = require('fs');

function readAndPrintFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

const filePath = process.argv[2];
if (!filePath) {
    console.error("Usage: node script.js <file_path>");
    process.exit(1);
}

readAndPrintFile(filePath);


