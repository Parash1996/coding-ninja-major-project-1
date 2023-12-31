module.exports.userProfiles=function(req,res){
    // return res.send('<h1>user profile is loading for coadial</h1>');  tis is using when we are not using the views file

    return res.render('users',{
        title:"Users"
    })
}