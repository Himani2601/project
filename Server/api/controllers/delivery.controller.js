import Delivery from '../models/delivery.model.js'
import Order from '../models/order.model.js'

export const addDeliveryDetails = async (req, res, next) => {
    const { orders, name, email, plot_no, street, city, state, pincode, phone, category } = req.body;
    try {
        const deliveryDetail = new Delivery({ orders, name, email, plot_no: Number(plot_no), street, city, state, pincode: Number(pincode), phone, payment: category });
        await deliveryDetail.save();
        for (const data of orders) {
            const order = await Order.findById(data._id);
            order.delivery = deliveryDetail;
            await order.save();
        }
        res.status(201).json({ success: true, message: "Delivery details added successfully" });
    } catch (error) {
        next(error);
    }
}

export const getAddress = async (req, res, next) => {
    try {
        const delivery = await Delivery.findById(req.params.deliveryId);
        res.status(200).json({ success: true, delivery: delivery });
    } catch (error) {
        next(error);
    }
};