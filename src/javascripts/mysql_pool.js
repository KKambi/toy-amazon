// import library
const mysql = require('mysql2/promise');
require('dotenv').config();

// MySQL create pool
class Pool {
    constructor(){}
    createPool(){
        return mysql.createPool({
            host    : process.env.MYSQL_HOST,
            port    : 3306,
            user    : process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            connectionLimit: 20,
            waitForConnections: true
        })
    }
}

export default Pool