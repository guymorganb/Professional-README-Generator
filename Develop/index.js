// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [ 
{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project',
},
{
    type: 'checkbox',
    name: 'tableOfContents',
    message: 'Select what to include in the Table of Contents',
    choices: [
        'Insallation',
        'Usage',
        'Features',
        'Credits',
        'License',
    ],
},
{
    type: 'input',
    name: 'Instalation',
    message: 'How would you describe the instalation process?',
},
{
    type: 'input',
    name: 'Usage',
    message: 'Descibe the usage of this project',
},
{
    type: 'input',
    name: 'Credits',
    message: 'Are there any credits to note for this project?',
},
{
    type: 'list',
    name: 'License',
    message: 'Select a license for your project:',
    choices: [
        'MIT License',
        'Apache License 2.0',
        'GNU General Public License (GPL)',
        'ISC',
        'Unlicense',
        'Artistic license 2.0',
    ]
},
{
    type: 'input',
    name: 'Credits',
    message: 'Are there any credits to note for this project?',
},
{
    type: 'input',
    name: 'Contribution',
    message: 'Enter the contribution guidelines for your project:',
},
{
    type: 'input',
    name: 'Features',
    message: 'Are there any features youd like to include for this project?',
},
{
    type: 'input',
    name: 'Tests',
    message: 'Are there any tests for this project?',
}
];
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        console.log(answers)
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app
init();

