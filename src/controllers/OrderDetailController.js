const OrderDetail = require('../models/OrderDetail');
const Product = require('../models/Product');

const store = async (req, res) => {
    try{
        const {order_id, product_id, quantity, price, subtotal} = req.body;

        const order_details = await OrderDetail.createOrderDetail(order_id, product_id, quantity, price, subtotal);
        res.status(201).json(order_details);
    }catch(error){
        console.error(error)
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error",
        })
    }
}

module.exports = {
    store,
}