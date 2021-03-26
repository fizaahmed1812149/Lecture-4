var express=require('express')
var router=express.Router()

//http://localhost:3000/books/
router.get('/',(req,res)=>{
    res.send("Welcome to my home page")
})

router.post('/',(req,res)=>{
    res.send("Add a book!")
})
router.put('/',(req,res)=>{
    res.send("Update a book")
})
router.delete('/',(req,res)=>{
    res.send("Delete a book")
})
module.exports=router