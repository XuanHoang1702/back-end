const ProductImage = require('../models/ProductImage');

const store = async (req, res) => {
    try{
        const {product_id} = req.body;
        const imageName = req.file ? req.file.originalname : null;

        if(!product_id || !imageName){
            return res.status(400).json({message: 'Product ID and Image Name are required'});
        }

        const result = await ProductImage.addImage({
            product_id,
            image_name: imageName,
        });

        res.status(201).json({
            message: "Image added successfully", data: result,
        })
    }catch(error){
        console.log('Error: ', error.message);
        res.status(error.code || 500).json({message: error.message || 'Internal Server Error'});
    }
};

const index = async (req, res) => {
    try{
        const images = await ProductImage.getAllImages();
        const baseUrl = `${req.protocol}://${req.get('host')}/uploads`;
        const formattedImages = images.map(image => ({
            ...image,
            image_url: `${baseUrl}/${image.image_url}`,
        }));
        res.status(200).json({
            message: 'Get all image successfully',
            data: formattedImages,
        });
    }catch(error){
        console.error('Error: ', error.message);
        res.status(error.code || 500).json({message: error.message || 'Internal Server Error'});
    }
};

const show = async (req, res) => {
    try{
        const product_id = req.params;
        const imageUrl = await ProductImage.getImageByProductId(product_id);
        res.status(200).json({
            message: 'Get image by product ID successfully',
            data: imageUrl,
        });
    }catch(error){
        res.status(error.code || 500).json({
            message: error.message || 'Internal Server Error',
        })
    }
}

module.exports = {
    store,
    index,
    show
};
