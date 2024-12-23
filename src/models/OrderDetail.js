const {pool} = require('../config/db');

const createOrderDetail = async (order_id, product_id, quantity, price, subtotal) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO order_details (order_id, product_id, quantity, price, subtotal)
                    VALUES (?, ?, ?, ?, ?);`;
        pool.query(query, [order_id, product_id, quantity, price, subtotal], (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

module.exports = {
    createOrderDetail,
}