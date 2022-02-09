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
    const sql = `SELECT * FROM role`;
  
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
    const sql = `SELECT * FROM employee`;
  
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