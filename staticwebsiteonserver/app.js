const express=require('express')
const path = require('path')
const app = express()

// console.log(path.join(__dirname,'/public'))

// builtin middleware
// app.use(express.static(root,[option]))       syntax
const staticpath = path.join(__dirname,'/public')
app.use(express.static(staticpath))


app.get("/",(req,res)=>{
    res.send('hello')

})

app.get('/about',(req,res)=>{
    res.send('from about')
})
 

app.listen(8000,()=>{
    console.log('listning from 3000')
})