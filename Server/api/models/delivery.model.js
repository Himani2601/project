import mongoose from "mongoose";

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    plot_no: {
        type: Number,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    }
})

const Delivery = mongoose.model('Delivery', deliverySchema);

export default Delivery;
