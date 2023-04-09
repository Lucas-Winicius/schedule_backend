const TaskModel = require("../models/task");

module.exports = class {
  static async createTask(body) {
    const task = new TaskModel(body);
    let taskReturned = await task.save();
    return taskReturned;
  }

  static HandleErrors(error) {
    if (error.code === 11000) {
      const keys = Object.keys(error.keyValue);
      return {
        statusCode: 400,
        message: `Some user is already using the ${keys.join(" and ")}`,
        secondaryMessage:
          "Oops! It seems someone has already registered with this email/phone number.",
        date: Date.now(),
        success: false,
      };
    }

    return {
      statusCode: error.statusCode || 500,
      message: error.message || "It seems an unidentified error has occurred.",
      secondaryMessage:
        error.secondaryMessage ||
        "Oops! Something went wrong and we don't know what it is. It's more mysterious than the contents of a witch's bag!",
      date: Date.now(),
      success: error.success || false,
    };
  }
};
