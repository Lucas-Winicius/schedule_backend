const ValidateContact = require("../lib/ValidateContact");
const ManageContact = require("../lib/ManageContact");

module.exports = async (req, res) => {
  const body = req.body;
  let contact;

  try {
    ValidateContact.containsEmailOrPhone(body);
    ValidateContact.validateEmail(body);
    ValidateContact.containsName(body);
    ValidateContact.containsAuthorId(body);
    contact = await ManageContact.createContact(body);
  } catch (error) {
    const err = ManageContact.HandleErrors(error);
    return res.status(err.statusCode).json(err);
  }

  const resObj = {
    statusCode: 200,
    success: true,
    message:
      "Congratulations! Your request has been successfully processed. Now you can celebrate with a cup of coffee! ☕️",
    date: Date.now(),
    data: contact,
  };

  res.status(201).json(resObj);
};
