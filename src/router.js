const ContactPost = require("./controller/contactPost");
const ContactModel = require("./models/contact");
const express = require("express");
const router = express();

router.get("/", (req, res) => {
  const contact = new ContactModel.ContactModel({
    name: "Lucas",
    surname: "Winicius",
    telephone: "+55(11)111111111",
    email: "lucas@example.com",
    authorId: "D08623263894",
  });

  contact
    .save()
    .then((contact) => res.status(201).json(contact))
    .catch((err) => res.send(500).json(err));
});

router.post("/contacts", ContactPost);

module.exports = router;
