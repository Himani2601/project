import express from "express";
import { getAllItems, updateItem, addItem, deleteItem, getItems } from "../controllers/item.controllers.js";
import { verifyToken } from "../utils/VerifyUser.js";
import multer from 'multer'

const router = express.Router();

const storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, add) => {
        return add(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage });

router.post('/additem', verifyToken, upload.single("image"), addItem);
router.put('/updateitem/:itemId', verifyToken, updateItem);
router.post('/getallitems', getAllItems);
router.get('/getitem/:userId', verifyToken, getItems);
router.delete('/deleteitem/:itemId', verifyToken, deleteItem);

export default router;