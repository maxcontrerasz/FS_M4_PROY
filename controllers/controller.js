const Booking = require('../models/model')
const moment =require('moment')
const { v4: uuidv4 } = require('uuid');


let bookings = [];

exports.createBooking = async (req,res) =>{
    const uniqueKey = uuidv4();
    const {hotel, roomType, guestsNumber, startDate, endDate, status} = req.body

    const parsedStartDate = moment(startDate, 'DD-MM-YYYY');
    const parsedEndDate = moment(endDate, 'DD-MM-YYYY');

    if (!parsedStartDate.isValid() || !parsedEndDate.isValid()) {
        return res.status(400).json({ error: 'Formato de fecha inválido.' });
    }

    if (parsedEndDate.isBefore(parsedStartDate)) {
        return res.status(400).json({ error: 'La fecha de salida del hotel debe ser posterior a la fecha de llegada.' })
    }
    const newBooking = new Booking(uniqueKey, hotel, roomType, guestsNumber, parsedStartDate.toDate(), parsedEndDate.toDate(),status)

    bookings.push(newBooking);

    res.json({
        msg: "Reserva creada con éxito.",
        data: newBooking
    })
}

exports.getBookings = async (req, res) => {
    const { hotel, roomType, guestsNumber, start_date, end_date, status } = req.query;
 
    if (hotel) {
        const bookingsFiltered = bookings.filter(booking => booking.hotel === hotel);
        if (bookingsFiltered.length === 0) {
            return res.status(404).json({ msg: 'No se encontraron reservas relacionadas a ese Hotel.' });
        }
 
        return res.json({
            msg: "Reservas",
            data: bookingsFiltered
        })
    } else if(roomType){
        const bookingsFiltered = bookings.filter(booking => booking.roomType === roomType);
        if (bookingsFiltered.length === 0) {
            return res.status(404).json({ msg: 'No se encontraron reservas relacionadas a ese Tipo de Habitación.' });
        }
 
        return res.json({
            msg: "Reservas",
            data: bookingsFiltered
        })
    } else if(guestsNumber){
        const bookingsFiltered = bookings.filter(booking => booking.guestsNumber === guestsNumber);
        if (bookingsFiltered.length === 0) {
            return res.status(404).json({ msg: 'No se encontraron reservas relacionadas a esa Cantidad de Huéspedes.' });
        }
 
        return res.json({
            msg: "Reservas",
            data: bookingsFiltered
        })
    } else if(status){
        const bookingsFiltered = bookings.filter(booking => booking.status === status);
        if (bookingsFiltered.length === 0) {
            return res.status(404).json({ msg: 'No se encontraron reservas relacionadas a ese estado.' });
        }
 
        return res.json({
            msg: "Reservas",
            data: bookingsFiltered
        })
    } else if (start_date && end_date){
        const startDate = moment (start_date);
        const endDate = moment (end_date);

        const bookingsFiltered = bookings.filter(booking => 
            // booking.startDate.isBetween (startDate, endDate) === true && booking.endDate.isBetween (startDate, endDate) === true ); // TENGO ESTAS 2 OPCIONES
            (moment(booking.startDate).isBetween(startDate, endDate, null, '[]') || moment(booking.endDate).isBetween(startDate, endDate, null, '[]')));
        if (bookingsFiltered.length === 0) {
            return res.status(404).json({ msg: 'No se encontraron reservas durante las fechas seleccionadas.' });
        }
        return res.json({
            msg: "Reservas",
            data: bookingsFiltered
        })
    }
    else {
        return res.json({
            msg: 'Reservas',
            data: bookings
        })
    }
}

exports.getBookingById = async (req, res) => {
    const bookingId = req.params.id;
    const booking = bookings.find(booking => booking.id === bookingId);

    if (!booking) {
        return res.status(404).json({ msg: "Reserva no encontrada." })
    }
 
    return res.json({
        msg: 'Reserva obtenida con éxito.',
        data: booking
    })
}

exports.updateBookingById = async (req, res) => {
    const bookingId = req.params.id;
    const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);

    if (bookingIndex === -1) {
        return res.status(404).json({ msg: "Reserva no encontrada." });
    }

    bookings[bookingIndex] = { ...bookings[bookingIndex], ...req.body };

    return res.json({
        msg: 'Reserva modificada con éxito.',
        data: bookings[bookingIndex]
    });
}

exports.deleteBookingById = async (req, res) => {
    const bookingId = req.params.id;
    const bookingSearch = bookings.find(booking => booking.id === bookingId);

    if (!bookingSearch){
        return res.status(404).json({ msg: "Reserva no encontrada." })
    }

    bookings.splice (bookingSearch,1)

    return res.json({
        msg: 'Reserva eliminada con éxito.',
    })

}