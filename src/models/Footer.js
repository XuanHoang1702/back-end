const {pool} = require('../config/db');

const getFooter = async () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM footer;';
        pool.query(query, (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        })
    })
}

const storeFooter = async (name, link, parent_id, status) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO footer (name, link, parent_id, status)
                        VALUES (?, ?, ?, ?);`;
        pool.query(query, [name, link, parent_id, status], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        });
    });
};

const findFooter = async (name) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM footer WHERE name LIKE ?;`;
        const likeName = `%${name}%`;
        pool.query(query, [likeName], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result[0]);
        });
    });
};

const findParent = async (parent_id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM footer WHERE id = ?;`;
        pool.query(query, [parent_id], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        });
    });
};

module.exports = {
    getFooter,
    storeFooter,
    findFooter,
    findParent
}