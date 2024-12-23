const Address = require('../models/Address');

const getAllAddress = async () => {
    try{
        return await Address.getAllAddress();
    }catch(error){
        throw error;
    }
}

const storeAddress = async (addressData) => {
    try{
        const {user_id, street_address, city, state, postal_code, country} = addressData;
        if (!street_address || !city || !country) {
            const error = new Error('All fields are required');
            error.code = 400;
            throw error;
        }
        return await Address.storeAddress({ user_id, street_address, city, state, postal_code, country });
    }catch(error){
        throw error;
    }
}

const getUserId = async (id) =>{
    try{
        return await Address.findUserId(id);
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllAddress,
    storeAddress,
    getUserId
}