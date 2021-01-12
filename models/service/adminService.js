const admins = require('../admin');
const { ObjectId } = require('mongodb');

exports.getAdmin = async function(id){
    const admin = await admins.findById(id);
    return admin;
}

exports.update = async function(id, firstname, lastname, email, phonenumber, avatar){
    await admins.updateOne({_id: ObjectId(id)},{ $set:{
        firstName: firstname,
        lastName: lastname,
        email: email,
        phoneNumber: phonenumber,
        avatar: avatar
    }});
}
