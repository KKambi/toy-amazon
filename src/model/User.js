const { pool } = require('../interfaces/connections.js');

const User = {
    find(userId){
        const findQuery = `SELECT * FROM user WHERE user=${userId}`
        pool.getConnection((err, connection) => {
            connection.query(findQuery, (err, rows) => {
                connection.release();
                if (!err) {
                    console.log(rows);
                }
            });
        })
    }
}

console.log(User.find('admin'))