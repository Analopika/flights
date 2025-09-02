import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    quantity: { type: Number, required: true },
    collected: { type: Number, default: 0 },
    returned: { type: Number, default: 0 },
    collectionDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    active: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Collect', collectionSchema);