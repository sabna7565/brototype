const express = require('express')
const colors = require('colors')
const cors = require('cors')
const dotenv = require('dotenv').config()
const {errorHandler, notFound} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({ origin: true, credentials: true }));
//Routes
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))
app.use('/api/staff', require('./routes/staffRoutes'))
app.use('/api/home', require('./routes/homeRoutes'))


// Error Middleware
app.use(notFound)
app.use(errorHandler)


// Port Settings
app.listen(port, () => console.log(`Server started on port ${port}`))