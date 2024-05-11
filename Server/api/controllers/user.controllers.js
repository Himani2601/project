import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { name, username, email, password, isSeller, location } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcryptjs.hash(password, 12);
        const newUserFields = { name, username, email, location, password: hashedPassword, isSeller };
        const newUser = new User(newUserFields);
        await newUser.save();
        res.status(201).json({ message: 'User has been created' });
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

export const signin = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password || username === "" || password === "") {
        return res.status(404).json({ error: 'All Fileds are Required' });
    }
    try {
        const validUser = await User.findOne({ username });
        if (!validUser) {
            return res.status(404).json({ error: 'Wrong Credentials.. check username or password is correct or not' });
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(404).json({ error: 'Wrong Credentials...  check username or password is correct or not' });
        }
        const token = jwt.sign({ id: validUser._id, username: validUser.username, isAdmin: validUser.isAdmin }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest);
    } catch (error) {
        next(error)
    }
}

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

export const updateProfile = async (req, res, next) => {
    try {
        const { name, email, username, npassword, mobileNo, location } = req.body;
        if (req.user.id != req.params.userId) {
            return res.status(400).json({ error: 'You are not allowed to update this user' });
        }

        if (npassword) {
            if (npassword.length < 6) {
                return res.status(400).json({ error: 'Password must be at least 6 characters' });
            }
            npassword = bcryptjs.hashSync(npassword, 10);
        }

        if (name && name.trim() === "") {
            return res.status(400).json({ error: 'Name should be filled' });
        }

        if (username) {
            if (await User.findOne({ username })) {
                return res.status(400).json({ error: 'Username already exists, try a different username' });
            }
            if (username.length < 7 || username.length > 20) {
                return res.status(400).json({ error: 'Username must be between 7 and 20 characters' });
            }
            if (username.includes(' ')) {
                return res.status(400).json({ error: 'Username cannot contain spaces' });
            }
            if (username !== username.toLowerCase()) {
                return res.status(400).json({ error: 'Username must be lowercase' });
            }
            if (!username.match(/^[a-zA-Z0-9-_@#$^*]+$/)) {
                return res.status(400).json({ error: 'Username can only contain letters and numbers' });
            }
        }

        if (mobileNo) {
            if (mobileNo.length < 14 || mobileNo.length > 15) {
                return res.status(400).json({ error: 'Enter Valid Mobile Number' });
            }
        }

        if (!location) {
            return res.status(400).json({ error: 'Enter Valid Location' });
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
            $set: { username, email, npassword, name, mobileNo, location },
        }, { new: true });

        const { password: removedPassword, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
}







