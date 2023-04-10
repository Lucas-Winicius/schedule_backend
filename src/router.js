const ContactPost = require("./controller/contactPost");
const ContactGet = require("./controller/contactGet");
const ContactPatch = require("./controller/contactPatch");
const express = require("express");
const router = express();

router.post("/contacts", ContactPost);
router.get("/contacts", ContactGet);

router.patch("/contacts/:id", ContactPatch);

module.exports = router;
