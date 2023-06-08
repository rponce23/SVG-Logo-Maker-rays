const inquirer = require('inquirer');
const fs = require('fs');


function generateLogo(data){
    if(data.logoShape === 'Square'){
        
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${data.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.initials}</text></svg>;`;
    } else if(data.logoShape === 'Circle'){
        
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="${data.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.initials}</text></svg>;`;
    } else if(data.logoShape === 'Triangle'){
        
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.initials}</text></svg>;`;
    }

    
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
.then((data)=>{
    const createLogo = generateLogo(data);
    console.log(createLogo);

    fs.writeFile('yourlogo.svg', createLogo, (err) => err ? console.error(err) : console.log('Successfully created file!'))
});