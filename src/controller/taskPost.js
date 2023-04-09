const ValidateTask = require("../lib/ValidateTask");
const ManageTask = require("../lib/ManageTask");

module.exports = async (req, res) => {
  const body = req.body;
  let task;

  try {
    ValidateTask.containsEmailOrPhone(body);
    ValidateTask.validateEmail(body);
    ValidateTask.containsName(body);
    ValidateTask.containsAuthorId(body);
    task = await ManageTask.createTask(body);
  } catch (error) {
    const err = ManageTask.HandleErrors(error);
    return res.status(err.statusCode).json(err);
  }

  const resObj = {
    success: true,
    message:
      "Congratulations! Your request has been successfully processed. Now you can celebrate with a cup of coffee! ☕️",
    date: Date.now(),
    task,
  };

  res.status(201).json(resObj);
};
