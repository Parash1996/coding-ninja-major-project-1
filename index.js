const express =require('express');
const app=express();
const port=8000;


app.listen(port,function(err){
    if(err){
        console.log(`Error running on server :${err}`)
        return
    }
    else{
        console.log(`server is up and running on port:${port}`)
    }
})
