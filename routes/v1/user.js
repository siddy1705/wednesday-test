const express = require("express");
const router = express.Router();

//Controller
const userController = require("../../controllers/user")

// Authorization Middleware
const auth = require("../../middleware/auth")

// get all users
router.get("/", auth.tokenAuthorize, userController.user_get_all)

// user signup route
router.post("/signup", userController.user_signup)

// login route
router.post("/login", userController.user_login)

// fetch single user route
/* router.get("/:id", userController.user_get_by_id) */

// test route for add user (delete in production)
/* router.post("/", (req, res) => {
    let { firstName, lastName, email_address, mobile_number, address1, address2, city, state, country, pincode, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            User.create({
                firstName,
                lastName,
                email_address,
                mobile_number,
                address1,
                address2,
                city,
                state,
                country,
                pincode,
                password: hash
            })
            .then(user => res.status(201).json(user))
            .error(err => res.json(err))
        })
        .catch(err => {
            res.status(500).json(err)
        })
    
}) */


module.exports = router;