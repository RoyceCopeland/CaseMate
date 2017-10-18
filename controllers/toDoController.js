const ToDo = require("../models/ToDo");

module.exports = {
  // This method handles retrieving articles from the db
  findByUser: function(req, res) {
    ToDo.find({ userId: req.params.id })
    .then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    }); 
  },

  findById: function(req, res) {
    ToDo.find({ _id: req.params.id})
    .then(function(doc) {
      res.json(doc);
    }).catch(function(err){
      res.json(err);
    })
  },

  add: function(req, res) {
    ToDo.create(req.body)
    .then(function(doc){
      res.json(doc);
    }).catch(function(err){
      res.json(err);
    })
  },

  update: function(req, res) {
    ToDo.update({
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
    ToDo.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
