
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/build')));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
formRoutes = (require("./routes/formRoutes"))

app.use(formRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});