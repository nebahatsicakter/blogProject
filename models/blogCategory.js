const mongoose = require("mongoose");
const { Schema } = mongoose

const blogCategorySchema = new Schema({
  name: String,
  id: String,
  isDeleted: Boolean,
  addDate: { type: Date, default: Date.now },
});

const blogCategoryModel = mongoose.model("BlogCategory", blogCategorySchema);

module.exports = {
  blogCategoryModel,
};
