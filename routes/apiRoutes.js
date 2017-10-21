const express = require('express');
const actionItemsController = require("../controllers/actionItemsController");
const router = new express.Router();


//actionItem api routes
router.get("/actionItem/user/:userId", actionItemsController.findByUser);
router.get("/actionItem/skill/:userId", subtaskController.findBySkill);
router.get("/actionItem/:id", actionItemsController.findById);
router.post("/actionItem", actionItemsController.add);
router.patch("/actionItem/:id", actionItemsController.update);



module.exports = router;


