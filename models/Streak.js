// Require mongoose
//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
//
//// Create article schema
//const StreakSchema = new Schema({
//  // todo is a required string
//  streak: {
//    type: Number,
//    required: true
//  },
//  subtask: String,
//  // This saves notes' ObjectIds, ref refers to the Skill model
//  skillId: [{
//    type: Schema.Types.ObjectId,
//    ref: "Skill"
//  }]
//});
//
//// Create the ToDo model with the ToDoSchema
//const Streak = mongoose.model("Streak", StreakSchema);
//
//// Export the model
//module.exports = Streak;