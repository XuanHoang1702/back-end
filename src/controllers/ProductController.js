const Product = require('../models/Product');

const index = async (req, res) => {
    try{
        const products = await Product.getAllProduct();
        res.status(200).json(products);
    }catch(error){
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error",
        });
    }
}

const show = async (req, res) => {
    try{
        const product = await Product.findById(req.params.product_id);
        if(!product){
            res.status(404).json({message: "Product not found"});
            return ;
        }

        res.status(200).json(product[0]);
        
    }catch(error){
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error",
        });
    }
}

module.exports = {
    index,
    show
}