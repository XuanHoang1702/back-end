const DiscountService = require('../service/DiscountService');
const DiscountValidate = require('../validators/DiscountValidate');
const Discount = require('../models/Discount');

const index = async (req, res) => {
    try {
        const discount = await DiscountService.getAllDiscount();
        if(!discount || discount.length === 0){
            return res.status(404).json({message: 'Discount not found'});
        }
        res.status(200).json(discount);
    }catch(error){
        res.status(500).json({message: "Internal Server Error"});
    }
}

const store = async (req, res) => {
    try{
        const {error, value} = await DiscountValidate.validateStore(req.body);
        if(error){
            return res.status(error.code || 400).json({message: error});
        }
        const discount = await DiscountService.storeDiscount(value);
        return res.status(201).json(discount);
    }catch(error){
        return res.status(error.code || 500).json({
            message: error.message || "Internal Server Error"
        });
    }
};


module.exports = {
    index,
    store
}