const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/cost', (req,res) =>{
    db.query('Select * from grocery_items', (err,results)=>{
        if(err){
            console.error('Error fetching the data');
            res.status(500);
            return;
        }
        res.json(results);
    })
})

app.listen(port, ()=>{
    console.log('Server is running on port ${port}');
})