const BrandService = require('../service/BrandService');
const BrandValidate = require('../validators/BrandValidate');

const index = async (req, res) => {
    const brands = await BrandService.getAllBrand();
    if(!brands){
        return res.status(error.code || 500).json({
            message: error.message || "Internal Server Error"
        });
    }
    return res.status(200).json(brands);
}

const store = async(req, res) => {
    try{
        const {error, value} = await BrandValidate.validateBrandData(req.body);
        if(error){
            return res.status(400).json({
                message: error
            });
        }
        const brand = await BrandService.storeBrand(value);
        return res.status(201).json(brand);
    }catch(error){
        console.error('Error in BrandController.store: ', error);
        return res.status(error.code || 500).json({
            message: error.message || "Internal Server Error"
        });
    }
}

module.exports = {
    index,
    store
}