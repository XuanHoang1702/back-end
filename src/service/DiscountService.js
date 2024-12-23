const Discount = require('../models/Discount');

const getAllDiscount = async () => {
    try {
        return await Discount.getAllDiscount();
    }catch(error){
        throw error;
    }
}

const storeDiscount = async (discountData) => {
    try{
        const {product_id, percentage, start_date, end_date} = discountData;
        return await Discount.createDiscount(product_id, percentage, start_date, end_date);
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllDiscount,
    storeDiscount
}