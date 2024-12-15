import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        contact: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: String,
            enum: ["Admin", "Organizer", "Attendee"],
            default: "Attendee",
        },
        address: {
            type: String,
            trim: true,
        },
        registeredEvents: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Event",
            },
        ],
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
