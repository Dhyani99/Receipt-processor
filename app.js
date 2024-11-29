const express = require('express');
const connectToDatabase = require('./db');
// Creating express object
const app = express();
const receiptRouter = require('./routes/receiptRouter');
app.use(express.json());


connectToDatabase().then(() => {
    app.use('/receipts', receiptRouter);
    
    const PORT = 4000;
    try{
        app.listen(PORT,console.log(`Server started on port ${PORT}`));
    }catch(error){
        console.log("Can't connect to server");
    }
}).catch((error) => {
    console.log("Invalid database connection");
})
