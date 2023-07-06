const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/phonebook-api")
  .then(() => console.log("Database connection sucessfull"))
  .catch((err) => console.error(err));

const Phonebook = require("./models/Phonebook");

app.get("/phonebook", async (req, res) => {
  const phonebook_data = await Phonebook.find();

  res.json(phonebook_data);
});

app.post("/phonebook/new", (req, res) => {
  const phonebook = new Phonebook({
    name: req.body.name,
    number: req.body.number,
  });

  phonebook.save();

  res.json(phonebook);
});

app.put("/phonebook/update/:id", async (req, res) => {
  const updatedEntry = {
    name: req.body.name,
    number: req.body.number,
  };

  const result = await Phonebook.findByIdAndUpdate(
    req.params.id,
    updatedEntry,
    {
      new: true,
    }
  );

  res.json(result);
});

app.delete("/phonebook/delete/:id", async (req, res) => {
  const result = await Phonebook.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.listen(3000, () => console.log("Server is running at port 3000"));
