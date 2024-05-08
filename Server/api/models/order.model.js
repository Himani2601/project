import mongoose from 'mongoose';

const { Schema } = mongoose;

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
        type: Schema.Types.ObjectId,
        ref: 'Seller'
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
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
