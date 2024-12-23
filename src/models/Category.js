const {pool} = require('../config/db');

const getAllCategory = async () => {
    return new Promise( (resolve, reject) => {
        const query = 'SELECT * FROM category;';
        pool.query(query, (error, result) => {
            if(error){
                reject(error);
                return
            }
            resolve(result);
        });
    });
}

const storeCategory = async (name, description) => {
    return new Promise( (resolve, reject) => {
        const query = 'INSERT INTO category (name, description) VALUES (?, ?);';
        pool.query(query, [name, description], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

const findCategoryName = async (name) => {
    return new Promise( (resolve, reject) => {
        const query = 'SELECT * FROM category WHERE name LIKE ?;';
        const likeName = `%${name}%`
        pool.query(query, likeName, (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result[0]);
        });
    });
}

module.exports = {
    getAllCategory,
    storeCategory,
    findCategoryName,
}