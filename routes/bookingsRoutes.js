const express = require('express');
const bookingsController = require('../controllers/controller');

const router = express.Router();

router.post("/bookings", bookingsController.createBooking);
router.get('/bookings', bookingsController.getBookings);
router.get('/bookings/:id', bookingsController.getBookingById);
router.put('/bookings/:id', bookingsController.updateBookingById);
router.delete('/bookings/:id', bookingsController.deleteBookingById);

module.exports = router;