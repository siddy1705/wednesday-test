const bcrypt = require('bcrypt');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const jwt = require('jsonwebtoken');

const User = require("../models/User")

// hash password and add user if not exist
const userSignup = async (body) => {
    let { name, mobile, email, password } = body;
    password = await bcrypt.hash(password, 10);
    const findOrAddUser = await User.findOrCreate({
        where: {
            [Op.and]: [{email: email}, {mobile: mobile}]
        },
        defaults: {
            name,
            mobile,
            email,
            password
        }
    });

    return findOrAddUser;
}

// user signup controller
exports.user_signup = (req, res) => {
    userSignup(req.body)
        .then(([user, created]) => {
            if(created)
                res.status(201).json(user)
            else
                res.status(400).send("already exist")
        })
        .catch(err => {
            console.log(err)
            res.status(500).send("Someting went wrong. Please check the codes")
        })
}

// user login controller (returns token)
exports.user_login = (req, res) => {
    let { email_mobile, password } = req.body;

    User.findOne({
        where: {
            [Op.or]: [{email: email_mobile}, {mobile: email_mobile}]
        }
    })
    .then(user => {
        console.log(user.password)
        bcrypt.compare(password, user.password)
            .then(result => {
                if(result) {
                    jwt.sign({ user_id: user.id }, process.env.SECRET, (err, token) => {
                        if(err)
                            res.status(500).json(err)
                        else{
                            res.status(200).json({"token": token, "user": user})
                        }
                    })
                }
                else 
                    //console.log(user)
                    res.status(401).send("Incorrect Password")
            })
    })
    .catch(err => res.status(500).send("auth failed"))
}

// get all users
exports.user_get_all = (req, res) => {
    User.findByPk(req.userData.user_id)
        .then(user => res.status(200).json(user))
        .catch(err => console.log(`error: ${err}`))
}
// get user by id
exports.user_get_by_id = (req, res) => {
    let { id } = req.params;

    User.findByPk(id)
        .then(user => {
            if(user)
                res.status(200).json(user);
            else
                res.status(404).json({"message": "User not found"})

        })
        .catch(err => {
            res.status(400).send("error in finding the user")
        })

}