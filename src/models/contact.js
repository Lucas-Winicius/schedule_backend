const { model, Schema } = require("mongoose");

const contactSchema = new Schema({
  name: { type: String, requred: true },
  surname: { type: String, default: "" },
  telephone: { type: String, unique: true },
  email: { type: String, unique: true },
  authorId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ContactModel = model("Contacts", contactSchema);

module.exports = ContactModel;
