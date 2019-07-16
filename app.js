const chalk = require("chalk");
const log = console.log;
// Node does not support ES6 at the moment - This wouldn't work: import validator from "validator";
const getNotes = require("./notes");

console.log(getNotes());
const msg = chalk.green.bold.inverse("Success!");

log(msg);
