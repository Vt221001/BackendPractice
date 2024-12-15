import mongoose from "mongoose";

const venueSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        capactiy: {
            type: Number,
            required: true,
        },
        events: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Event",
            },
        ],
    },
    { timestamps: true }
);

export const Venue = mongoose.model("Venue", venueSchema);
