const Skill = require("../models/Skill");

module.exports = {
  // This method handles retrieving articles from the db
  findByUser: function(req, res) {
    Skill.find({ userId: req.params.id })
    .then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    }); 
  },

  findById: function(req, res) {
    Skill.find({ _id: req.params.id})
    .then(function(doc) {
      res.json(doc);
    }).catch(function(err){
      res.json(err);
    })
  },

  add: function(req, res) {
    Skill.create(req.body)
    .then(function(doc){
      res.json(doc);
    }).catch(function(err){
      res.json(err);
    })
  },

  update: function(req, res) {
    Skill.update({
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
    Skill.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
