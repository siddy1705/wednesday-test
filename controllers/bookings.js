const bcrypt = require('bcrypt');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const geolib = require('geolib');
const jwt = require('jsonwebtoken');

const Cabs = require("../models/Cabs")
const Bookings = require("../models/Bookings")


// book cab
exports.book_cab = (req, res) => {
    let { cabId } = req.body
    Cabs.findByPk(cabId)
    .then(cab => {
        if(cab.isBooked == 1){
            res.status(404).send("Cab Already Booked. Please try another cab.") 
        }
        else{
            // res.status(200).json(cabs)
            cab.update({isBooked: 1})
            .then(result => {
                Bookings.create({
                    userId: req.userData.user_id,
                    cabId: cabId,
                    bookingStatus: "Booked"
                })
                .then(bookingResult => {
                    res.status(200).send("Cab booked Sucessfully")
                })
                .catch(err => { res.status(500).send("something went wrong") })
            })
        }
    })
    .catch(err => res.status(500).send("Someting is wrong"))
}

// complete booking
exports.complete_booking = (req, res) => {
    let { cabId, bookingId } = req.body
    Cabs.findByPk(cabId)
    .then(cab => {
        if(cab.isBooked == 0){
            res.status(404).send("Cab not booked. Please select the correct cab") 
        }
        else{
            // res.status(200).json(cabs)
            cab.update({isBooked: 0})
            .then(() => {
                Bookings.findByPk(bookingId)
                .then(bookingResult => {
                    bookingResult.update({bookingStatus: "Completed"})
                    .then(() => res.status(200).send("Journey completed sucessfully"))
                    
                })
                .catch(err => { res.status(500).send("something went wrong") })
            })
        }
    })
    .catch(err => res.status(500).send("Someting is wrong"))
}

// get bookings made by user
exports.get_bookings = (req, res) => {
    const userId = req.userData.user_id
    Bookings.findAll({
        where: {
            userId 
        }
    })
    .then(bookings => {
        res.status(200).json(bookings)
    })
    .catch(err => res.status(500).send("Someting is wrong"))
}
