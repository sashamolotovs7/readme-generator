// TODO: Include packages needed for this application
    //'import' Statements are used to bring functions from other files/libraries into the current file.
    //ES6 Modules (ECMAScript 6) is the official name of the specification.
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import { type } from 'os';
import Choices from 'inquirer/lib/objects/choices.js';
//import fs - This imports the built-in 'fs' (file system) module, which provides methods for interacting with the file system.
//import inquirer - This imports the 'inquirer' module, which is used to promt users for interacting with the file sysetm.
//import generateMarkdown - This imports the 'generateMarkdown' from a file located in the directory... contains a function for generating markdown


// TODO: Create an array of questions for user input
//Sample Given: //const questions = [];

//Each question in the array is an object with various properties that describe how 'inquirer' should promt the user.
const questions = [
//
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project!?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the Github link to clone the repository from:',
    },


    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators, if any, with links to their Github profiles.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'To run the application, enter: index.js',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated Sucessfully!!!')
    );
}


// TODO: Create a function to initialize app
// function init() {}
function init() {
    inquirer.prompt(questions).then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    });
  }

// Function call to initialize app
init();
