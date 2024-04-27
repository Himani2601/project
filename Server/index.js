import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './api/routes/user.routes';
import itemRoutes from './api/routes/item.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(4000, () => {
    console.log("Server is running on port no 4000");
});

//test api for checking backend is working or not
// app.use('/test', (req, res) => {
//     res.send("api is working");
// })

app.use('/api/user', userRoutes);
app.use('/api/item', itemRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});





