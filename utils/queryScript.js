const db = require('../db/connection');
const cTable = require('console.table');

function viewAllDep() {
    const sql = `SELECT * FROM department`;
  
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        } else {
        console.log('');
        console.table(rows);
        console.log('');
        console.log('Press an arrow key to continue or CTRL+C to quit');
        }
    });
}

function viewAllRole() {
    const sql = `SELECT role.id, role.title, role.salary, department.name AS department
                 FROM role
                 LEFT JOIN department ON role.department_id=department.id`;
  
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        } else {
        console.log('');
        console.table(rows);
        console.log('');
        console.log('Press an arrow key to continue or CTRL+C to quit');
        }
    });
}

function viewAllEmp() {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id
                 FROM employee
                 LEFT JOIN role ON employee.role_id=role.id
                 LEFT JOIN department ON role.department_id=department.id`;
                 
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        } else {
        console.log('');
        console.table(rows);
        console.log('');
        console.log('Press an arrow key to continue or CTRL+C to quit');
        }
    });
}

function addDepartment(data) {
    const sql = `INSERT INTO department (name)
                 VALUES (?)`;
    const params = [data.depName];

    db.query(sql, params, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log('');
            console.log('Department \'' + data.depName + '\' added to the database')
            console.log('Press an arrow key to continue or CTRL+C to quit');
        }
    });
}

function addRole() {

}

function addEmployee() {

}

function updateEmployee() {

}

// from stack overflow, for capitalizing/formatting entries in a unified way
function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}

module.exports = { viewAllDep, viewAllRole, viewAllEmp, addDepartment, addRole, addEmployee, updateEmployee }