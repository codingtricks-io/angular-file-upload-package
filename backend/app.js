const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

mongoose.connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@learning.eauwn.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true}
).then(()=> {
    app.listen(port, console.log(`Server running on port ${port} & connected to Database`))
}).catch ((err) => console.log(`Could not connect Database`, err))