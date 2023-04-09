const rateLimit = require("express-rate-limit");
const routes = require("./src/router");
const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: true, // Disable the `X-RateLimit-*` headers
  message: {
    statusCode: 429,
    message: `Request limit reached for this IP, please try again in fifteen minutes :[`,
    secondaryMessage: `Sorry, but you have reached the maximum limit of allowed requests. You will need to wait a bit before trying again. Take this time to do some stretching and relaxation exercises. Who knows, you might come back stronger and faster than ever! 💪🏼😉`,
    success: false,
  },
});

app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("mongodb connected");
    app.emit("connect");
  })
  .catch(() => {
    console.log("error on connect");
  });

app.on("connect", () => {
  app.listen(process.env.PORT, () =>
    console.log(`Server start on: http://localhost:${process.env.PORT}`)
  );
});
