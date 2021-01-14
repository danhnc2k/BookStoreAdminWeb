const labels = require('../label');
const { ObjectId } = require('mongodb');

exports.listLabels = async function(){
    const list = await labels.find();
    return list;
}

exports.addLabel = async function(name){
    var newId = ObjectId();
    let label = {
        _id: newId,
        name: name
    }
    const labelCollection = labels.db.collection('Labels');
    await labelCollection.insertOne(label);
}