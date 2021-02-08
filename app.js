const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const figlet = require("figlet");
const colors = require("colors");
const { restoreDefaultPrompts } = require("inquirer");

// Opening Graphic
// figlet("Employee Tracker", (err, data) => {
//   if (err) throw err;
//   console.log(data.rainbow);
// });

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
  console.log("Connected".green);
  init();
});

function init() {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "Please select an action:",
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
// ***************
// View functions
// ***************
function viewDep() {
  connection.query("SELECT * FROM department", (err, data) => {
    if (err) throw err;
    console.table(data);
    init();
  });
}

function viewRoles() {
  connection.query("SELECT * FROM role", (err, data) => {
    if (err) throw err;
    console.table(data);
    init();
  });
}
function viewEmp() {
  connection.query("SELECT * FROM employee", (err, data) => {
    if (err) throw err;
    console.table(data);
    init();
  });
}

// ***************
// Add functions
// ***************
function addDep() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What would you like to name this department?",
      },
    ])
    .then((answer) => {
      const query = "INSERT INTO department SET ? ";
      connection.query(
        query,
        {
          name: answer.department,
        },
        (err) => {
          if (err) throw err;
          console.log(`${answer.department} has been added`.green);
          init();
        }
      );
    });
}

function addRole() {
  const sql = "SELECT * FROM department";
  connection.query(sql, (err, res) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "What is the title for the new role?",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              console.log("Please enter a role title".red);
            }
          },
        },
        {
          name: "salary",
          type: "input",
          message: "What is the salary for the new role?",
          validate: (value) => {
            if (isNaN(value) === false) {
              return true;
            }
            console.log("Please enter a valid salary".red);
          },
        },
        {
          name: "department",
          type: "list",
          choices: () => {
            let roles = [];
            for (let i = 0; i < restoreDefaultPrompts.length; i++) {
              roles.push(res[i].name);
            }
            return roles;
          },
          message: "What department is this role under?",
        },
      ])
      .then((answer) => {
        let choice;
        for (let i = 0; i < res.length; i++) {
          if (res[i].name === answer.department) {
            choice = res[i];
          }
        }
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            department_id: choice.id,
          },
          (err) => {
            if (err) throw err;
            console.log(`${answer.title} role has been added!`);
            init();
          }
        );
      });
  });
}

function addEmp() {}

function update() {}

// Add departments, roles, employees

// View departments, roles, employees

// Update employee roles
