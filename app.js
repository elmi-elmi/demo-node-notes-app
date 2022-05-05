const fs = require('fs');

fs.writeFileSync('notes.txt', 'This is my first text file');
fs.appendFileSync('notes.txt', '\n');
fs.appendFileSync('notes.txt', 'This is my second text file');

// add a break line after each file


