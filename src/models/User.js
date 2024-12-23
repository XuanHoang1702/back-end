const {pool} = require('../config/db')

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT name, email, phone FROM users;';
        pool.query(query, (err, results) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(results);
        });
    });
};

const createUser = (name, email, phone, password) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)';
        pool.query(query, [name, email, phone, password], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        pool.query(query, [email], (err, results) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(results[0]);
        });
    });
}

const findById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT id, name, email, phone, rule FROM users WHERE id = ?';
        pool.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(results[0]);
        });
    });
}

module.exports = {
    getAllUsers,
    createUser,
    getUserByEmail,
    findById
};
