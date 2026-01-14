
import express from 'express';
import path from 'path';


const app = express();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    res.render("index");
})


app.listen(4000,()=>{
    console.log('its running!');
})