const inquirer = require('inquirer');
const fs = require('fs');
const {Shapes, Square, Circle, Triangle} = require('./lib/shapes')

function generateLogo(){
    `${initials}

    ${textColor}

    ${logoShape}

    ${shapeColor}
    `
};


inquirer.prompt([
    {
        type:'input',
        name:'initials',
        message:'Which are the initials you want to display in the logo? (min: 1 character - max: 3 character)',
        validate: initialsInput =>{
            if(initialsInput && initialsInput.length < 4){
                return true
            } else{
                console.log('Please enter valid initials! (min: 1 character - max: 3 character).');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'textColor',
        message:'Input the color of the text (color keyword or a hexadecimal number).',
        validate: textColorInput =>{
            if(textColorInput){
                return true;
            } else{
                console.log('Please choose a valid color!')
                return false;
            }
        }
    },
    {
        type:'list',
        name:'logoShape',
        message:'Please choose a shape for your logo.',
        choices: ['Square', 'Circle', 'Triangle']
    },
    {
        type:'input',
        name:'shapeColor',
        message:'Input the color of the shape (color keyword or a hexadecimal number).',
        validate: shapeColorInput =>{
            if(shapeColorInput){
                return true;
            } else{
                console.log('Please choose a valid color!')
                return false;
            }
        }
    },
])
.then((data) =>{
    const createLogo = generateLogo(data);
    console.log(createLogo);

    fs.writeFile('yourlogo.txt', createLogo, (err) => err ? console.error(err) : console.log('Logo created succesfully'))
});