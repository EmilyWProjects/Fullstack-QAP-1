# CLI App: Passkey Generator

## Description
This program will generate a random passkey through a command line interface. It can accept user-customizabe features such as lengh, numbers, upper and lower case letters, and special characters.  Be sure to try them all! Default settings are a length of 8 characters and all lower case!


## Menu

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