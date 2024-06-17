class Booking {
    constructor(id, hotel, roomType, guestsNumber, startDate, endDate, status) {
        this.id = id;
        this.hotel = hotel;
        this.roomType = roomType;
        this.guestsNumber = guestsNumber;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }

}

module.exports = Booking;