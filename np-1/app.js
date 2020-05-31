const express=require('express');
const app=express();
// const {readFile}=require('fs');
// app.get('/',(req,res)=>{
//     res.render('index.ejs');
// });
app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/views/index.html`);
    // res.readFile('./views/index.html','utf8',(err,html)=>{
    //     if(err){
    //         res.status(500).send('error');
    //     }
    //     res.send(html);
    // });
});
const port=5100;
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
});