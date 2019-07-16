const chalk = require("chalk");
const yargs = require("yargs");
const log = console.log;
const getNotes = require("./notes");

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
  handler: () => {
    console.log("Adding a new note");
  }
});

// Create the list command
yargs.command({
    command: "list",
    describe: "Lists all notes",
    handler: () => {
        console.log("Listing all the notes...")
    }
})

// Create the read command
yargs.command({
    command: "read",
    describe: "Reads a note",
    handler: () => {
        console.log("Reading a note...")
    }
})

// Create the read command

log(yargs.argv);
