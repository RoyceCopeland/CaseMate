const express = require('express');
const journalEntriesController = require("../controllers/journalEntriesController");
const router = new express.Router();


//journalEntry api routes
router.get("/journalEntry", journalEntriesController.findAll);

router.get("/journalEntry/:Id", journalEntriesController.findById);
router.delete("/journalEntry/:id", journalEntriesController.findById);
router.post("/journalEntry", journalEntriesController.create);




module.exports = router;


