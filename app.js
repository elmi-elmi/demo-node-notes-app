const getNotes = require('./notes.js');
const chalk = require('chalk');


const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding note');
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log('Removing note');
    }
})

yargs.command({
    command:'list',
    describe:'List all notes',
    handler:function(){
        console.log('Listing all notes');
    }
}
)
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(){
        console.log('Reading a note');
    }
})

console.log(yargs.argv);

