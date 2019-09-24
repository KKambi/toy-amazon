const mysql = require('mysql');

// MySQL Connect
const pool = mysql.createPool({
    host    : process.env.MYSQL_HOST,
    port    : 3306,
    user    : process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 20,
    waitForConnections: true
})
const findQuery = `SELECT * FROM user WHERE user=admin`
pool.getConnection((err, connection) => {
    connection.query(findQuery, (err, rows) => {
        connection.release();
        if (!err) {
            console.log(rows);
        }
    });
})
module.exports = {
    pool
}