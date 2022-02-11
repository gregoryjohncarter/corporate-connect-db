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
        // having an issue where inquirer covers up part of 
        // the return with next questions so this is a workaround
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
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
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
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
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        }
    });
}

function addDepartment(data) {
    const sql = `INSERT INTO department (name)
                 VALUES (?)`;
    const params = [toTitleCase(data.depName)];

    db.query(sql, params, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log('');
            console.log('Department \'' + toTitleCase(data.depName) + '\' added to the database')
            console.log('Press an arrow key to continue or CTRL+C to quit');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
        }
    });
}

function addRole(data) {
    const sql = `INSERT INTO role (title, salary, department_id)
                 VALUES (?, ?, ?)`;
    const params = [toTitleCase(data.title), data.salary, data.department_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log('');
            console.log('Role \'' + toTitleCase(data.title) + '\' added to the database')
            console.log('Press an arrow key to continue or CTRL+C to quit');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
        }
    });
}

function addEmployee(data) {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                 VALUES (?, ?, ?, ?)`;
    const params = [toTitleCase(data.first_name), toTitleCase(data.last_name), data.role_id, data.manager_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log('');
            console.log('Employee \'' + toTitleCase(data.last_name) + '\' added to the database')
            console.log('Press an arrow key to continue or CTRL+C to quit');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
        }
    });
}

function updateEmployee(data) {
    const sql = `UPDATE employee SET role_id = ? 
                 WHERE id = ?`;
    const params = [data.role_id, data.id];
    
    db.query(sql, params, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log('');
            console.log('Employee \'' + (data.id) + '\' updated in the database')
            console.log('Press an arrow key to continue or CTRL+C to quit');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
        }
    });
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