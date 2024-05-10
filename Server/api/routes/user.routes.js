import express from "express";
import { forgetPassword, signin, signup, signout, updateProfile } from "../controllers/user.controllers.js";
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/forgetpassword', forgetPassword);
router.post('/signout', signout);
router.put('/update/:userId', verifyToken, updateProfile);

export default router;