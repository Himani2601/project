import Item from '../models/item.model.js'
import User from '../models/user.model.js'
import fs from 'fs'

export const addItem = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.userId) {
            return res.status(403).json({ error: 'You are not allowed to add item' });
        }
        const { name, price, description, category, seller } = req.body;
        const imageFilename = req.file.filename;
        const categoryArray = category.split(',').map(cat => cat.trim());
        const newStoreItem = { name, price, description, image: imageFilename, category: categoryArray, seller };
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
        const items = await Item.find({ seller: { $in: userIds }, availability: true });
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        next(error);
    }
};

export const changeAvailability = async (req, res, async) => {
    const { itemId } = req.body;
    try {
        if (req.user.id !== req.params.userId) {
            return res.status(403).json({ error: 'You are not allowed to change availability of this item.' })
        }
        const item = await Item.findById(itemId);
        if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
        item.availability = !item.availability;
        await item.save();
        res.status(200).json({ success: true, message: 'Item availability changed successfully' });
    } catch (error) {
        next(error);
    }
}

export const getItems = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const items = await Item.find({ seller: userId });
        res.status(200).json({ success: true, items });
    } catch (error) {
        next(error);
    }
};

export const updateItem = async (req, res, next) => {
    const { name, price, description, category, itemId } = req.body;
    let categoryArray = [];
    try {
        // Check if the authenticated user is allowed to update this item
        if (req.user.id !== req.params.userId) {
            return res.status(403).json({ error: 'You are not allowed to update this item' });
        }
        // Update the item
        const updatedItem = await Item.findByIdAndUpdate(itemId, {
            $set: { name, description, price, category },
        }, { new: true });
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

export const searchItem = async (req, res, next) => {
    try {
        const searchQuery = req.query.search;
        const keyword = searchQuery ? {
            $or: [
                { name: { $regex: searchQuery, $options: "i" } },
                { description: { $regex: searchQuery, $options: "i" } },
                { category: { $in: [new RegExp(searchQuery, "i")] } }
            ],
        } : {};
        const items = await Item.find(keyword);
        res.status(200).json({ data: items });
    } catch (error) {
        next(error);
    }
};
