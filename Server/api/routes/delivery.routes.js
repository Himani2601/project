import express from 'express'
import { addDeliveryDetails } from '../controllers/delivery.controller.js'

const router = express.Router();

router.post('/adddelivery', addDeliveryDetails);

export default router;