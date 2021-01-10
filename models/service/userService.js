const users = require('../user')

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