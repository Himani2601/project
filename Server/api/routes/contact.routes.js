import express from 'express'
import { addContact, getcontacts } from '../controllers/contact.controllers.js'

const router = express.Router();

router.post('/addcontact', addContact);
router.get('/getcontact', getcontacts);

export default router;