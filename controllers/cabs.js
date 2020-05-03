const bcrypt = require('bcrypt');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const geolib = require('geolib');
const jwt = require('jsonwebtoken');

const Cabs = require("../models/Cabs")


// user login controller (returns token)
exports.fetch_cabs = (req, res) => {

    Cabs.findAll({
        where: {
            isBooked: 0
        }
    })
    .then(cabs => {
        if(cabs.length < 1){
            res.status(404).send("No Cabs Found") 
        }
        else{
            res.status(200).json(cabs)
        }
    })
    .catch(err => res.status(500).send("Someting is wrong"))
}
