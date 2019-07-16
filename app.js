const chalk = require("chalk");
//Yargs will gove us support to command line arguments
const yargs = require("yargs");
const log = console.log;
const notes = require("./notes");

//Customize yargs version
yargs.version("1.1.0");

// We can access commands from the terminal with process.
// Process gives us an array. The first and second will be paths. One to the node.js executable in the machine and the second to the file that has been executed.
// The third is a string from the argument.

//Add, remove, read and list notes

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note content",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  }
});

// Create the list command
yargs.command({
  command: "list",
  describe: "Lists all notes",
  handler: () => {
    console.log("Listing all the notes...");
  }
});

// Create the read command
yargs.command({
  command: "read",
  describe: "Reads a note",
  handler: () => {
    console.log("Reading a note...");
  }
});

// Create the remove command
yargs.command({
  command: "remove",
  describe: "Removes a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.removeNote(argv.title);
  }
});

// Create the read command
yargs.parse();
