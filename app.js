const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const figlet = require("figlet");
const colors = require("colors");

// Opening Graphic
figlet("Employee Tracker", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
  }
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

async function searchDB() {
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

// Add departments, roles, employees

// View departments, roles, employees

// Update employee roles
