const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

// This function adds a note and is called by the add command.
// This function will call on loadNotes().
// If the new title already exists, it will log so.
// If not, it will add the new note to the array that is returned and call on savedNotes.
const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    savednotes(notes);
    console.log("New note added.");
  } else {
    console.log("Note title taken.");
  }
};

// This function will turn the updated notes array into JSON and save it to the file.
const savednotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// This function will try and get the existing notes from "notes.json".
// If "notes.json" doesn't exist, the function will return an empty array.
// If the file exists, the function will return a Javascript array with the existing notes.
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

// This function removes a note and is called by the remove command
const removeNote = title => {
  const notes = loadNotes();

  const noteToRemove = notes.filter(note => note.title === title);
  if (noteToRemove.length === 0) {
    console.log(chalk.red.inverse("There is no note with that title."));
  } else {
    const notesToKeep = notes.filter(note => note.title !== title);
    savednotes(notesToKeep);
    console.log(
      chalk.green.inverse(`The note with title ${title} has been removed.`)
    );
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
