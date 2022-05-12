const fs = require('fs');


const getNotes = function(){
    return 'Your notes...'
}

const addNotes = function(title, body){
    console.log('addNote....')

    const notes = loadNotes();

    const duplicateNotes = notes.filter(note=>note.title===title)

    if(!duplicateNotes.length){
        notes.push({title, body})
        saveNotes(notes)
        console.log('new note added')
    }
    else{
        console.log('Note title taken!')

    }

}

const saveNotes=function(notes){
    console.log('save notes')
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
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

module.exports = {
    getNotes,
    addNotes
}