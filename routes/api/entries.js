const router = require('express').Router();
const journalEntriesController = require("../../controllers/journalEntriesController");


//journalEntry api routes
router.route("/")
.get(journalEntriesController.findAll)
.post(journalEntriesController.create);

// Matches with "/api/journalEntries/:id"
router.route("/:id")
.get(journalEntriesController.findById)
.put(journalEntriesController.update)
.delete(journalEntriesController.remove);

module.exports = router;

