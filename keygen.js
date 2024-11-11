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