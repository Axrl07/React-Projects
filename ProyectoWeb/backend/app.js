const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const fileUpload = require('express-fileupload');

const corsOptions = { origin: true, optionSuccessStatus: 200 };
const app = express();

app.use(cors(corsOptions));
app.use(bodyparser.json({ limit: "10mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "10mb", extended: true }));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/temp/'
}));

app.get("/", (req, res) => {
  res.status(200).send({ message: "Proyecto 2: UHospital" });
});

app.use('/auth', require('./routes/auth.routes.js'));
//app.use('/user', require('./routes/user.routes.js'));

module.exports = app;