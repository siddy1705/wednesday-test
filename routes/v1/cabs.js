const express = require("express");
const router = express.Router();

//Controller
const cabsController = require("../../controllers/cabs")

// Authorization Middleware
const auth = require("../../middleware/auth")

// get all users
router.get("/", auth.tokenAuthorize, cabsController.fetch_cabs)


module.exports = router;