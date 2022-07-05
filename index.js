// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What title of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Write a project description",
        name: 'description',
    },
    {
        type: 'input',
        message: "Describe the installation requirements",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Describe the use case for your project",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Where can you be contacted?",
        name: 'email'
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
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been generated");
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Thank you for your responses.");
        console.log("Generating your README");
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);

        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
