import express from "express";
import { getAllItems, updateItem, addItem, deleteItem } from "../controllers/item.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/additem/:userId', verifyToken, addItem);
router.put('/updateitem/:userId', verifyToken, updateItem);
router.get('/getallitems', getAllItems);
router.delete('/deleteitem/:userId', verifyToken, deleteItem);

export default router;