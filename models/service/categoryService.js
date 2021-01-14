const categories = require('../category');
const { ObjectId } = require('mongodb');

exports.listCategories = async function(){
    const list = await categories.find();
    return list;
}

exports.addCategory = async function(id, name){
    var newId = ObjectId();
    let category = {
        _id: newId,
        name: name
    }
    const main_category = await categories.findById(id);
    main_category.childName.push(category);
    main_category.save();
}