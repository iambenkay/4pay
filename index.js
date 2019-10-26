const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT || 3000

require('./config')()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log(`Server started listening on port ${port}`)
})
