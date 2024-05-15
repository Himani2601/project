import express from 'express'
import { addToCart, getOrders, getUserOrders, updateOrderStatus } from '../controllers/order.controllers.js';
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

router.post('/addtocart', addToCart);
router.get('/getorder/:userId', verifyToken, getOrders);
router.get('/getuserorder/:userId', verifyToken, getUserOrders);
router.put('/updatestatus/:userId', verifyToken, updateOrderStatus);

export default router;