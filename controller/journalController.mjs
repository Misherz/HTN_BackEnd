import journalEntries from '../models/entriesSchema.mjs'

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
async function getAllEntry(req, res){
    try {

        let allEntries = await Entries.find({});

        res.json(allEntries);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
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

async function deleteEntry(req, res){
    try {

        let deleteEntry = await Entries.findByIdAndDelete(req.params.id);
        
        res.json(deleteEntry);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
};

async function seedDB(req, res) {
    try {
        await Entries.create(Entry);

        res.json({msg: "DB Seeded"})
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server error'});
    }
}


export default {
  createEntry,
  getAllEntry,
  getOneEntry,
  updateOneEntry,
  deleteEntry
};