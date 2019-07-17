# CLI Notes App

## Overview

This is a simple note-taking app that works in the command line.
I have built it as my first project using Node.js.
All javascript code is in accordance to ES6 syntax.

## Motivation
This app was built in the context of the 

## Functionality

Any user can add, remove, read one note and list all notes taken.

## Dependencies

I have used the following npm packages:
- [Chalk](https://www.npmjs.com/package/chalk) - for styling error messages;
- [Validator](https://www.npmjs.com/package/validator) - for validating user input;
- [Yargs](https://www.npmjs.com/package/yargs) - for getting user input.

## Usage

After cloning the repo, any user can run the following commands in the terminal:

- `node app.js add --title="" --body=""` to add a note;
- `node app.js remove --title=""` to remove a note;
- `node app.js read --title=""` to read/fetch a specific note;
- `node app.js list --title="" --body=""` to list all notes.

