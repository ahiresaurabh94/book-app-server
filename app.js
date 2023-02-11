const express = require("express");
const app = express();

require("dotenv").config()


const cors = require("cors")
app.use(cors());

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());

const registerRoute = require('./Routes/register')
const loginRoute = require('./Routes/login')
const listRoute = require('./Routes/list')
const Authentication = require('./middleware/auth')

app.use("/", registerRoute)
app.use("/", loginRoute)
app.use("/",Authentication, listRoute)

module.exports = app

