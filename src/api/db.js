// api/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'jdbc:mysql://localhost:3306/dp221407',
    user: 'root',
    password: 'Locbeo2004@',
    database: 'dp221407'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;
