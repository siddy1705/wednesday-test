const bcrypt = require('bcrypt');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const jwt = require('jsonwebtoken');

exports.tokenAuthorize = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.SECRET);
        req.userData = decoded;
        next();
    }
    catch(error){
        return res.status(401).json({
            "message": "Unauthorized",
            "error": error
        })
    }
}