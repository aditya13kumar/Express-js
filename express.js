import express from 'express'

const app = express()

app.use(function(req,res,next){
    console.log(`aditya!!`);
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get("/pissu", (req, res) => {
  res.send('Hello Pissu');
})

app.get('/pissu/:username', (req, res) => {
  res.send(`Hello Pissu ${req.params.username}`)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})