import mongoose from "mongoose";

const journalEntries = new mongoose.Schema({
    mood: { 
        type: String, 
    }, 
    subject: { 
        type: String,
    },
    entry: { 
        type: String,
        required: true
    },
    dateSubmitted: {
        type: Date,
        default: Date.now //Auto set the date when an entry is created
    }
});


//Import Authenticated User if there is time

    // userId: {
    //     type: mongoose.Schema.Types.ObjectId, // This links the entry to a specific user
    //     ref: 'User', // The name of the User model
    //     required: true
    // },
    

journalEntries.index({name:1}) //ordered

export default mongoose.model('Entries', journalEntries)