const express=require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send("hello")
    res.end()
})
app.listen(3500);