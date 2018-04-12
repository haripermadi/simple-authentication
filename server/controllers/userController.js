const User = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  signUp: function (req, res) {
    let input = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    User.findOne({
      email: req.body.email
    })
    .exec()
    .then(dataUser =>{
      if(dataUser){
        res.status(400).json({
          message: 'email already registered, use other email!'
        })
      }else{
        User.create(input, (error, newUser) =>{
          if(error){
            res.status(400).json({
              message: 'error',
              error
            })
          }else{
            res.status(201).json({
              message: 'success add new user',
              newUser
            })
          }
        })
      }
    }).catch(err =>{
      res.status(400).json({
        message: 'error',
        error
      })
    })
  },
  signIn: function(req, res){
    User.findOne({
      email:req.body.email
    })
    .exec()
    .then(dataUser =>{
      console.log(dataUser)
      if(dataUser){
        
        let checkPass = bcrypt.compareSync(req.body.password, dataUser.password); // true
        if(checkPass){
          console.log('masuk check')
          let token = jwt.sign({id:dataUser._id, email: dataUser.email }, 'kitten');
          res.status(200).json({
            message: 'login success',
            user:{
              token,
              name: dataUser.name
            }
          })
        }else{
          res,status(400).json({
            message: 'email/password is wrong!'
          })
        }
      }else{
        res,status(400).json({
          message: 'user not found!'
        })
      }
    }).catch(error =>{
      res.status(400).json({
        message: 'error when login',
        error
      })
    })
  }
}