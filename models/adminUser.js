const mongoose = require('mongoose')
const { Schema } = mongoose

const adminUserSchema = new Schema({
  email:String,
  password:String,
  lastLoginDate: {type: Date, default: Date.now},
  id:String,
  isDeleted:Boolean,
  addDate: { type: Date, default: Date.now },
});
const adminUserModel = mongoose.model('AdminUser', adminUserSchema );

module.exports={
  adminUserModel
};
