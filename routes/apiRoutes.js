const express = require('express');
const journalEntriesController = require("../controllers/journalEntriesController");
const router = new express.Router();


//journalEntry api routes
router.get("/journalEntry/:Id", journalEntriesController.findById);
router.get("/journalEntry/skill/:Id", journalEntriesController.findById);
router.delete("/journalEntry/:id", journalEntriesController.findById);
router.post("/journalEntry", journalEntriesController.add);



module.exports = router;


