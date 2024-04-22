import {config} from "dotenv"
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

config()
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error', (error)=>{
    console.error
})

db.once('open', ()=>{
    console.log("connected to database")
})


app.listen(9000, ()=>{
    console.log("server has started")
})
