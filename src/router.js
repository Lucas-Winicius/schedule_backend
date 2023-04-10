const ContactPost = require("./controller/contactPost");
const ContactGet = require("./controller/contactGet");
const ContactPatch = require("./controller/contactPatch");
const ContactDelete = require("./controller/contactDelete");
const express = require("express");
const router = express();

router.post("/contacts", ContactPost);
router.get("/contacts", ContactGet);

router.patch("/contacts/:id", ContactPatch);
router.delete("/contacts/:id", ContactDelete);

module.exports = router;
