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



// Read
router.get('/journal', async (req, res) => {
    try {

        let allEntries = await Entries.find({});

        res.json(allEntries);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});

// Read by ID
router.get('/journal:id', async (req, res) => {
    try {

        let oneEntry = await Entries.findById(req.params.id);

        res.json(oneEntry);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});

// Update
router.patch('/journal:id', async (req, res) => {
    try {

        let updateEntry = await Entries.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updateEntry);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});


// Delete
router.delete('/journal:id', async (req, res) => {
    try {

        let deleteEntry = await Entries.findByIdAndDelete(req.params.id);
        
        res.json(deleteEntry);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
});

export default router;

