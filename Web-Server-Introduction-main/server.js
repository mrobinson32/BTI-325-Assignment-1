/**********************************************************************************
BTI325 – Assignment 1
I declare that this assignment is my own work in accordance with Seneca Academic Policy.
No part of this assignment has been copied manually or electronically from any other source
(including web sites) or distributed to other students.

Name: Matthew Robinson
Student ID: 147909238
Date: September 27, 2024

Online (Vercel) URL: https://your-app-name.vercel.app
*********************************************************************************/

const express = require('express');
const path = require("path");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get('/custom', (req, res) => {
    res.send('Matthew Robinson - 147909238');
});

app.listen(HTTP_PORT, () => { console.log(`server listening on: ${HTTP_PORT}`) });
