const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes');
 app.use(bodyParser.urlencoded({extended:true}));
 require('dotenv').config();

const port =process.env.PORT;
const host= process.env.HOST;

mongoose.connect(process.env.URI,{
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false})
    .then(()=>{
        app.listen(port,host,()=>{
            console.log(`http://${host}:${port}`);
        })
        console.log("Connected")
    })
    .catch((err)=>console.log(err))
app.get('/',(req,res)=>{
    res.send("hello");
})

app.use('/', route)

