import Item from '../models/item.model.js'
import User from '../models/user.model.js'
import fs from 'fs'

export const addItem = async (req, res, next) => {
    try {
        const { name, price, description, category, seller } = req.body;
        const imageFilename = req.file.filename;
        const newStoreItem = { name, price, description, image: imageFilename, category, seller };
        const newItem = new Item(newStoreItem);
        await newItem.save();
        const sellerDoc = await User.findById(seller);
        if (!sellerDoc) {
            return res.status(404).json({ success: false, message: 'Seller not found' });
        }
        sellerDoc.sellingItems.push(newItem._id);
        await sellerDoc.save();
        res.status(200).json({ success: true, message: 'Item added successfully' });
    } catch (error) {
        next(error);
    }
};

export const getAllItems = async (req, res, next) => {
    const { location } = req.body;
    try {
        const users = await User.find({ location, isSeller: true });
        const userIds = users.map(user => user._id);
        const items = await Item.find({ seller: { $in: userIds } });
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        next(error);
    }
};


export const getItems = async (req, res, next) => {
    const userId = req.params.userId;
    console.log(userId)
    try {
        const items = await Item.find({ seller: userId });
        res.status(200).json({ success: true, items });
    } catch (error) {
        next(error);
    }
};

export const updateItem = async (req, res, next) => {

    const { name, price, description, image } = req.body;

    const itemId = req.params.itemId; // Assuming itemId is passed as a parameter in the URL

    try {
        // Check if the authenticated user is allowed to update this item
        if (req.user.id !== req.params.userId) {
            return res.status(403).json({ error: 'You are not allowed to update this item' });
        }

        // Manual validation
        if (!name || !price || !description || !image) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        if (typeof price !== 'number' || isNaN(price)) {
            return res.status(400).json({ error: 'Price must be a number' });
        }

        // Update the item
        const updatedItem = await Item.findByIdAndUpdate(itemId, { name, price, description, image }, { new: true });

        // Check if the item exists
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json(updatedItem);
    } catch (error) {
        next(error);
    }
};

export const deleteItem = async (req, res, next) => {
    const itemId = req.params.itemId;
    try {
        const removeItem = await Item.findById(itemId);
        if (!removeItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        fs.unlink(`images/${removeItem.image}`, (err) => {
            if (err) {
                console.error('Error deleting image file:', err);
            }
        });

        const user = await User.findById(removeItem.seller);
        if (!user) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        const deletedItem = await Item.findByIdAndDelete(itemId);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        user.sellingItems.pull(removeItem._id);
        await user.save();
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        next(error);
    }
};

