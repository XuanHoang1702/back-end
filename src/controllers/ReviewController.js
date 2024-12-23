const Review = require('../models/Review');

const store = async (req, res) => {
    try {
        const {product_id, rating, comment} = req.body;
        const user_id = req.user.id;
        const review = await Review.createReview(user_id, product_id, rating, comment);
        res.status(201).json(review);
    }catch(error){
        console.error(error);
        res.status(error.code || 500).json({ message: error.message || 'Error creating review' });
    }
}

module.exports = {
    store,
}