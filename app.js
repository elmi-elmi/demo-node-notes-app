const fs = require('fs');
const notes = require('./notes.js');
const chalk = require('chalk');


const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('title:', argv.title);
        console.log('body:', argv.body);
        notes.addNotes(argv.title,argv.body)
    },
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'note title to remove',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        console.log('Removing handler', argv.title);
        notes.removeNote(argv.title)

    },

})

yargs.command({
    command:'list',
    describe:'List all notes',
    handler:()=>{
        notes.printNotes()
    }
}
)
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse();
// console.log(yargs.argv);
//




