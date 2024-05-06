import express from 'express'
import { addToCart } from '../controllers/order.controllers.js';

const router = express.Router();

router.post('/addtocart', addToCart);
router.get('/getcart',);
router.delete('/deletecart',);

export default router;