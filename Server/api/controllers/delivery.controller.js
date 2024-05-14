import Delivery from '../models/delivery.model.js'

export const addDeliveryDetails = async (req, res, next) => {
    const { userId, name, email, plot_no, street, city, state, pincode, phone, category } = req.body;
    try {
        const deliveryDetail = new Delivery({ userId, name, email, plot_no, street, city, state, pincode, phone, payment: category });
        await deliveryDetail.save();
        res.status(201).json({ success: true, message: "Delivery details added successfully" });
    } catch (error) {
        next(error);
    }
}