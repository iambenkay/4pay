const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

require('./config')()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.use('/api', require('./routes'))

app.listen(8080, () => {
    console.log('Server started listening on port 8080')
})
