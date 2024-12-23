const Joi = require('joi');
const Footer = require('../models/Footer');

const ValidateStore = async (footerData) => {
    if(!footerData || footerData.length === 0){
        return {error: 'Missing value'};
    }

    const schema = Joi.object({
        name: Joi.string().required().messages({'string.base': 'Name must be string',}),
        link: Joi.string().required().messages({'string.base': 'Link must be string'}),
        parent_id: Joi.number().optional().default(0).messages({'number.base': 'parent_id must be number', 'any.only': 'Status must be 1 or 2'}),
        status: Joi.number().valid(1, 2).optional().messages({'number.base': 'Status must be number'})
    });

    const existFooter = await Footer.findFooter(footerData.name);
    if(existFooter){
        return {error: 'Footer already exist'};
    }

    if(footerData.parent_id){
        const existParent_id = await Footer.findParent(Footer.parent_id);
        console.log(existParent_id);
        if(!existParent_id){
            return {error: 'Parent_id does not exist'};
        }
    }

    return schema.validate(footerData, {abortEarly: false});
}

module.exports = {
    ValidateStore,
}