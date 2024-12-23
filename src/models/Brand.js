const {pool} = require('../config/db');

const getAllBrand = async () => {
    return new Promise((resolve, reject ) => {
        const query = 'SELECT * FROM brand; ';
        pool.query(query, (error, results) => {
            if(error){
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

const findName = async(name) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM brand WHERE name LIKE ?';
        const likeName = `%${name}%`
        pool.query(query, likeName, (error, results) => {
            if(error){
                reject(error);
                return;
            }
            resolve(results[0]);
        });
    });
}

const storeBrand = async(name, description) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO brand (name, description) VALUES (?, ?); ';
        pool.query(query, [name, description], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        })
    })
}

module.exports = {
    getAllBrand,
    storeBrand,
    findName
};