const ManageContact = require("../lib/ManageContact");
const ValidateContact = require("../lib/ValidateContact");

module.exports = async (req, res) => {
  const { authorId, ...body } = req.body;
  let contact;
  
  try {
    body.email && ValidateContact.validateEmail(body)
    contact = await ManageContact.updateContact(req?.params?.id, body)
  } catch (error) {
    const err = ManageContact.HandleErrors(error);
    return res.status(err.statusCode).json(err);
  }

  const resObj = {
    statusCode: 200,
    message: "Contact updated successfully",
    date: Date.now(),
    data: contact
  }

  res.status(200).json(resObj);
};
