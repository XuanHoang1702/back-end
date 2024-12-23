const Liked = require('../models/Liked');

const store = async (req, res) => {
    try{
        const {product_id} = req.body;
        const user_id = req.user.id;
        const liked = await Liked.storeLiked(user_id, product_id);
        res.status(201).json(liked);
    }catch(error){
        console.error(error);
        return res.status(error.code || 500).json({ message: error.message || 'Internal Server Error' });
    }
}

module.exports = {
    store,
}