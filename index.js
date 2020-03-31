// // run nodemon: npm run start


const express = require('express')
const app = express()
const port = 3000
const apiV1Messagesrouter = require('./routers/api/v1/messages.js')


// show homepage
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/v1/messages', apiV1Messagesrouter)

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
