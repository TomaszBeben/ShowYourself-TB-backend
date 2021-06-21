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

app.use('/posts', postRoutes)

app.get('/', (req, res)=>{
    res.send('welcome to my API')
})

const PORT = 5000

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(process.env.PORT || PORT, () => console.log(`Server is running`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)