const inquirer = require('inquirer');
const fs = require('fs/promises');
const { Square, Triangle, Circle } = require('./lib/shapes');

async function questions() {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'What text would you like in your logo? (Up to three letters)'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like the text to be?',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like your logo to be?',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: "input",
                name: 'shapeColor',
                message: 'What color would you like the shape to be?',
            }
        ])
}

questions();