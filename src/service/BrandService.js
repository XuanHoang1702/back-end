const Brand = require('../models/Brand');

const getAllBrand = async () => {
    try{
        return await Brand.getAllBrand();
    }catch(error){
        console.error("Error in BrandService.getAllBrand:", error);
        throw new Error("Unable to fetch brands.");
    }
}

const storeBrand = async (brandData) => {
    try{
        const {name, description} = brandData;
        return await Brand.storeBrand(name, description);
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllBrand,
    storeBrand
}