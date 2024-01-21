const User = require('../models/user.js')
module.exports.userProfiles = function (req, res) {
    // return res.send('<h1>user profile is loading for coadial</h1>');  tis is using when we are not using the views file

    return res.render('users', {
        title: "Users"
    })
},
    // to rendering sign in page
    module.exports.userSignIn = function (req, res) {
        return res.render('user_sign_in', {
            title: 'Sign In Page'
        })
    },
    //to rendering sign up page  
    module.exports.userSignUp = function (req, res) {
        return res.render('user_sign_up', {
            title: 'Sign Up Page'
        })
    },
    // get the sign up data 
    module.exports.create = async function (req, res) {
        // to do later.
        console.log("is data is comming ?")
        console.log(req.body)
        console.log("yes data is comming")
        if (req.body.password != req.body.confirm_pasword) {
            return res.redirect('back');
        }
        try {
            const user = await User.findOne({ email: req.body.email })
            if (!user) {
                try {

                    const newUser= await User.create(req.body)
                    console.log(newUser);
                    res.redirect('/users/signin')
                } catch (error) {
                    console.log('error in creating user while signup', error)
                }

            }
            else res.redirect('/users/signup')
        } catch (error) {
            console.log('error finding uer while in sign up', error)
        }

    },
    //sign in and create a session for user
    module.exports.createSesssion = function (req, res) {
        // to do later
    }
