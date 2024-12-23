const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = require('../config/secrect_key');

const index = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching users',
            error: error.message
        });
    }
};

/**
 * Register a new user.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */

const register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (!name || !email || !password || !phone) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const result = await User.createUser(name, email, phone, hashedPassword);
            res.status(201).json({ message: 'User registered successfully', result });
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ message: 'Email already exists' });
            }
            throw error;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: 'Missing required fields'})
        }
        const user = await User.getUserByEmail(email);
        if(!user){
            return res.status(401).json({message: 'Invalid email or password'})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message: 'Invalid email or password'})
        }
        const token = jwt.sign({id: user.id, email: user.email}, secretKey, {expiresIn: '3h'});
        res.status(200).json({message: 'Login Successful', token});
    }catch(error){
        console.log(error);
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error",
        });
    }
}

module.exports = {
    index,
    register,
    login
};
