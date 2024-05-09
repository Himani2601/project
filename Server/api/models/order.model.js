import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    seller: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected', 'dispatched', 'delivered'],
        default: 'pending'
    }
})

export default mongoose.model("Order", orderSchema);
