const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, 'email is required!'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'please enter your password!'],
    validate: {
      validator: function (v) {
        return /^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(v)
      },
      message: 'password lenght minimum 6 character and has minimum 1 number'
    }
  },
},{
  timestamps: true
});

userSchema.pre('save',function(next) {
  let hash = bcrypt.hashSync(this.password, salt)
  
  this.password = hash
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User
 