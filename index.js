const exress = require('express')
const app = exress()
const http = require('http')
const cors = require('cors')
const ejs=require('ejs')
const fileUpload = require('express-fileupload')
const router = require('./router')
const path = require('path')
const not = require('dotenv').config()
const port = process.env.port || 2917
app.use(exress.urlencoded({ extended: true }))
app.use(exress.json())
app.use(cors(
    {
        origin:'*'
    }
))
app.set('views','views')
app.set('view engine', 'ejs')
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001/');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.use(fileUpload())
// app.get('/', (req, res) => {
//     res.send("hello word")
// })

app.use('/', exress.static(path.join(__dirname, 'public/')))
app.use(router)

app.get('/', (req, res) => {
    res.render('index.ejs')
})
const server = http.createServer(app)
server.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
