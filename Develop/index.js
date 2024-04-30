
const fs = require('fs');
const inquirer = require('inquirer')
// const generateLogo = require('./lib/generateLogo');
const fileName = './examples/newLogo.svg'
const Shapes = require("./lib/shapes")


// const { type } = require('os');

const questions = [
   {
    type: 'input',
    message: 'Enter up to 3 characters for your logo',
    name: 'text'
   },
   {
    type: 'input',
    message: 'Enter a color for your logo text',
    name: 'textColor'
   },
   {
    type: 'list',
    message: 'Choose a shape for your logo',
    name: 'logoShape',
    choices: ['Circle', 'Triangle', 'Square']
   },
   {
    type: 'input',
    message: 'Enter a color for your shape choice',
    name: 'logoColor'
   },

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('error')
        } else {
            console.log('success')

        }
    })
}


function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const page = generateLogo(response)
        writeToFile(fileName, page)
    })
}

// Function call to initialize app
init();