import Order from "../models/order.model.js";

export const addToCart = async (req, res, next) => {
    const { name, price, quantity, seller, total } = req.body;
    try {
        const newOrder = new Order({ name, price, quantity, seller, total });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        next(error);
    }
};
