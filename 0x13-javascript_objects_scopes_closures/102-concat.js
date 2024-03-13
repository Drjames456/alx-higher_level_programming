#!/usr/bin/node
// Require the file system module
const fs = require('fs');

// Extract file paths from command-line arguments
const [,, sourceFile1, sourceFile2, destinationFile] = process.argv;

// Read the content of the first source file
fs.readFile(sourceFile1, 'utf8', (err, data1) => {
  if (err) throw err;

  // Read the content of the second source file
  fs.readFile(sourceFile2, 'utf8', (err, data2) => {
    if (err) throw err;

    // Concatenate the content of both files
    const combinedData = data1 + data2;

    // Write the combined content to the destination file
    fs.writeFile(destinationFile, combinedData, (err) => {
      if (err) throw err;
      console.log('The files were concatenated successfully!');
    });
  });
});
