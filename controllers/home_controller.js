// module.exports.actionName=function(req,res){};

module.exports.home=function(req,res){
   // console.log(req.cookies);
   // res.cookie('user_id',25);
    // return res.send('<h1>home page is loading for coadial</h1>'); this is using when we are sending data to the brouser i mean when we are not using views.
 return res.render('home',{
    title:"Home"
 })

     
}