import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import { DB_CONNECTION } from './ignore/dbconnection.js'

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.use('/posts', postRoutes)

app.get('/', (req, res)=>{
    res.send('elo morda!!!!')
})

const PORT = process.env.PORT || 5000

mongoose.connect(DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)