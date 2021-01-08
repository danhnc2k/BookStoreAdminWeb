const categories = require('../category');

exports.listCategories = async function(){
    const list = await categories.find();
    return list;
}