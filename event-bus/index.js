const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  // Posts service
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err);
  });

  // Comments Service
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err);
  });

  // Moderation
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err);
  });

  // Query Service
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err);
  });

  res.send({ status: "ok" });
});

app.listen(4005, () => {
  console.log("listening on 4005");
});
