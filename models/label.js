const mongoose = require('mongoose');

const schema = mongoose.Schema;

const labelSchema = new schema(
    {
        name: String
    },
    {
        collection: 'Labels'
    }
);


const labelModel = mongoose.model("Label", labelSchema);

module.exports = labelModel;