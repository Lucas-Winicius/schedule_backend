const ContactPost = require("./controller/contactPost");
const ContactGet = require("./controller/contactGet");
const express = require("express");
const router = express();

router.post("/contacts", ContactPost);
router.get("/contacts", ContactGet);

module.exports = router;
