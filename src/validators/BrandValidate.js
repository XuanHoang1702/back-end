const Joi = require('joi');
const Brand = require('../models/Brand');

const validateBrandData = async (brandData) => {
    if (!brandData || !brandData.name) {
        return { error: 'Brand data or name is missing' };
    }
    
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.base': 'Name must be a string',
            'string.required': 'Name is required'
        }),
        description: Joi.string().optional(),
    });
    
    const existBrand = await Brand.findName(brandData.name);
    if(existBrand){
        return { error: 'Brand already exists' };
    }
    return schema.validate(brandData, {abortEarly: false});
}

module.exports = {
    validateBrandData,
}