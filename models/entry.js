const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  date: { type: String, required: true },
  title: { type: String, required: true },
  body: String,
 // date: { type: Date, default: Date.now }
});

const entry = mongoose.model("Entry", entrySchema);

module.exports = entry;