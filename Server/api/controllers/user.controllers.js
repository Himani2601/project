import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { name, username, email, password, isseller } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcryptjs.hash(password, 12);
        const newUserFields = { name, username, email, password: hashedPassword };
        if (isseller !== undefined) {
            newUserFields.isseller = isseller;
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
        const token = jwt.sign({ id: validUser._id, username: validUser.username, isAdmin: validUser.isAdmin }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest);
    } catch (error) {
        next(error)
    }
}

export const signout = async (req, res, next) => {
    try {
        res.clearCookie('access_token').status(200).json('User has been signed out');
    } catch (error) {
        next(error);
    }
};

export const forgetPassword = async (req, res, next) => {
    const { email, cpassword, npassword } = req.body;
    try {
        const validUser = await User.findOne({ email });

        if (!validUser) {
            return res.status(404).json({ error: 'User not found.' });
        }

        const validPassword = cpassword === npassword;
        if (!validPassword) {
            return res.status(400).json({ error: 'Both Passwords need to be same' });
        }

        const hashedPassword = bcryptjs.hashSync(npassword, 10);
        validUser.password = hashedPassword;
        await validUser.save();
        res.json('Password reset successfully.');
    } catch (error) {
        next(error);
    }
};






