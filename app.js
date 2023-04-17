const express = require("express");
const connectDB = require("./config/db");
const CreateRoom = require("./models/CreateRoom");
const BookRoom = require("./models/BookRoom");
const BookedData = require("./models/BookedData");
const CustomerData = require("./models/CustomerData");

const app = express();

// Connect Database
connectDB();

app.use(express.json());


app.post("/hallbooking/createroom", async (req, res) => {
  try {
    const createData = await CreateRoom(req.body).save();
    res.send(createData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/hallbooking/bookroom", async (req, res) => {
  try {
    const bookData = await BookRoom(req.body).save();
    res.send(bookData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/hallbooking/bookeddata", async (req, res) => {
  try {
    const bookedData = await BookedData(req.body).save();
    res.send(bookedData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/hallbooking/getbookeddata", async (req, res) => {
  try {
    const getbookedData = await BookedData.find();
    res.send(getbookedData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/hallbooking/customerdata", async (req, res) => {
  try {
    const customerData = await CustomerData(req.body).save();
    res.send(customerData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/hallbooking/getcustomerdata", async (req, res) => {
  try {
    const getcustomerData = await CustomerData.find();
    res.send(getcustomerData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));