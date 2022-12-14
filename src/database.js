import mongoose from "mongoose";

const connectionString = 'mongodb://127.0.0.1:27018'

// Conexion a la base de datos
await mongoose.connect(connectionString)
    .catch(error => console.log(error))

mongoose.connection.on('connection', () => {
    console.log("MongoDB connected")
})

mongoose.connection.on('disconnected', () => {
    console.log("MongoDB disconnected")
})