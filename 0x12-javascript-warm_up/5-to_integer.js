#!/usr/bin/node
const firstArg = process.argv[2];
const number = Number(firstArg);

if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log('Not a number');
}
