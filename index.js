// TODO: Include packages needed for this application
// 'import' Statements are used to bring functions from other files/libraries into the current file.
// ES6 Modules (ECMAScript 6) is the official name of the specification.
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
// import fs - This imports the built-in 'fs' (file system) module, which provides methods for interacting with the file system.
// import inquirer - This imports the 'inquirer' module, which is used to prompt users for interacting with the file system.
// import generateMarkdown - This imports the 'generateMarkdown' from a file located in the directory... contains a function for generating markdown

// TODO: Create an array of questions for user input
// Sample Given: const questions = [];
// Each question in the array is an object with various properties that describe how 'inquirer' should prompt the user.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (input) => input ? true : 'Title is required.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        validate: (input) => input ? true : 'Description is required.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the GitHub link to clone the repository from:',
        validate: (input) => input ? true : 'Installation instructions are required.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: (input) => input ? true : 'Usage instructions are required.',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        validate: (input) => input ? true : 'Credits information is required. Enter "None" if no collaborators.',
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
        validate: (input) => input ? true : 'Test instructions are required.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
        validate: (input) => input ? true : 'GitHub username is required.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: (input) => input ? true : 'Email address is required.',
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md generated successfully!')
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
