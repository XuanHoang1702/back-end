const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secretKey = require('../config/secrect_key');

const authenticate = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if(!token){
        return res.status(401).send({error: 'Access denied. No token provided.'});
    }

    try{
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(404).send({error: 'User not found.'});
        }
        req.user = user;
        next();
    }catch(error){
        return res.status(error.code || 500).json({message: error.message || "Internam Server Error"
        });
    }
}

module.exports = authenticate