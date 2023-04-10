const ManageContact = require("../lib/ManageContact");
const ValidateContacts = require("../lib/ValidateContact");

module.exports = async (req, res) => {
  let contacts;

  try {
    ValidateContacts.containsAuthorId(req.body);
    contacts = await ManageContact.getContactByFilter({ authorId: req.body.authorId });
    ValidateContacts.hasContact(contacts);
  } catch (error) {
    const err = ManageContact.HandleErrors(error);
    return res.status(err.statusCode).json(err);
  }

  const resObj = {
    statusCode: 200,
    success: true,
    message: "Contacts retrieved successfully",
    date: Date.now(),
    data: contacts,
  };

  res.status(200).json(resObj);
};
