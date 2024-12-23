const {pool} = require('../config/db');

const addImage = async () => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO product_image (product_id, image_url) VALUES (?, ?);';
        pool.query(query, [product_id, image_url], (error, result) => {
            if(error)
            {
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

const getAllImages = async () => {
    return new Promise((resolve, reject ) => {
        const query = 'SELECT * FROM product_image;';
        pool.query(query, (error, result) => {
        if(error)
            {
                reject(error);
                return;
            }
            resolve(result);
        });
    })
}

const getImageByProductId = async (product_id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM product_image WHERE product_id = ?;';
        pool.query(query, [product_id], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

module.exports = {
    addImage,
    getAllImages,
    getImageByProductId
}