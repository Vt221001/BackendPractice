import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        venue: {
            type: Schema.Types.ObjectId,
            ref: "Venue",
        },
        orgainzer: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        attendees: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        maxAttendees: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
