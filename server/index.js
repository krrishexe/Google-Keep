const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./db/connectDb');

const app = express();
dotenv.config({ path: './' });
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running...');
})


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on URL http://localhost:${PORT}`);
    })
}).catch((err)=>{
    console.log("Error connecting to the database")
})