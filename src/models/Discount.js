const { pool } = require('../config/db');

const getAllDiscount = async () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM discounts;`;
        pool.query(query, (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        });
    });
};

const createDiscount = async (product_id, percentage, start_date, end_date) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO discounts (product_id, percentage, start_date, end_date)
                        VALUES (?, ?, ?, ?);`;
        pool.query(query, [product_id, percentage, start_date, end_date], (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        });
    });
};

const deleteDiscount = async (id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM discounts WHERE id = ?;`;
        pool.query(query, [id], (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        });
    });
};

const findProduct = async (product_id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM discounts WHERE product_id = ?;`;
        pool.query(query, [product_id], (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result[0]);
        });
    });
}

module.exports = {
    getAllDiscount,
    createDiscount,
    deleteDiscount,
    findProduct,
};
