import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(cors())

app.get('/', (req, res)=>{
    res.send('welcome to my CVCreator API')
})

app.use('/posts', postRoutes)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT} `)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)