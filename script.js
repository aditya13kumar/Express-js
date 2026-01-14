import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=> {
    next();
    console.log("middleware run!!");
})

app.get('/',(req,res)=>{
    res.send("hello mr addii11");
})


app.get('/profile',(req,res)=>{
    res.send("welcome to profile!!");
})


app.listen(5000,()=>{
    console.log('server runn!!');
})