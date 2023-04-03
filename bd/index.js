const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql');
const fs = require('fs')


const db = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"book",
    password:"root"
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("images"));

app.get("/api/getsmallbook",(req,res)=>{
    const sqlSelectSmall = "SELECT id, title, author, price, img FROM book WHERE 1"
    db.query(sqlSelectSmall,(err,result)=>{
        res.send(result)
        console.log(result)
        console.log(err)
    })
})
app.get("/api/getbook/:dd",(req,res)=>{
    const id = req.params.dd
    const sqlBook = "SELECT * FROM book WHERE id = ?"
    console.log(sqlBook)
    db.query(sqlBook,id,(err,result)=>{
        res.send(result)
        console.log(result)
        console.log(err)
    })
})

app.post("/api/register",(req, res)=>{

    const login = req.body.login
    const password = req.body.password

    const sqlInsert = "INSERT INTO users(login, password) VALUES (?,?)"
    
    db.query(sqlInsert,[login,password], (err,result)=>{
        console.log(result)
    })
})

app.post("/api/login",(req,res)=>{
    const login = req.body.login
    const password = req.body.password

    const sqlInsert = "SELECT * FROM users WHERE login = ? AND password = ?"
    db.query(sqlInsert,[login,password], (err,result)=>{
        console.log("Vot tyt smotry ",result)
        if(result.length == 0){
            res.send({message:"no"})
        }else{
            res.send(result)
        }
            
    })
})

app.post("/api/insertbook",(req, res)=>{

    const title = req.body.title
    const author = req.body.author
    const price = req.body.price
    const rating = req.body.rating
    const id = req.body.id
    const publishing = req.body.publishing
    const series = req.body.series
    const size = req.body.size
    const year = req.body.year
    const pages = req.body.pages
    const type = req.body.type
    const сirculation = req.body.сirculation
    const weight = req.body.weight
    const annotation = req.body.annotation
    const img = req.body.img
    
    const sqlInsert = "INSERT INTO book(title, author, price, rating, id_book, publishing, series, size, year, pages, type, сirculation, weight, annotation, img) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsert,[title,author,price,rating,id,publishing,series,size,year,pages,type,сirculation,weight,annotation,img], (err,result)=>{
        console.log(err)
    })
})


app.listen(3001,()=>{
    console.log("RUN!")
})