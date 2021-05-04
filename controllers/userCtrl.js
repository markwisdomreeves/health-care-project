const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { OAuth2Client } = require("google-auth-library")

const fetch = require("node-fetch")

const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const { LIVE_CLIENT_URL } = process.env


const userCtrl = {
    // @desc     Register user account
    // @route    POST /user/register
    // @access   Public
    register: async (req, res) => {
        try {
          const { name, email, password } = req.body;

          if (!name || !email || !password)
              return res.status(400).json({msg: "Please fill in all fields."})

          if (!validateEmail(email))
              return res.status(400).json({msg: "Please enter a valid email."})

          const user = await Users.findOne({email})

          if (user)
              return res.status(400).json({msg: "This email already exists"})

          if (password.length < 6)
              return res.status(400).json({msg: "Password must be at least 6 chars long."})

          const passwordHash = await bcrypt.hash(password, 12)

          const newUser = {
              name,
              email,
              password: passwordHash
          }
          const activation_token = createActivationToken(newUser)
          const url = `/user/activate/${activation_token}`

          const emailData = {
              to: email,
              from: process.env.EMAIL_FROM,
              subject: "Activate your account to login",
              html: `
              <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">

                  <h2 style="text-align: center; text-transform: uppercase;color: teal;">Congratulations! Welcome to activating your account.</h2>

                  <p>
                      You are almost close to logging into our website.
                      Please click the button below to validate your email.
                  </p>

                  <a href=${process.env.LIVE_CLIENT_URL}${url} style="background: teal; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">Activate your account</a>

                  <p>
                    If the button doesn't work for any reason, you can also click on the link below to try again:
                  </p>

                  <div>${process.env.LIVE_CLIENT_URL}</div>
              </div>
              `
          };

          sgMail
              .send(emailData)
              .then(sent => {
                  console.log("SIGNUP EMAIL HAVE BEEN SENT TO YOUR THIS EMAIL: ", sent);
                  return res.json({msg: "We have sent a link to your email. Please activate your account to login"
                  })
              })
              .catch(err => res.status(501).json({msg: "Sorry, we have just encounter a network error. Please try again later", err}))
        } catch(err) {
           console.log("REGISTRATION EMAIL SENT ERROR: ", err);
        return res.status(500).json({msg: err.message})
        }

    },

    // @desc     Activate user email
    // @route    POST /user/activation
    // @access   Public
    activateEmail: async (req, res) => {
        try {
            const {activation_token} = req.body
            const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)

            const {name, email, password} = user

            const check = await Users.findOne({email})
            if(check) return res.status(400).json({msg:"This email already exists."})

            const newUser = new Users({
                name, email, password
            })

            await newUser.save()

            res.json({msg: "Your Account has been activated! Please Login"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // @desc     Log in User
    // @route    POST /user/login
    // @access   Public
    login: async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg: "This email does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

            const refresh_token = createRefreshToken({id: user._id})
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7 days
            })

            res.json({msg: "Login success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // Refresh User access token
    // @route   POST /user/refresh_token
    // @access  Private
    getAccessToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if(!rf_token) return res.status(400).json({msg: "Please login now!"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if(err) return res.status(400).json({msg: "Please login now!"})

                const access_token = createAccessToken({id: user.id})
                res.json({access_token})
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // @desc    Forgot password
    // @route   POST /user/forgot
    // @access  Public
    forgotPassword: async (req, res) => {
        try {
          const { email } = req.body;
          const user = await Users.findOne({email})
          if (!user) return res.status(400).json({msg: "This email does not exists"})

          const access_token = createAccessToken({id: user._id})
          const url = `${LIVE_CLIENT_URL}/user/reset/${access_token}`

          // forgot password sent email link
          const emailData = {
              to: email,
              from: process.env.EMAIL_FROM,
              subject: "Reset your password",
              html: `
              <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">

                  <h3 style="text-align: center; text-transform: uppercase; color: teal;">Please click the red button to reset your password.
                  </h3>

                  <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">Reset your password to Login.</a>

                  <hr />

                  <div>
                  <p>This email may contain sensetive information</p>
                  <a href=${process.env.LIVE_CLIENT_URL} style="background: teal; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">Our Website Page</a>
                  </div>
              </div>`
          };

          sgMail
              .send(emailData)
              .then(sent => {
                  console.log("SIGNUP EMAIL HAVE BEEN SENT TO YOUR THIS EMAIL: ", sent);
                  return res.json({
                  msg: "We have sent a reset password link to your email."
                  });
              }).catch(err => res.status(501).json({msg: "Sorry, we have just encounter a network error. Please try again later", err}))

        }catch(err){
        console.log("REGISTRATION EMAIL SENT ERROR: ", err);
        return res.status(500).json({msg: err.message})
        }
    },

    // @desc    Reset user password
    // @route   POST /user/reset
    // @access  Public
    resetPassword: async (req, res) => {
        try {
            const {password} = req.body
            const passwordHash = await bcrypt.hash(password, 12)

            await Users.findOneAndUpdate({_id: req.user.id}, {
                password: passwordHash
            })

            res.json({msg: "Password successfully changed!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // @desc    Get user Infor
    // @route   GET /user/info
    // @access  Private
    getUserInfor: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password')

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // @desc    Get all user Infos
    // @route   GET /user/all_infor
    // @access  Private
    getUsersAllInfor: async (req, res) => {
        try {
            const users = await Users.find().select('-password')

            res.json(users)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // @desc    Logout user
    // @route   GET /user/logout
    // @access  Private
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // @desc    Update user infor
    // @route   PATCH /user/update
    // @access  Private
    updateUser: async (req, res) => {
        try {
            const {name, avatar} = req.body
            await Users.findOneAndUpdate({_id: req.user.id}, {
                name, avatar
            })

            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // @desc    Update each user role
    // @route   PATCH /user/update_role/:id
    // @access  Private
    updateUsersRole: async (req, res) => {
        try {
            const {role} = req.body

            await Users.findOneAndUpdate({_id: req.params.id}, {
                role
            })

            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // @desc    Delete each user
    // @route   Delete /user/delete/:id
    // @access  Private
    deleteUser: async (req, res) => {
        try {
            await Users.findByIdAndDelete(req.params.id)

            res.json({msg: "Deleted Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // Google Login Auth
    googleLogin: async (req, res) => {
        try {
            const {tokenId} = req.body

            const verify = await client.verifyIdToken({idToken: tokenId, audience: process.env.GOOGLE_CLIENT_ID})

            const {email_verified, email, name, picture} = verify.payload

            const password = email + process.env.GOOGLE_CLIENT_ID

            const passwordHash = await bcrypt.hash(password, 12)

            if(!email_verified) return res.status(400).json({msg: "Email verification failed."})

            const user = await Users.findOne({email})

            if(user){
                const isMatch = await bcrypt.compare(password, user.password)
                if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

                const refresh_token = createRefreshToken({id: user._id})
                res.cookie('refreshtoken', refresh_token, {
                    httpOnly: true,
                    path: '/user/refresh_token',
                    maxAge: 7*24*60*60*1000 // 7 days
                })

                res.json({msg: "Login success!"})
            }else{
                const newUser = new Users({
                    name, email, password: passwordHash, avatar: picture
                })

                await newUser.save()

                const refresh_token = createRefreshToken({id: newUser._id})
                res.cookie('refreshtoken', refresh_token, {
                    httpOnly: true,
                    path: '/user/refresh_token',
                    maxAge: 7*24*60*60*1000 // 7 days
                })

                res.json({msg: "Login success!"})
            }

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // Facebook Login Auth
    facebookLogin: async (req, res) => {
        try {
            const {accessToken, userID} = req.body

            const URL = `https://graph.facebook.com/v2.9/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`

            const data = await fetch(URL).then(res => res.json()).then(res => {return res})

            const {email, name, picture} = data

            const password = email + process.env.FACEBOOK_SECRET

            const passwordHash = await bcrypt.hash(password, 12)

            const user = await Users.findOne({email})

            if(user){
                const isMatch = await bcrypt.compare(password, user.password)
                if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

                const refresh_token = createRefreshToken({id: user._id})
                res.cookie('refreshtoken', refresh_token, {
                    httpOnly: true,
                    path: '/user/refresh_token',
                    maxAge: 7*24*60*60*1000 // 7 days
                })

                res.json({msg: "Login success!"})
            }else{
                const newUser = new Users({
                    name, email, password: passwordHash, avatar: picture.data.url
                })

                await newUser.save()

                const refresh_token = createRefreshToken({id: newUser._id})
                res.cookie('refreshtoken', refresh_token, {
                    httpOnly: true,
                    path: '/user/refresh_token',
                    maxAge: 7*24*60*60*1000 // 7 days
                })

                res.json({msg: "Login success!"})
            }


        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}



function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl
