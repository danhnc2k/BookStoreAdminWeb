const orders = require('../order')

exports.listOrders = async function(filter, pageNumber, itemPerPage){
    const list = await orders.paginate(filter, 
        {
            page: pageNumber,
            limit: itemPerPage
        }
    );
    return list;
}