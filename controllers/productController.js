const productServices = require('../models/service/productService');
const categoryServices = require('../models/service/categoryService');
const labelServices = require('../models/service/labelService');
const ProductModel = require('../models/product');


exports.getProducts = async function(req, res, next){
    //Categories list
    const categoriesList = await categoryServices.listCategories();
    //Price list\
    let priceList = [
        [0, 50],
        [51, 100],
        [101, 150],
        [151, 200]
    ];
    //Size list
    let sizeList = ["S", "M", "L", "XL"];
    //Label list
    const labelList = await labelServices.listLabels();
    //Item per page list
    let itemPerPageList = [5, 10, 15, 20];
    
    const price_value = req.query.price;
    const size_value = req.query.size;
    const label_value = req.query.label;
    const page = +req.query.page || 1;
    const search_value = req.query.search;
    const filter = {};
    let length_value;
    if (req.query.length){
        length_value = req.query.length;
    }else{
        length_value = 1;
    }
    if (req.params.mainCategory)
    {
        filter['category.main']= new RegExp(req.params.mainCategory, "i");
    }
    if (req.params.subCategory)
    {
        filter['category.sub']= new RegExp(req.params.subCategory, "i");
    }
    if (price_value && price_value != -1)
    {
        filter['price'] = {$gt: priceList[price_value][0], $lt: priceList[price_value][1]};
    }
    if (size_value && size_value != -1)
    {
        filter['size'] = new RegExp(sizeList[size_value], "i");
    }
    if (label_value && label_value != -1)
    {
        filter['labels'] = new RegExp(labelList[label_value]._id, "i");
    }
    if (search_value && search_value != "")
    {
        filter['name'] = new RegExp(`${search_value}`, "i");
    }
    const paginate = await productServices.listProducts(filter, page, itemPerPageList[length_value]);
    res.render("products", {
        categories: categoriesList,
        prices: priceList,
        sizes: sizeList,
        labels: labelList,
        lengths: itemPerPageList,
        lengthValue: length_value,
        searchValue: search_value,
        priceValue: price_value,
        sizeValue: size_value,
        labelValue: label_value,
        allProducts: paginate.docs,
        totalProducts: paginate.totalDocs,
        hasNextPage: paginate.hasNextPage,
        hasPrevPage: paginate.hasPrevPage,
        nextPage: paginate.nextPage,
        prevPage: paginate.prevPage,
        currentPage: paginate.page,
        totalPages: paginate.totalPages
    });
}

exports.getIndex = async function(req, res, next){
    res.render('index',{

    });
}
exports.getAddProductForm = async function (req, res, next) {
    const categoriesList = await categoryServices.listCategories();
    const labelsList = await labelServices.listLabels();

    res.render('addProduct',{
        categories: categoriesList,
        labels: labelsList
    });
}
exports.getProductDetail = async function(req, res, next){
    const categoriesList = await categoryServices.listCategories();
    const labelsList = await labelServices.listLabels();
    const product = await productServices.getProduct(req.params.id);
    let sizeStr="";
    product.size.forEach(element => {
        sizeStr += element+';';
    });
    let colorStr="";
    product.color.forEach(element => {
        colorStr += element+';';
    });
    let imageStr="";
    product.images.forEach(element => {
        imageStr += element+';';
    });
    let materialStr="";
    product.materials.forEach(element => {
        materialStr += element+';';
    });

    res.render('productDetail',{
        categories: categoriesList,
        labels: labelsList,
        id: product._id,
        name: product.name,
        description: product.description,
        sizes: sizeStr,
        subCategory: product.category.sub,
        stock: product.stock,
        price: product.price,
        sale: product.sale,
        colors: colorStr,
        images: imageStr,
        imagesURL: product.images,
        materials: materialStr,
        buyCount: product.buyCounts,
        label: product.labels,
        viewCount: product.viewCounts,
        sale: product.sale,
        cost: product.cost
    });
}

exports.addProduct = async function(req, res, next){
    await productServices.add(req.body.name,req.body.description,req.body.size,
        req.body.subCategory,req.body.stock,req.body.price,req.body.color,req.body.image,
        req.body.material,req.body.label,req.body.sale,req.body.cost);
    res.redirect('/products/list');
}

exports.updateProduct = async function(req, res, next){
    await productServices.update(req.body.id,req.body.name,req.body.description,req.body.size,
        req.body.subCategory,req.body.stock,req.body.price,req.body.color,req.body.image,
        req.body.material,req.body.buyCount,req.body.label,req.body.sale,req.body.cost);
    res.redirect('/products/detail/'+req.body.id);
}

exports.deleteProduct = async function(req, res, next){
    await productServices.delete(req.body.deleteIdList);
    res.redirect('/products/list');
}

exports.getDelivered = async function(req, res, next){
    const page = +req.query.page || 1;
    
    res.render("delivered", {
        
    });
}

exports.getDelivering = async function(req, res, next){
    const page = +req.query.page || 1;
    
    res.render("delivering", {
        
    });
}

exports.getDeliversoon = async function(req, res, next){
    const page = +req.query.page || 1;
    
    res.render("deliversoon", {
        
    });
}

exports.postABC = async function(req, res, next){
    const abc = 'abc';
    redirect('/');
}
