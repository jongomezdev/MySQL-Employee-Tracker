const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const figlet = require("figlet");
const colors = require("colors");

// Opening Graphic
figlet("Employee Tracker", (err, data) => {
  if (err) throw err;
  console.log(data.rainbow);
});

// Establish connection with database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "~HG)9Pdw9Y4ZgnPW",
  database: "employee_tracker",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected");
  init();
});

function init() {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "Welcome, please select an action:",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee roles",
        "Exit",
      ],
    })
    .then(({ choice }) => {
      switch (choice) {
        case "View all departments":
          viewDep();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmp();
          break;
        case "Add a department":
          addDep();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmp();
          break;
        case "Update employee roles":
          update();
          break;
        default:
          connection.end();
      }
    });
}

// View departments
function viewDep() {
  connection.query("SELECT * FROM department", (err, data) => {
    if (err) throw err;
    console.table(data);
    init();
  });
}

// Add departments, roles, employees

// View departments, roles, employees

// Update employee roles
