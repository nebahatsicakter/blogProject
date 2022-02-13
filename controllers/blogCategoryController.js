const { blogCategoryModel } = require("../models/blogCategory");



const blogCategoryController = {
  add: (req, res) => {

  

    var blogCategory = new blogCategoryModel({
      name: req.body.name
    });

    blogCategory.save((err, doc) => {
      if (!err) {
        console.log("Kategori Eklendi");
        res.json(doc);
      } else {
        console.log("Kategori eklenirken hata meydana geldi", err);
        res.status(500).json(err);
      }
    });
  },

  getAll: (req, res) => {
    blogCategoryModel.find({}, (err, doc) => {
      if (!err && doc != null) {
        res.json(doc);
      } else if (doc == null) {
        res.json(null);
      } else {
        console.log("Listeleme sırasında hata meydana geldi. ", err);
        res.status(404).json(err);
      }
    });
  },
  delete:(req,res)=>{
    var id= req.body.id;
    blogCategoryModel.findByIdAndRemove(id,(err,doc)=>{
      if (!err && doc!=null) {
        console.log("Kategori silindi",doc)
        res.json(doc)
    }
    else if(doc==null){
       console.log("Kategori bulunamadı.")
       res.status(404).json(doc)

    }
    else {
        res.status(500).json(err)
    }

    })
  },
  update: (req,res)=>{
    var id=req.body.id;
    blogCategoryModel.findById(id,(err,doc)=>{
      if(!err && doc!=null){
        doc.name=req.body.name
        doc.save();
        res.json(doc);
      }
      else if(doc==null){
        res.status(404).json("Kategori bulunamadı")
      }
      else{
        res.status(500).json(err)
      }
    })
  }
};

module.exports = { blogCategoryController };

