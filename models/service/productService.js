const { ObjectId } = require('mongodb');
const products = require('../product')
const categoryServices = require('../service/categoryService')

exports.listProducts = async function(filter, pageNumber, itemPerPage){
    const list = await products.paginate(filter, 
        {
            page: pageNumber,
            limit: itemPerPage
        }
    );
    return list;
}

exports.getProduct = async function(id){
    const product = await products.findById(id);
    return product;
}

exports.update = async function(id, name, description, size, subCategory, stock, price, sale, color, image, material, buyCount, label){
    const categoriesList = await categoryServices.listCategories();
    let mainCategory;
    categoriesList.forEach(function(main){
        main.childName.forEach(function(sub){
            if (sub._id.toString() == subCategory)
            {
                mainCategory = main._id;
            }
        })
    });
    await products.updateOne({_id: ObjectId(id)},{ $set:{
        "category.main": mainCategory,
        "category.sub": subCategory

    }});
}
