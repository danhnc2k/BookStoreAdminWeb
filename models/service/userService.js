const users = require('../user');
const { ObjectId } = require('mongodb');

exports.listUsers = async function(filter, pageNumber, itemPerPage){
    const list = await users.paginate(filter, 
        {
            page: pageNumber,
            limit: itemPerPage
        }
    );
    return list;
}

exports.getUser = async function(id){
    const user = await users.findById(id);
    return user;
}

exports.lockUser = async function(id){
    const user = await users.findById(id);
    const lock = !user.isLocked;
    await users.updateOne({_id: ObjectId(id)},{ $set:{ isLocked: lock }});
}