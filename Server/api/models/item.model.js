import mongoose from 'mongoose';

const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sellerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
