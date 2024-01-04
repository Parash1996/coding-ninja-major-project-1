const express =require('express');
const app=express();
const port=8000;
// use express router here
const expressLayouts=require('express-ejs-layouts')
app.use(expressLayouts);
app.use(express.static('./assets'))
app.use('/',require('./routes'));


//set up view and view engine.
app.set('view engine','ejs')
app.set('views','./views')




app.listen(port,function(err){
    if(err){
        console.log(`Error running on server :${err}`)
        return
    }
    else{
        console.log(`server is up and running on port:${port}`)
    }
})
