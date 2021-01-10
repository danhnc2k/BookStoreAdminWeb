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
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    isLock: {
        type: Boolean,
        required: true,
        default: false
    },
    isAuthenticated: {
        type: Boolean,
        required: true,
        default: false
    },
    cart: {
        type: [String],
        required: true
    }
    },
    {
        collection: 'Users'
    }
);

userSchema.plugin(paginate);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;