import express from 'express'
import { addDeliveryDetails, getAddress } from '../controllers/delivery.controller.js'

const router = express.Router();

router.post('/adddelivery', addDeliveryDetails);
router.get('/getaddress/:deliveryId', getAddress);

export default router;