const fs = require('fs');
const chalk = require('chalk');

const getNotes = ()=>{
    return 'Your notes...'
}

const addNotes = (title, body)=>{
    console.log('addNote....')

    const notes = loadNotes();

    const duplicateNotes = notes.filter(note=>note.title===title)

    if(!duplicateNotes.length){
        notes.push({title, body})
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'));
    }
    else{
        console.log(chalk.red.inverse('Note title taken!'));

    }

}

const saveNotes=(notes)=>{
    console.log('save notes')
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
    try{
        console.log('try....(loadNotes)')

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()

        return JSON.parse(dataJson)
    }catch(e){
        console.log('catch....(loadNotes)')
        return []
    }
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const indx =notes.findIndex(note=>note.title===title)
    if(indx>=0){
        notes.splice(indx,1)
        saveNotes(notes)
        console.log(chalk.green.inverse('Note removed'))

    }else{
        console.log(chalk.red.inverse('this title not found'))
    }
}

module.exports = {
    getNotes,
    addNotes,
    removeNote
}