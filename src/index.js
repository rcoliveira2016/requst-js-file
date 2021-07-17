const path = require('path')
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000
const router = require('./routes');
app.set('view engine', 'ejs')     
app.use(expressLayouts)
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public/')));

app.use(router);

app.listen(port, () => {
   console.log(`http://localhost:${port}`)
})
