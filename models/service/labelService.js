const labels = require('../label');

exports.listLabels = async function(){
    const list = await labels.find();
    return list;
}