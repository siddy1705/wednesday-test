const express = require("express");
const router = express.Router();

//Controller
const bookingsController = require("../../controllers/bookings")

// Authorization Middleware
const auth = require("../../middleware/auth")

// get all users
router.post("/book", auth.tokenAuthorize, bookingsController.book_cab)

// Complete booking
router.post("/complete", auth.tokenAuthorize, bookingsController.complete_booking)

// get bookings
router.get("/", auth.tokenAuthorize, bookingsController.get_bookings)


module.exports = router;