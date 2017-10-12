// Require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create article schema
const ToDoSchema = new Schema({
  // todo is a required string
  todo: {
    type: String,
    required: true
  },
  userId: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

// Create the ToDo model with the ToDoSchema
const ToDo = mongoose.model("ToDo", ToDoSchema);

// Export the model
module.exports = ToDo;