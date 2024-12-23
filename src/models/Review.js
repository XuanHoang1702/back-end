const {pool} = require('../config/db');

const createReview = async (user_id, product_id, rating, comment) =>{
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO product_reviews (user_id, product_id, rating, comment)
                        VALUES (?, ?, ?, ?);`;
        pool.query(query, [user_id, product_id, rating, comment], (error, result) =>{
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

module.exports = {
    createReview,
}