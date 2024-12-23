const Footer = require('../models/Footer');

const getAllFooter = async () => {
    try {
        return await Footer.getFooter();
    }catch(error){
        throw error;
    }
}

const storeFooter = async (footerData) => {
    try{
        const {name, link, parent_id, status} = footerData;
        return await Footer.storeFooter(name, link, parent_id, status);
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllFooter,
    storeFooter,
}