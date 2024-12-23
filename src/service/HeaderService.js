const Header = require('../models/Header');

const getAllHeader = async () => {
    try {
        return await Header.getHeader();
    }catch(error){
        throw(error);
    }
};


const storeHeader = async (headerData) => {
    try {
        const {name, link, status} = headerData
        return await Header.storeHeader(name, link, status);
    }catch(error){
        throw(error);
    }
}
module.exports = {
    getAllHeader,
    storeHeader
}