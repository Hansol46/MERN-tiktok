import express from 'express'
import mongoose from 'mongoose'
import Data from './data.js'
import Videos from './schema.js'

// App config
const app = express()
const port = process.env.PORT || 9000

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})

// DB config
const mongoUrl = 'mongodb+srv://admin:WdyDGoQTivLXnw8b@cluster0.wimsj.mongodb.net/tiktok?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// Api endpoints
app.get('/', (req, res) => res.status(200).send('HELLO PROGGERS@@@!!!'))

app.get('/v1/posts', (req, res) => res.status(200).send(Data))

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})
// Listening
app.listen(port, () => console.log(`listening on localhost on port: ${port}`))