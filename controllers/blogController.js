const { blogModel } = require("../models/blog");
const { blogCategoryModel } = require("../models/blogCategory");

const blogController = {
  add: (req, res) => {
 
    var blog = new blogModel({
      title: req.body.title,
      content: req.body.content,
      blogCategoryId: req.body.categoryId,
    });

    blog.save((err, doc) => {
      if (!err) {
        console.log("Blog Kaydedildi");
        res.json(doc);
      } else {
        console.log("Blog kaydı sırasında hata meydana geldi", err);
        res.status(500).json(err);
      }
    });
  },

  getAll: (req, res) => {
   blogModel.find({},(err,doc)=>{
    if (!err && doc != null) {
        res.json(doc);
      } else if (doc == null) {
        res.json(null);
      } else {
        console.log("Listeleme sırasında hata meydana geldi. ", err);
        res.status(404).json(err);
      }
   })
  },
  delete: (req, res) => {
    var id = req.body.id;
    blogModel.findByIdAndRemove(id, (err, doc) => {
      if (!err && doc != null) {
        console.log("Blog kaydı silindi", doc);
        res.json(doc);
      } else if (doc == null) {
        console.log("Blog kaydı bulunamadı.");
        res.status(404).json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  update: (req, res) => {
    var id = req.body.id;
    blogModel.findById(id, (err, doc) => {
      if (!err && doc != null) {
        doc.title = req.body.email;
        doc.content = req.body.content;
        doc.blogCategoryId = req.body.categoryId;
        doc.save();
        res.json(doc);
      } else if (doc == null) {
        res.status(404).json("Blog kaydı bulunamadı");
      } else {
        res.status(500).json(err);
      }
    });
  },
};

module.exports = { blogController };
