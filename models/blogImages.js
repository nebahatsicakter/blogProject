const mongoose = require("mongoose");
const { Schema } = mongoose

const blogImagesSchema = new Schema({
  path: String,
  blogId: String,
  id: String,
  isDeleted: Boolean,
  addDate: { type: Date, default: Date.now },
});
const blogImages = mongoose.model("BlogImages", blogImagesSchema);

module.exports = {
  blogImages,
};
