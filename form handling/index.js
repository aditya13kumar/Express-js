
import express from 'express';
import path from 'path';
import * as fs from 'node:fs/promises';



const app = express();

import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');


app.get("/",async(req,res)=>{
    const files = await fs.readdir('./files'); //Because fs/promises does not support callbacks; it only works with promises.
    res.render("index",{files:files});
})
app.get("/files/:filename",async(req,res)=>{
    const filedata=await fs.readFile(`./files/${req.params.filename}`,'utf-8');
    res.render('show',
        {filename:req.params.filename,
        filedata:filedata})
})

app.get("/edit/:filename",async(req,res)=>{
   res.render('edit',{filename:req.params.filename});
})

app.post("/edit",async(req,res)=>{
   await fs.rename(`./files/${req.body.privious}`,`./files/${req.body.newname}`);
   res.redirect("/");
   //console.log(req.body.newname);
})



app.post("/create",async function(req,res){
    await fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt` ,req.body.details);
    //res.render(createfile);
    res.redirect('/');
})

app.listen(4000,()=>{
    console.log('its running!');
})