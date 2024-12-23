const Discount = require('../models/Discount');
const Joi = require('joi');

const validateStore = async (discountData) => {
    if(!discountData || discountData.length === 0){
        return {error: 'Data is missing'};
    }

    const schema = Joi.object({
        product_id: Joi.number().required().messages({'number.base': 'product_id must be number'}),
        percentage: Joi.number().min(1).max(100).required().messages({
            'number.base': 'percentage must be a number',
            'number.min': 'percentage must be at least 1',
            'number.max': 'percentage must be at most 100',
        }),
        start_date: Joi.date().required().messages({
            'date.base': 'start_date must be a valid date',
            'any.required': 'start_date is required',
        }),
        end_date: Joi.date().required().messages({
            'date.base': 'start_date must be a valid date',
            'any.required': 'start_date is required',
        })
    });

    const existProduct = await Discount.findProduct(discountData.product_id);
    if(existProduct){
        return {error: 'Product already has a discount'};
    }

    return schema.validate(discountData, {abortEarly: false});
}

module.exports = {
    validateStore,
}