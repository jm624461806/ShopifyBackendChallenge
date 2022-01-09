const express = require('express');
const inventories = require('./routes/inventories.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongodbEndPoint = 'mongodb+srv://shopify:shopify@cluster0.gpy8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongodbEndPoint, { useNewUrlParser: true })
const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

app.use('/inventory', inventories);

app.listen(8000, function() {
    console.log(`server started on port 8000`);
});