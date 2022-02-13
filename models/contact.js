const mongoose = require("mongoose");
const { Schema } = mongoose

const contactSchema = new Schema({
  title: String,
  message:String,
  id: String,
  isDeleted: Boolean,
  addDate: { type: Date, default: Date.now },
});

const contact = mongoose.model("Contact", contactSchema);

module.exports = {
  contact,
};
