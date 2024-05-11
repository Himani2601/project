import mongoose from "mongoose";

const Schema = mongoose.Schema;

const addressSchema = new Schema({
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
    }
})

const Address = mongoose.model('Address', addressSchema);

export default Address;
