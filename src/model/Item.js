const { pool } = require('../javascripts/mysql_pool.js');

const Item = {
    PARAMS_NUMBER: 3,

    async create(params){
        try {
            try {
                if (Object.keys(params).length !== this.PARAMS_NUMBER) throw "Params Error"
            } catch (err){
                console.log(err)
                return false;
            }
            const insertQuery = `INSERT INTO item (carousel_id, name, url) VALUES (
                '${params.carousel_id}',
                '${params.name}',
                '${params.url}'
            );`
            const connection = await pool.getConnection(async conn => conn);
            try {
                await connection.query(insertQuery);
                connection.release();
                return true;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err}`);
            connection.release();
            return false;
        }
    },

    async find(itemId){
        try {
            const findQuery = `SELECT * FROM item WHERE itemId='${itemId}';`
            const connection = await pool.getConnection(async conn => conn);
            try {
                const [rows] = await connection.query(findQuery);
                connection.release();
                if (rows.length) return rows[0];
                return false;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err}`);
            return false;
        }
    },

    async findAll(){
        try {
            const findAllQuery = `SELECT * FROM item;`
            const connection = await pool.getConnection(async conn => conn);
            try {
                const [rows] = await connection.query(findAllQuery);
                connection.release();
                return rows;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err}`);
            return false;
        }
    },

    async update(itemId, attribute, value){
        try {
            const updateQuery = `UPDATE item SET ${attribute} = '${value}' WHERE itemId='${itemId}'`
            const connection = await pool.getConnection(async conn => conn);
            try {
                await connection.query(updateQuery);
                connection.release();
                return true;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err}`);
            return false;
        } 
    },

    async delete(itemId){
        try {
            const deleteQuery = `DELETE item WHERE item='${itemId}'`
            const connection = await pool.getConnection(async conn => conn);
            try {
                await connection.query(deleteQuery);
                connection.release();
                return true;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err}`);
            return false;
        }   
    }
};

module.exports = {
    Item
};

// (async() => {console.log(await Item.findAll())})();