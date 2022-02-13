const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  content: String,
  mainImg: {data: Buffer,contentType: String },
  blogCategoryId: { type: Schema.Types.ObjectId, ref: "blogCategory" },
  id: String,
  addDate: { type: Date, default: Date.now },
  isDeleted: Boolean,
});

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = {
  blogModel,
};
