const express = require('express');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const { config } = require("./config");

const app = express();

app.use(bodyParser.json());

