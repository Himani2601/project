import express from "express";
import { forgetPassword, signin, signup, signout } from "../controllers/user.controllers.js";

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/forgetpassword', forgetPassword);
router.post('/signout', signout);

export default router;