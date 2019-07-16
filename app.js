const chalk = require("chalk");
const log = console.log;
// Node does not support ES6 at the moment - This wouldn't work: import validator from "validator";
const getNotes = require("./notes");

// This is the command that the user will input: the first word after the filename in the run command.
const command = process.argv[2];

// We can access commands from the terminal with process.
// Process gives us an array. The first and second will be paths. One to the node.js executable in the machine and the second to the file that has been executed.
// The third is a string from the argument.

if (command === "add") {
  log("Adding a note!");
} else if (command === "remove") {
  log("Removing a note!");
}
