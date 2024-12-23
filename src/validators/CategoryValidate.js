const Joi = require('joi');
const Category = require('../models/Category');

const validateCategortData = async (categoryData) =>{
    if(!categoryData){
        return {error: 'Category data is missing'};
    }

    const schema = Joi.object({
        name: Joi.string().required().messages({
            'name.base': 'Name must be string',
            'name.required': 'Name must be require',
        }),
        description: Joi.string().optional()
    });

    const existCategory = await Category.findCategoryName(categoryData.name);
    if(existCategory){
        return {error: 'Category already exists'};
    }

    return schema.validate(categoryData, {abortEarly: false});
};

module.exports = {
    validateCategortData,
}