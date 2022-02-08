const db = require('../db/connection');
const cTable = require('console.table');

function viewAllDep() {
    const sql = `SELECT * FROM department`;
  
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        } else {
        console.table(rows)
        }
    });
}

function viewAllRole() {
    
}

function viewAllEmp() {
    
}

module.exports = { viewAllDep, viewAllRole, viewAllEmp }