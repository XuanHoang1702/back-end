const Category = require('../models/Category');

const getAllCategory = async () => {
    try{
        return await Category.getAllCategory();
    }catch(error){
        throw error;
    }
};

const storeCategory = async(categoryData) => {
    try{
        const {name, description} = categoryData;
        return await Category.storeCategory(name, description);
    }catch(error){
        throw error;
    }
};

module.exports = {
    getAllCategory,
    storeCategory,
}