const Joi = require('joi');
const Header = require('../models/Header');

const ValidateStore = async (headerData) => {
    if(!headerData || headerData.length === 0){
        return {error: 'Missing value'};
    }
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name must not be empty',
        }),
        link: Joi.string().required().messages({
            'string.base': 'Link must be a string',
            'string.empty': 'Link must not be empty',
        }),
        status: Joi.number().valid(1, 2).default(2).messages({
            'number.base': 'Status must be a number',
            'number.empty': 'Status must not be empty',
        })
    });

    const existHeader = await Header.findHeader(headerData.name);
    if(existHeader){
        return {error: 'Header already exist'};
    }

    return schema.validate(headerData, {abortEarly: false});
}

module.exports = {
    ValidateStore
}