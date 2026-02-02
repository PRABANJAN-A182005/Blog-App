import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        return res.status(201).json({ message: 'Contact message received' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }   
});

export default router;