const mysql = require("mysql");

async function db() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root", // MySQL username
    password: "password", // MySQL password
    database: "farmerdetails", // MySQL database name
  });

  return connection;
}

module.exports = db;
