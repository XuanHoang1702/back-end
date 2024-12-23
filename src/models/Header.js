const {pool} = require('../config/db');

const getHeader = async () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM header;';
        pool.query(query, (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        });
    });
};

const findHeader = async (name) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM header WHERE name LIKE ?;`;
        const likeName = `%${name}%`;
        pool.query(query, [likeName], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result[0]);
        });
    });
}

const storeHeader = async (name, link, status) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO header (name, link, status)
                        VALUES (?, ?, ?);`;
        pool.query(query, [name, link, status], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        });
    });
};

module.exports = {
    getHeader,
    findHeader,
    storeHeader
}