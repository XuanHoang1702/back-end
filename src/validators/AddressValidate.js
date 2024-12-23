const Joi = require('joi');
const Address = require('../models/Address');

const validateAddress = async (addressData) => {
    if(!addressData){
        return {message: error};
    }
    const schema = Joi.object({
        user_id: Joi.number().required().messages({
            'any.required': 'User ID is required'
        }),
        street_address: Joi.string().required().messages({
            'any.required': 'Street Address is required'
        }),
        city: Joi.string().required().messages({
            'any.required': 'City is required'
        }),
        country: Joi.string().required().messages({
            'any.required': 'Country is required'
        })
    });

    const existUser = Address.findUserId(addressData.user_id);
    if(existUser){
        return {message: 'User ID does exist'};
    }

    return schema.validate(addressData, {abortEarly: false});
};

module.exports = {
    validateAddress,
}