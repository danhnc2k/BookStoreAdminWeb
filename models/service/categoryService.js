const categories = require('../category');

exports.listCategories = async function(){
    const list = await categories.find(err => {
        console.log("Error loading categories!!!");
    });
    return list;
}