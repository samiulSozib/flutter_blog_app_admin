require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const setMiddleware=require('./middleware/middleware')
const setRoute=require('./route/route')


const app=express()

// set middleware
setMiddleware(app)
// set route
setRoute(app)

const PORT=process.env.PORT||8000

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.btawc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
    .then(()=>{
        console.log('Database connect succsee')
        app.listen(PORT,()=>{
            console.log('Server created success')
        })
    })