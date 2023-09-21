const express = require('express')
const dotenv = require('dotenv')
const connectDB  = require('./config/db')
const bookRoutes=require('./routes/bookRoutes')
const cors=require('cors')
dotenv.config()
const app = express()
connectDB()
app.use(express.json())
app.use(cors())
app.use('/api/v1',bookRoutes)



const PORT = process.env.PORT||5000
app.listen(PORT, () => {
    console.log(`it's running on${process.env.DEV_MODE} and port ${PORT} `)
})