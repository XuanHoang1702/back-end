const {pool} = require('../config/db');

const storeLiked = async(user_id, product_id) =>{
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO likes (user_id, product_id) VALUES (?, ?);`;
        pool.query(query, [user_id, product_id], (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

module.exports = {
    storeLiked,
}