import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU="
    },
    name: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        default: "+91-0000000000"
    },
    isSeller: {
        type: Boolean,
        default: false
    },
    sellingItems: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
