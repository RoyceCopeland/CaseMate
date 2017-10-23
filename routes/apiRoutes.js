const express = require('express');
const journalEntriesController = require("./controllers/journalEntriesController");
const router = new express.Router();


//journalEntry api routes
router.route("/")
.get(journalEntriesController.findAll)
.post(journalEntriesController.create);

// Matches with "/api/journalEntries/:id"
router
.route("/:id")
.get(journalEntriesController.findById)
.put(journalEntriesController.update)
.delete(journalEntriesController.remove);

module.exports = router;

