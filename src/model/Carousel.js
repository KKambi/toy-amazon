const { pool } = require('../javascripts/mysql_pool.js');

const Carousel = {
    PARAMS_NUMBER: 1,

    async create(params){
        try {
            try {
                if (Object.keys(params).length !== this.PARAMS_NUMBER) throw "Params Error"
            } catch (err){
                console.log(err)
                return false;
            }
            const insertQuery = `INSERT INTO carousel (name) VALUES (
                '${params.name}',
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

    async find(carouselId){
        try {
            const findQuery = `SELECT * FROM carousel WHERE user='${carouselId}';`
            const connection = await pool.getConnection(async conn => conn);
            try {
                const [rows] = await connection.query(findQuery);
                connection.release();
                if (rows.length) return rows;
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
            const findAllQuery = `SELECT * FROM carousel;`
            const connection = await pool.getConnection(async conn => conn);
            try {
                const [rows] = await connection.query(findAllQuery);
                connection.release();
                if (rows.length) return rows;
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

    async update(carouselId, attribute, value){
        try {
            const updateQuery = `UPDATE carousel SET ${attribute} = '${value}' WHERE user='${carouselId}'`
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

    async delete(carouselId){
        try {
            const deleteQuery = `DELETE carousel WHERE user='${carouselId}'`
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
    Carousel
};