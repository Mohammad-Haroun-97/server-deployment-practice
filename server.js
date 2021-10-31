'use strict'

const express= require('express');
const server=express();

require('dotenv').config();
const PORT=process.env.PORT || 3050;

const generalExample1=require('./handlers/generalExample1')
const generalExample2 =require('./handlers/generalExample2')

// const middlewareFun1=require('./middleware/middlewareFun1')

const stamper=require('./middleware/stamper')

const middlewareFun2=require('./middleware/middlewareFun2')
const middlewareFun3=require('./middleware/middlewareFun3')




// // Routes

// // http:localhost:3050/

server.get('/', generalExample1)

// http:localhost:3050/bad
server.get('/bad', generalExample2)


// http:localhost:3050/data

server.get('/data', stamper, (req, res) => {

    const outputObject = {
      10: "even",
      5: "odd",
      "time": req.timestamp // we got this from the middleware
    };
  
    res.status(200).json(outputObject);
  });
  
  

// http:localhost:3050/data

server.use('*', middlewareFun2)



server.use( middlewareFun3)



function start(){

    server.listen(PORT , ()=>{
        console.log(`we are listening to this ${PORT}`);
    })
}


module.exports={
    
    server,
    start
}




