const express = require('express')
require("dotenv").config()
const port = process.env.PORT
const workoutRoutes = require("./routes/workout")
const userRoutes = require("./routes/userroute")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors(
    {
        origin:["https://mern-workouts-frontend.vercel.app"],
        methods:['POST','DELETE','GET'],
        credentials: true
    }
))
app.use(express.json())
app.use('/api/workouts', workoutRoutes)
app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    
    console.log("connection successful")

    app.listen(port , () => {
        console.log(`am listening on port ${port}`)
    })
})
.catch((error) => {
    console.log('an error occured')
})

