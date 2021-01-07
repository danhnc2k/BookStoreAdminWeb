const mongoose = require('mongoose');

const schema = mongoose.Schema;

const categorySchema = new schema(
    {
        name: String,
        childName: [
            {
                name: String
            }
        ]
    },
    {
        collection: 'Categories'
    }
);


const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;