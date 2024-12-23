const Order = require('../models/Order');

const store = async (req, res) => {
    try{
        const { order_date, total_amount} = req.body;
        const user_id = req.user.id;
        const order = await Order.createOrder(user_id, order_date, total_amount);
        res.status(201).json(order);
    }catch(error){
        console.error(error);
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error",
        });
    }
}

const show = async (req, res) => {
    try{
        const user_id = req.user.id;
        const order = await Order.getOrder(user_id);
        res.status(200).json(order);
    }catch(error){
        console.error(error);
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error",
        })
    }
}

module.exports ={
    store,
    show
}