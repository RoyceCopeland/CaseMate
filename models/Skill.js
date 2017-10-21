// // Require mongoose
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Create article schema
// const SkillSchema = new Schema({
//   // skill is a required string
//   skill: {
//     type: String,
//     required: true
//   },
//   // motivation is a required string
//   motivation: {
//     type: String,
//     required: true
//   },
//   subtasks: [{
//     type: Schema.Types.ObjectId,
//     ref: "Subtask"
//   }],
//   // This saves notes' ObjectIds, ref refers to the User model
//   userId: [{
//     type: Schema.Types.ObjectId,
//     ref: "User"
//   }]
// });

// // Create the Skill model with the SkillsSchema
// const Skill = mongoose.model("Skill", SkillSchema);

// // Export the model
// module.exports = Skill;