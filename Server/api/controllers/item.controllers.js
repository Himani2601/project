import Item from '../models/item.model'

export const addItem = async (req, res, next) => {

    const { name, price, description, image } = req.body;

    try {
        const newStoreItem = { name, price, description, image };
        const newItem = new Item(newStoreItem);
        await newItem.save()
        res.status(200).json({ message: 'Item added successfully' });
    } catch (error) {
        next(error);
    }
};

export const getAllItems = async (req, res, next) => {
    try {
        const items = await Item.find(); // Fetch all items from the database
        res.status(200).json(items);
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
    const itemId = req.params.itemId; // Assuming itemId is passed as a parameter in the URL

    try {
        // Check if the authenticated user is allowed to delete this item
        if (req.user.id !== req.params.userId) {
            return res.status(403).json({ error: 'You are not allowed to delete this item' });
        }

        // Find the item by ID and delete it
        const deletedItem = await Item.findByIdAndDelete(itemId);

        // Check if the item exists
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        next(error);
    }
};