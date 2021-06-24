import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import postRoutes from './routes/posts.js'
// import { DB_CONNECTION } from './ignore/dbconnection.js'

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.get('/', (req, res)=>{
    res.send('welcome to my API')
})

app.use('/posts', postRoutes)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT,'0.0.0.0'))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)