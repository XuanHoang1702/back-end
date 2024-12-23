const HeaderService = require('../service/HeaderService');
const Validate = require('../validators/HeaderValidate');

const index = async (req, res) =>{
    try{
        const header = await HeaderService.getAllHeader();
        if(!header){
            return res.status(404).json({message: 'No headers found'});
        }
        return res.status(200).json(header)
    }catch(error){
        return res.status(error.code || 500).json({
            message:error.message || "Internal Server Error",
        });
    }
}

const store = async (req, res) => {
    try{
        const {error, value} = await Validate.ValidateStore(req.body);
        if(error){
            return res.status(400).json({message:error});
        }
        const header = await HeaderService.storeHeader(value);
        return res.status(201).json(header);
    }catch(error){
        return res.status(error.code || 500).json({
            message:error.message || "Internal Server Error",
        });
    }
}

module.exports = {
    index,
    store
}