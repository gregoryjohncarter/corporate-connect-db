## corporate-connect-db

## Installation
Firstly, you must have Node.js and MySQL installed. Clone the repository to your machine and run 'npm install' while navigated to the root directory to add Inquirer, console.table, and mysql2 packages. 

## Usage
After installation, open the MySQL shell while navigated to the root directory and type the following to set up the database with a valid schema and corresponding values. 'source db/db.sql', 'source db/schema.sql', and 'source db/seeds.sql'. Run 'node index.js' in the command prompt while navigated to the root directory of the repository. Follow along with the Inquirer prompt to select options relating to the corporate database. Options include 'show departments', 'show roles', 'show employees', and also options to add instances of these categories. There is also a feature to update an employee's role. Press CTRL+C to quit the Inquirer prompt. 

## Technologies used
MySQL, Node.js, JavaScript, Inquirer npm

## Demonstration video
<a href='https://drive.google.com/file/d/1U1Com9sLAU702WX3Z2SPytrdUMAbTYDG/view?usp=sharing'>Link</a>