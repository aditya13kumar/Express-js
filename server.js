import express from 'express';
//const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    res.send('Welcome for learning express js');
});

app.get('/hello',(req,res)=>{
    res.send(`helllooo aditya!!`);
})

app.get('/healthy',(req,res)=>{
    res.status(400).json({message:'all good!!'});
})

app.post('/api/users',(req,res)=>{
    console.log(req.params);
    res.send({});
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`server is lo listening ${PORT} `)
});