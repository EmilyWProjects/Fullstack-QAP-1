#!/usr/bin/env node


//Imports
import process from 'node:process';


//Takes value from user input
const args = process.argv.slice(2);

//Default values
let length = 8;
let characters = lower
let usenumbers = false
let useupper = false
let usespecial = false


//Possible characters
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const special = "!@#$%^&*_+-=?";


//Menu display
function menuDisplay() {
    console.log(`
CLI Password Generator Application

Usage:
  keygen [options]

Options:
  --help          Show help message
  --length         Set password length 
  --numbers        Include numbers
  --upper          Include uppercase letters
  --special        Include special characters

  Example use:
    node keygen.js --length 10 --special


`);
}

//Menu functionality
let i = 0;
while (i < args.length) {
  const arg = args[i];
  switch (arg) {
    case "--help":
      menuDisplay();
      break;
    case "--length":
      length = parseInt(args[++i], 10);
      break;
    case "--numbers":
      usenumbers = true;
      break;
    case "--upper":
      useupper = true;
      break;
    case "--special":
      usespecial = true;
      break;
    default:
        console.error(`Unknown arugment: ${args[i]}`);
        menuDisplay();
  }
  i++;
}


//Generate the password
function passwordGeneration(length, usenumbers, useupper, usespecial) {
  
  if (usenumbers) characters += numbers;
  if (useupper) characters += upper;
  if (usespecial) characters += special;

  // Build the password one character at a time
  let passwordResult = "";
  for (let i = 0; i <= length; i++) {
    const randomizer = Math.floor(Math.random() * characters.length);
    passwordResult += characters[randomizer];
  }
  return  passwordResult;
}



//Display generated password
const passwordResult = passwordGeneration(length, usenumbers, useupper, usespecial);
console.log(`Password result: ${passwordResult}`);