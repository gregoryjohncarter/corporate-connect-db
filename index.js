const { viewAllDep, viewAllRole, viewAllEmp, addDepartment, addRole, addEmployee, updateEmployee } = require('./utils/queryScript');
const db = require('./db/connection.js');
const inquirer = require('inquirer');
const cTable = require('console.table');

// initial questions / index of prompt
function init() {
    return inquirer
           .prompt([
                    {
                        type: 'list',
                        name: 'default',
                        message: 'What would you like to do?',
                        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee\'s role'],
                        default: 0
                    }
                  ])
    .then(answers => {
        if (answers.default === 'View all departments') {
            viewAllDep();
            init();
        } else if (answers.default === 'View all roles') {
            viewAllRole();
            init();
        } else if (answers.default === 'View all employees') {
            viewAllEmp();
            init();
        } else if (answers.default === 'Add a department') {
            queryDepartment();
        } else if (answers.default === 'Add a role') {
            queryRole();
        } else if (answers.default === 'Add an employee') {
            queryEmployee();
        } else if (answers.default ==='Update an employee\'s role') {
            queryUpdate();
        }
    });
}

init();

function queryDepartment() {
    return inquirer
           .prompt([
                    {
                        type: 'input',
                        name: 'depName',
                        message: 'Name the department you would like to add.',
                        validate: nameInput => {
                          if (nameInput) {
                            return true;
                          } else {
                            console.log('You need to enter a department name!');
                            return false;
                          }
                        }
                    }
                  ])
             .then(answers => { addDepartment(answers)}).then(() => {init()});
}

function queryRole() {
    return inquirer
           .prompt([
                    {
                        type: 'input',
                        name: 'title',
                        message: 'Name the role you would like to add.',
                        validate: roleInput => {
                          if (roleInput) {
                            return true;
                          } else {
                            console.log('You need to enter a role name!');
                            return false;
                          }
                        }
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: 'Register a salary for this role.',
                        validate: salaryInput => {
                          if (typeof parseInt(salaryInput) === 'number') {
                            return true;
                          } else {
                            console.log('You need to enter a valid salary');
                            return false;
                          }
                        }
                    },
                    {
                        type: 'input',
                        name: 'department_id',
                        message: 'Input the department ID for this role.',
                        validate: departmentInput => {
                          if (typeof parseInt(departmentInput) === 'number') {
                            return true;
                          } else {
                            console.log('You need to enter a number!');
                            return false;
                          }
                        }
                    }
                  ])
            .then(answers => { addRole(answers)}).then(() => {init()});
}

function queryEmployee() {
    return inquirer
           .prompt([
                    {
                        type: 'input',
                        name: 'first_name',
                        message: 'What is the employee\'s first name?',
                        validate: fNameInput => {
                          if (fNameInput) {
                            return true;
                          } else {
                            console.log('Please enter a given name.');
                            return false;
                          }
                        }
                    },
                    {
                        type: 'input',
                        name: 'last_name',
                        message: 'What is the employee\'s last name?',
                        validate: lNameInput => {
                          if (lNameInput) {
                            return true;
                          } else {
                            console.log('Please enter a surname.');
                            return false;
                          }
                        }
                    },
                    {
                        type: 'input',
                        name: 'role_id',
                        message: 'Input the role ID for this employee.',
                        validate: roleInput => {
                          if (typeof parseInt(roleInput) === 'number') {
                            return true;
                          } else {
                            console.log('You need to enter a number!');
                            return false;
                          }
                        }
                    },
                    {
                        type: 'input',
                        name: 'manager_id',
                        message: 'Input the manager ID for this employee.',
                        validate: managerInput => {
                          if (typeof parseInt(managerInput) === 'number') {
                            return true;
                          } else {
                            console.log('You need to enter a number!');
                            return false;
                          }
                        }
                    }
                  ])
            .then(answers => { addEmployee(answers)}).then(() => {init()});
}

function queryUpdate() {
  return inquirer
         .prompt([
                  {
                      type: 'input',
                      name: 'id',
                      message: 'To update role, enter a specific employee ID.',
                      validate: idInput => {
                        if (typeof parseInt(idInput) === 'number') {
                          return true;
                        } else {
                          console.log('You need to enter an ID number!');
                          return false;
                        }
                      }
                  },
                  {
                      type: 'input',
                      name: 'role_id',
                      message: 'Enter a new role ID for the employee.',
                      validate: roleInput => {
                        if (typeof parseInt(roleInput) === 'number') {
                          return true;
                        } else {
                          console.log('You need to enter a role ID number!');
                          return false;
                        }
                      }
                  }
                ])
           .then(answers => { updateEmployee(answers)}).then(() => {init()});
}