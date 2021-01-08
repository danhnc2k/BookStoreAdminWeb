const products = require('../product')

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
