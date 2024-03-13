#!/usr/bin/node
// Assuming you're using CommonJS modules, as in a Node.js environment

// Import the list from '100-data.js'
const { list } = require('./100-data.js');

// Compute the new list by mapping each value to its value multiplied by its index
const newList = list.map((value, index) => value * index);

// Print both the initial list and the new list
console.log(list);
console.log(newList);
