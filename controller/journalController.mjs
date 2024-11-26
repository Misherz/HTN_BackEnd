import Entries from '../models/entriesSchema.mjs'
import mongoose from 'mongoose';

//post
async function createEntry(req, res){
    try {

        let newEntry = new Entries(req.body);

        await newEntry.save();

        res.status(200).json(newEntry);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
};

//get
async function getAllEntries(req, res) {
    try {

        let allEntries = await Entries.find({});

        res.json(allEntries);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    };
};

async function getOneEntry(req, res){
    try {

        let oneEntry = await Entries.findById(req.params.id);

        res.json(oneEntry);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
};

async function updateOneEntry(req, res){
    try {

        let updateEntry = await Entries.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updateEntry);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
};

// async function deleteEntry(req, res){
//     try {

//         let deleteEntry = await Entries.findByIdAndDelete(req.params.id);
        
//         res.json({ msg: 'Item Deleted' }); 

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({msg: 'Server error'});
//     }
// };

async function deleteEntry(req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'Invalid ID format' });
    }

    try {
        const entry = await Entries.findByIdAndDelete(req.params.id);
        
        if (!entry) {
            return res.status(404).json({ msg: 'Entry not found' });
        }

        res.json({ msg: 'Item Deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
}

async function seedDB(req, res) {
    try {
        await Entries.deleteMany({}); //delete and reseed to avoid duplicates
        await Entries.create(entries);

        res.json({msg: "DB Seeded"})
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
}


export default {
  createEntry,
  getAllEntries,
  getOneEntry,
  updateOneEntry,
  deleteEntry,
  seedDB
};