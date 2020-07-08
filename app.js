const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const productRoutes = require('./routes/productRoutes');
const mongoose = require('mongoose');
app.use(cors());

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://test:test@cluster0.rr3ag.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
}, (err) =>{ 
    console.log('mongoose error ', err);
});



app.use('/products' , productRoutes);


app.use('/', (req, res) => {
    console.log('here');
    return res.status(200).json({'message' : 'hello world'});
})


app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});


module.exports = app; 