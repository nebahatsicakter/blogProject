var CryptoJS = require("crypto-js");
const { adminUserModel } = require("../models/adminUser");
const { userLoginKey } = require("../env/shaKey");


const adminUserController = {
  add: (req, res) => {

    var encryptPassword = CryptoJS.AES.encrypt(req.body.password, userLoginKey).toString();

    var adminUser = new adminUserModel({
      email: req.body.email,
      password: encryptPassword,
    });

    adminUser.save((err, doc) => {
      if (!err) {
        console.log("Admin User Eklendi");
        res.json(doc);
      } else {
        console.log("Admin User eklenirken Hata meydana geldi", err);
        res.status(500).json(err);
      }
    });
  },

  getAll: (req, res) => {
    adminUserModel.find({}, (err, doc) => {
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
    adminUserModel.findByIdAndRemove(id,(err,doc)=>{
      if (!err && doc!=null) {
        console.log("Kullanıcı silindi",doc)
        res.json(doc)
    }
    else if(doc==null){
       console.log("Admin User bulunamadı.")
       res.status(404).json(doc)

    }
    else {
        res.status(500).json(err)
    }

    })
  },
  update: (req,res)=>{
    var id=req.body.id;
    adminUserModel.findById(id,(err,doc)=>{
      if(!err && doc!=null){
        doc.email=req.body.email
        doc.save();
        res.json(doc);
      }
      else if(doc==null){
        res.status(404).json("Kullanıcı bulunamadı")
      }
      else{
        res.status(500).json(err)
      }
    })
  }
};

module.exports = { adminUserController };
