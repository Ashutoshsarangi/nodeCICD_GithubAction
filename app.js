const express  =  require('express');
const app  = express();

app.get('/', (req, res)=>{
    res.send('Hello World');
});
var port_number = (process.env.PORT || 3000);

app.listen(port_number, ()=> console.log('Port os Running on ' + port_number));

module.exports = app;