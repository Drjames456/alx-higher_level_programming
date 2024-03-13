#!/usr/bin/node
// Import Rectangle from '4-rectangle.js'
const Rectangle = require('./4-rectangle.js');

class Square extends Rectangle {
  constructor (size) {
    super(size, size); // Call Rectangle's constructor
  }
}

// If you're not using Square in this file, export it for use elsewhere
module.exports = Square;

// To address the 'unused variable' error, you could also create a Square instance
// or export Square if you plan to use it in another file. Here's how to export:
// module.exports = Square;
