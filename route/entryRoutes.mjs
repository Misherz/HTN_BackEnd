import express from 'express';
import journalCTRL from '../controller/journalController.mjs'


const router = express.Router();

// Create
router
    .route('/')
    .post(journalCTRL.createEntry)
    .get(journalCTRL.getAllEntry)

router
    .route('/:id')
    .get(journalCTRL.getOneEntry)
    .patch(journalCTRL.updateOneEntry)
    .delete(journalCTRL.deleteEntry)

export default router;
