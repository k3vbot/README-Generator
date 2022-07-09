// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Write a project description",
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: "Describe the use case for your project",
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can one make contributions',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'What are the test instructions for the project',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your Github username',
        name: 'username'
    },
    {
        type: 'input',
        message: "Where can you be contacted?",
        name: 'contact'
    },
    {
        type: 'list',
        message: "Choose a license for your project",
        choices: ['MIT', 'Mozilla Public License', 'Apache License', 'Boost Software License'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./generated-readme/${fileName}.md`, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been generated");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(userResponses => {
            const markdown = generateMarkdown(userResponses);
            writeToFile(userResponses.title, markdown);
        });
};

// Function call to initialize app
init();
