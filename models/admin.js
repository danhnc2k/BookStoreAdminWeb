const mongoose = require('mongoose');

const schema = mongoose.Schema;

const adminSchema = new schema(
{
    avatar: {
        type: String,
        required: true
    },
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
    }
},
    {
        collection: 'Admins'
    }
);

const AdminModel = mongoose.model("Admin", adminSchema);

module.exports = AdminModel;