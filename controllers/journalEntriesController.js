const db = require("../models/");

module.exports = {
  findAll: function(req, res) {
    db.Entry
      .find(req.query)
     //sort entries by date
      .sort({ title: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
     // console.log("findAll route hit")
  },
  findById: function(req, res) {
    db.Entry
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("inside the Create", req.body);
    db.Entry
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Entry
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Entry
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
