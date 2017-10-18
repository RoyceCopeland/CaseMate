const express = require('express');
const skillController = require("../controllers/skillController");
const subtaskController = require("../controllers/subtaskController");
const toDoController = require("../controllers/toDoController");
const actionItemsController = require("../controllers/actionItemsController");


const router = new express.Router();


//skill api routes
router.get("/skill/user/:userId", skillController.findByUser);
router.get("/skill/:id", skillController.findById);
router.post("/skill", skillController.add);
router.patch("/skill/:id", skillController.update);
router.delete("/skill/:id", skillController.delete);

//subtask api routes
router.get("/subtask/user/:userId", subtaskController.findByUser);
router.get("/subtask/skill/:userId", subtaskController.findBySkill);
router.get("/subtask/:id", subtaskController.findById);
router.post("/subtask", subtaskController.add);
router.patch("/subtask/:id", subtaskController.update);
router.delete("/subtask/:id", subtaskController.delete);

//todo api routes
router.get("/todo/user/:userId", toDoController.findByUser);
router.get("/todo/:id", toDoController.findById);
router.post("/todo", toDoController.add);
router.patch("/todo/:id", toDoController.update);
router.delete("/todo/:id", toDoController.delete);

//actionItem api routes
router.get("/actionItem/user/:userId", actionItemsController.findByUser);
router.get("/actionItem/skill/:userId", subtaskController.findBySkill);
router.get("/actionItem/:id", actionItemsController.findById);
router.post("/actionItem", actionItemsController.add);
router.patch("/actionItem/:id", actionItemsController.update);



module.exports = router;


