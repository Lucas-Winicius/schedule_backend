const ManageContact = require("../lib/ManageContact");

module.exports = async (req, res) => {
  let contact;

  try {
    contact = await ManageContact.deleteContact(req.params.id);
  } catch (error) {
    const err = ManageContact.HandleErrors(error);
    return res.status(err.statusCode).json(err);
  }

  const resObj = {
    statusCode: 200,
    message: "Contact deleted successfully",
    date: Date.now(),
    data: contact,
  };

  res.status(200).json(resObj);
};
