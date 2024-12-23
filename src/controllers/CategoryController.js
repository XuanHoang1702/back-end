const CategoryValidate = require('../validators/CategoryValidate');
const CategoryService = require('../service/CategoryService');

const index = async (req, res) => {
    try{
        const categories = await CategoryService.getAllCategory();
        if(!categories){
            return res.status(400).json('No category found!');
        }
        return res.status(200).json(categories);
    }catch(error){
        console.error('Error in CategoryController.index: ', error);
        return res.status(500).json('Internal Server Error');
    }
}

const store = async (req, res) => {
    try{
        const {error, value } = await CategoryValidate.validateCategortData(req.body);
        if(error){
            return res.status(400).json({message: error})
        }
        const result = await CategoryService.storeCategory(value)
        res.status(201).json({
            message: "Stored category",
            data: result
        });
    }catch(error){
        console.error('Error in CategoryController.store: ', error);
        return res.status(500).json('Internal Server Error');
    }
}

module.exports = {
    index,
    store
};