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

module.exports = { viewAllDep, viewAllRole, viewAllEmp }