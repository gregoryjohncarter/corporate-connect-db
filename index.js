const { viewAllDep, viewAllRole, viewAllEmp } = require('./utils/queryScript');
const db = require('./db/connection.js');
const inquirer = require('inquirer');
const cTable = require('console.table');

function init() {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'default',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees'],
            default: 0
          }
    ])
    .then(answers => {
        if (answers.default === 'View all departments') {
            viewAllDep();
        } else if (answers.default === 'View all roles') {
            viewAllRole();
        } else if (answers.default === 'View all employees') {
            viewAllEmp();
        }
        init();
    });
}

init();

/*
      inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
}

[
    {
        type: 'input',
        name: 'engName',
        message: 'Enter your engineer\'s name',
        validate: engNameInput => {
            if (engNameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engId',
        message: 'Enter your engineer\'s ID',
        validate: engIdInput => {
            if (engIdInput) {
                return true;
            } else {
                console.log('Please enter an ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engEmail',
        message: 'Enter your engineer\'s email',
        validate: engEmailInput => {
            if (engEmailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engGitHub',
        message: 'Enter your engineer\'s GitHub',
        validate: engGitHubInput => {
            if (engGitHubInput) {
                return true;
            } else {
                console.log('Please enter a GitHub username');
                return false;
            }
        }
    },
    {
    type: 'confirm',
    name: 'confirmAddEmployee',
    message: 'Would you like to enter another employee?',
    default: false
    },
    {
        type: 'list',
        name: 'employeePrompt2',
        message: 'Would you like to add an engineer or an intern?',
        when: ({ confirmAddEmployee }) => confirmAddEmployee,
        choices: ['Engineer', 'Intern'],
        default: 0
      }
];

*/ 