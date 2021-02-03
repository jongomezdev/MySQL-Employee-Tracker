const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const figlet = require("figlet");
const colors = require("colors");

figlet("Employee Tracker", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
  }
  console.log(data.rainbow);
});

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "~HG)9Pdw9Y4ZgnPW",
  database: "top_songsDB",
});
