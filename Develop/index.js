
const fs = require('fs');
const inquirer = require('inquirer')
// const generateLogo = require('./lib/generateLogo');
const fileName = './examples/newLogo.svg'
const { Circle, Triangle, Square } = require("./lib/shapes")


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

function generateLogo(data) {
    const { text, textColor, logoShape, logoColor } = data;
  
    // Validate input (optional)
    // if (text.length > 3) {
    //   throw new Error('Logo text cannot exceed 3 characters');
    // }
  
    let svgContent; // Variable to store the generated SVG content
  
    switch (logoShape) {
      case 'Circle':
        svgContent = new Circle(logoColor, textColor, text);
        break;
      case 'Triangle':
        svgContent = new Triangle(logoColor, textColor, text);
        break;
      case 'Square':
        svgContent = new Square(logoColor, textColor, text);
        break;
      default:
        throw new Error('Invalid logo shape');
    }
  
    if (svgContent instanceof Circle) {
        return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                ${svgContent.render()}
                </svg>`
    } else if (svgContent instanceof Triangle){
        return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                ${svgContent.render()}
                </svg>`
    } else if (svgContent instanceof Square) {
        return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                ${svgContent.render()}
                </svg>`
    }
  }
  


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