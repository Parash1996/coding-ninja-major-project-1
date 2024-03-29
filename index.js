const express = require('express');
const cookieParser= require('cookie-parser')
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
// use express router here
const db= require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts')

app.use(expressLayouts);
app.use(express.static('./assets'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// extract style and script from sub pageg in to layout.
app.set('layout extractStyles',true);
app.set('layout extactScripts', true);
app.use('/', require('./routes'));


//set up view and view engine
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(cookieParser());




app.listen(port, function (err) {
    if (err) {
        console.log(`Error running on server :${err}`)
        return
    }
    else {
        console.log(`server is up and running on port:${port}`)
    }
})
