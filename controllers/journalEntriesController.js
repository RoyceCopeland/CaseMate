const journalEntry = require("../models/journalEntry");

module.exports = {
  // This method handles retrieving articles from the db


  findById: function(req, res) {
    Subtask.find({ _id: req.params.id})
    .populate('Timeline')
    .then(function(doc) {
      res.json(doc);
    }).catch(function(err){
      res.json(err);
    })
  },
  
  add: function(req, res) {
    Subtask.create(req.body)
    .then(function(doc){
      res.json(doc);
    }).catch(function(err){
      res.json(err);
    })
  },

  update: function(req, res) {
    Subtask.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
    
  },

  delete: function(req, res) {
    Subtask.delete({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
    
  }
};
