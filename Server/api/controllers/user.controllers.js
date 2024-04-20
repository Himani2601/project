import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

export const signup = async (req, res, next) => {
    const { name, username, email, password, isSeller } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcryptjs.hash(password, 12);
        const newUserFields = { name, username, email, password: hashedPassword };
        if (isSeller !== undefined) {
            newUserFields.isSeller = isSeller;
        }
        const newUser = new User(newUserFields);
        await newUser.save();
        res.status(201).json({ message: 'User has been created' });
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {
    const [username, password] = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('access_token', token, { httpOnly: true }).status(200).json({ message: 'User has been signed in' });

    } catch (error) {
        next(error);
    }
}

export const signout = async (req, res, next) => {
    try {
        res.clearCookie('access_token').status(200).json('User has been signed out');
    } catch (error) {
        next(error);
    }
};





