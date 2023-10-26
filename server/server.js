const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const pool = require('./db')

const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 8010

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);

app.listen(PORT, ()=> console.log(`SERVER RUNNING ON PORT ${PORT}!`))

// npm run dev
