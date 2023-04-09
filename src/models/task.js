const { model, Schema } = require("mongoose");

const taskSchema = new Schema({
  name: { type: String, requred: true },
  surname: { type: String, default: "" },
  telephone: { type: String, unique: true },
  email: { type: String, unique: true },
  authorId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const TaskModel = model("Tasks", taskSchema);

module.exports = TaskModel;
