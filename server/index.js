const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./db/connectDb');
const router = require('./routes/Todo.route')

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

app.use('/api/todo',router)

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