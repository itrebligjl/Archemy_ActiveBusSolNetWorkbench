const mysql = require('mysql');

/** connect to MySQL database */
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'archemy_workbench_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});
