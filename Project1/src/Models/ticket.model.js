import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    ticketNumber: {
        type: String,
        unique: true,
        required: true,
    },
    qrCode: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now(),
    },
});

export const Ticket = mongoose.model("Ticket", ticketSchema);
