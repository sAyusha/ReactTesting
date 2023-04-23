const mongoose = require("mongoose");

const PhonebookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

const Phonebook = mongoose.model("Phonebook", PhonebookSchema);

module.exports = Phonebook;
