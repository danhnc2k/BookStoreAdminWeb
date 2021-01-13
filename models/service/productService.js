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
exports.allProducts = async function(){
    const list = await products.findById();
    return list;
}
exports.getProduct = async function(id){
    const product = await products.findById(id);
    return product;
}

exports.add = async function(name, description, size, subCategory, stock, price, color, image, material, label, sale, cost){
    const categoriesList = await categoryServices.listCategories();
    let mainCategory;
    let sizes = size.substring(0, size.length-1).split(';');
    let colors = color.substring(0, color.length-1).split(';');
    let images = image.substring(0, image.length-1).split(';');
    let materials = material.substring(0, material.length-1).split(';');
    categoriesList.forEach(function(main){
        main.childName.forEach(function(sub){
            if (sub._id.toString() == subCategory)
            {
                mainCategory = main._id.toString();
            }
        })
    });
    
    let today = new Date();
    let product = {
        name: name,
        description: description,
        stock: parseInt(stock),
        price: parseInt(price),
        size: sizes,
        category: {
            main:mainCategory,
            sub: subCategory
        },
        dateAdded: today,
        color: colors, 
        images: images, 
        labels: label,
        materials: materials,
        buyCounts: 0,
        viewCounts: 0,
        isDeleted: false,
        sale: parseInt(sale),
        cost: parseInt(cost),
        comment: {}
    }
    const productCollection = products.db.collection('Products');
    await productCollection.insertOne(product);
}

exports.update = async function(id, name, description, size, subCategory, stock, price, color, image, material, buyCount, label, sale, cost){
    const categoriesList = await categoryServices.listCategories();
    let mainCategory;
    let sizes = size.substring(0, size.length-1).split(';');
    let colors = color.substring(0, color.length-1).split(';');
    let images = image.substring(0, image.length-1).split(';');
    let materials = material.substring(0, material.length-1).split(';');
    categoriesList.forEach(function(main){
        main.childName.forEach(function(sub){
            if (sub._id.toString() == subCategory)
            {
                mainCategory = main._id;
            }
        })
    });
    await products.updateOne({_id: ObjectId(id)},{ $set:{
        name: name,
        description: description,
        size: sizes,
        "category.main": mainCategory,
        "category.sub": subCategory,
        stock: stock,
        price: price,
        color: colors,
        images: images,
        materials: materials,
        buyCounts: buyCount,
        labels: label,
        sale: sale,
        cost: cost
    }});
}

exports.delete = async function(idList){
    let id_list = idList.substring(0, idList.length-1).split(';');
    await id_list.forEach(async function(id){
        await products.updateOne({_id: ObjectId(id)},{ $set:{
            isDeleted: true
        }});
    });
}

