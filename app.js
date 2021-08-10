const express  =  require('express');
const app  = express();

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.listen(3000, ()=> console.log('Port os Running on 3000'));

module.exports = app;