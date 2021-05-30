require('dotenv').config();//dotenv extention connecting env file with this page
const express = require("express")
const session = require("express-session")
const jwt = require('jsonwebtoken')
const mysql = require('mysql')

const app = express()

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'task-manager'
})

app.use(session({
    secret : "key thta will sign cookies",
    resave:false,
    saveUninitialized:false
}))

  

app.use(express.json())
const posts = [
    {
        username : "sarun",
        title : "husband"
    },
    {
        username : "ema sarun",
        title : "daughter"
    },


]
app.get('/posts',authenticativeToken,(req,res)=>{
    res.json(posts.filter(post => post.username === req.user.user))
})
app.post('/login',(req,res)=>{
    const username = req.body.username
    const user = { user :username}
    const accessToken = jwt.sign(user,process.env.ACCESS_TOCKEN_SECRET)
    res.json({accessToken:accessToken})
})

app.get('/test',(req,res)=>{
    req.session.isAuth =true;
    console.log(req.session.id)
    res.send("hiiii welcome")
})

function authenticativeToken(req,res,next){
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOCKEN_SECRET,(err,user)=>{

        if(err) return res.sendStatus(403)
        req.user = user
        next()

    })
}

app.listen(3000)