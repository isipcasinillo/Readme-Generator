const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = (answer) => `
# **Readme-Generator**


![GitHub License](https://img.shields.io/badge/license-${answer.license}-blue.svg)

## **Project Title**

${answer.title}

## **Repository Description**

${answer.description}

## **Application**

${answer.application}
To create a dynamic README for future repositories and to showcase the usage and terms.

## **Table of Contents**

- [ProjectTitle](#Project-Title)
- [Repository Description](#Repository-Description)
- [Application](#Application)
- [Table of Contents](#Table-of-Contents)
- [Installation Instruction](#Installation-Instruction)
- [Usage Information](#Usage-Information)
- [Contribution Guidelines](#Contribution-Guidelines)
- [Test Instructions](#Test-Instructions)
- [Questions](#Questions)

## Installation Instruction

${answer.instruction}
Instructions for running the program to generate a readme file in VSCODE

    1. Update node.js
    2. install inquirer
    3. run node Index.js in command line


## Usage Information

This Node application is for github readme repositories using VSCODE. Furthermore, ${answer.usage}

## License

This repository is Licensed with ${answer.license}
## Contribution

${answer.contribution}

## Test Instructions

${answer.test}

## Questions 

If you have any questions or bugs to report, feel free to contact the development team using this email ${answer.email}. Interested with our work? View our projects at ${answer.link}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Github Title?',
  },
  {
      type: 'input',
      name: 'description',
      message: 'Write a description?',
  },
  {
    type: 'input',
    name: 'link',
    message: 'What is your Github link?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your Email address?',
  },
  {
    type: 'input',
    name: 'application',
    message: 'What is application of this program?',
  },
  {
    type: 'input',
    name: 'instruction',
    message: 'Enter your Instruction',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter your usage terms',
  },
  {
      type: 'input',
      name: 'license',
      message: 'Enter your license',
  },
  {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution information',
  },
  {
      type: 'input',
      name: 'test',
      message: 'Enter your Test information',
  },
  ])
  .then((answer) => {
    const MDPageContent = generateMD(answer);

    fs.writeFile('README.md', MDPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
