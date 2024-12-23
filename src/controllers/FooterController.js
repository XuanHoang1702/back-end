const FooterService = require('../service/FooterService');
const Validate = require('../validators/FooterValidate');

const index = async (req, res) => {
    try{
        const footer = await FooterService.getAllFooter();
        if(!footer || footer.length === 0){
            return {message: 'No footer found'};
        }
        return res.status(200).json(footer);
    }catch(error){
        return res.status(error.code || 500).json({
            message: error.message || "Internal Server Error"
        });
    }
}

const store = async (req, res) => {
    try{
        const {error, value} = await Validate.ValidateStore(req.body);
        if(error){
            return res.status(400).json({message: error});
        }
        
        const footer = await FooterService.storeFooter(value);
        return res.status(201).json(footer);
    }catch(error){
        return res.status(error.code || 500).json({message: error.message || 'Internal Server Error'});
    }
}

module.exports = {
    index,
    store,
}