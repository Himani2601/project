import Contact from "../models/contact.model.js";

export const addContact = async (req, res, next) => {
    const { name, email, phone, message } = req.body;
    try {
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ success: false, message: "fileds are empty" });
        }
        const newContact = new Contact({ name, email, phone, message });
        if (!newContact) {
            return res.status(400).json({ success: false, message: "Internal Server Error" });
        }
        await newContact.save();
        res.status(200).json({ success: true, message: "data added" });
    } catch (error) {
        next(error);
    }
}

export const getcontacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find({});
        res.status(200).json({ data: contacts });
    } catch (error) {
        next(error);
    }
}