const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema;

const userSchema = new schema(
{
    username: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      firstName: {
        type: String,
        required: false
      },
      lastName: {
        type: String,
        required: false
      },
      email: {
        type: String,
        required: false
      },
      address: {
        type: String,
        required: false
      },
      phoneNumber: {
        type: String,
        required: false
      },
      Avatar: {
        type: String,
        required: false
      },
      role: {
        type: Number,
        required: false,
        default: 0
      },
      isAuthenticated: {
        type: Boolean,
        required: false,
        default: false
      },
      isLock: {
        type: Boolean,
        required: false,
        default: false
      },
      verify_token: {
        type: String,
        required: false
      },
      cart: {
        type: Object,
        required: false
      }
    },{ collection : 'Users' }
);

userSchema.plugin(paginate);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;