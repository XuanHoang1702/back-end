const AddressService = require('../service/AddressService');
const AddressValidate = require('../validators/AddressValidate');

const index = async (req, res) => {
    try{
        const address = await AddressService.getAllAddress();
        if(!address){
            return res.status(404).json({message: 'Address not found'});
        }
    }catch(error){
        console.error("Error in AddressController.index: ", error);
        return res.status(200).json(address);
    }
    
}

const store = async (req, res) => {
    try{
        const {error, value} = AddressValidate.validateAddress(req.body);
        if(error){
            return res.status(400).json({message: error});
        }
        const result = await AddressService.storeAddress(value);
        return res.status(201).json(result);
    }catch(error){
        console.error('Error in AddressController.store: ', error);
        return res.status(500).json({message: 'Internal Server Error'});
    }
}

module.exports = {
    index,
    store
}
