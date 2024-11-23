import express from 'express';
import journalEntries from '../models/entriesSchema.mjs';

const router = express.Router();

// Create
router.post('/journal', async (req, res) => {
    try {

        let newEntry = new Entries(req.body);

        await newEntry.save();

        res.status(200).json(newEntry);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});