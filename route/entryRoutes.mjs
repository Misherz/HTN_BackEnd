import express from 'express';
import journalCTRL from '../controller/journalController.mjs'


const router = express.Router();

router.route('/seed').get(journalCTRL.seedDB)

// Create
router
    .route('/')
    .post(journalCTRL.createEntry)
    .get(journalCTRL.getAllEntries)

router
    .route('/:id')
    .get(journalCTRL.getOneEntry)
    .patch(journalCTRL.updateOneEntry)
    .delete(journalCTRL.deleteEntry)


export default router;
