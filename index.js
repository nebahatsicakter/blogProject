const express=require('express')
const app=express();
var bodyParser = require('body-parser');


const {connectionHelper} = require('./dbConnect/connectionHelper')
const {adminUserController}=require('./controllers/adminUserController')
const {blogCategoryController}=require('./controllers/blogCategoryController')
const {blogController}=require('./controllers/blogController')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const http=require('http')
const server= http.createServer(app);

//db connect
connectionHelper.connect();

//Admin User ile ilgili işlemler

app.get('/api/adminusers',(req,res)=>{
  adminUserController.getAll(req,res)
})

app.post('/api/adminuser', (req, res) => {
  adminUserController.add(req, res);
})

app.delete('/api/deleteUser', (req, res) => {
  adminUserController.delete(req, res)
})

app.put('/api/updateUser',(req,res)=>{
  adminUserController.update(req,res)
})

//Blog Kategorisi ile ilgili işlemler

app.get('/api/categories',(req,res)=>{
  blogCategoryController.getAll(req,res)
})

app.post('/api/addCategory', (req, res) => {
  blogCategoryController.add(req, res);
})

app.delete('/api/deleteCategory', (req, res) => {
  blogCategoryController.delete(req, res)
})

app.put('/api/updateCategory',(req,res)=>{
  blogCategoryController.update(req,res)
})

//Blog ile ilgili işlemler
app.get('/api/blogList',(req,res)=>{
  blogController.getAll(req,res)
});
app.post('/api/addBlog',(req,res)=>{
  blogController.add(req,res)
});


server.listen(8080,(err,doc)=>{
  if(!err){
  console.log('Sunucu çalışıyor')}
  else{
    console.log('Sunucuya bağlantı sırasında hata meydana geldi.',err)
  }
})