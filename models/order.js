const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema;

const orderSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    ref: "User"
  },
  cart: { type: Object, required: true },
  address: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false,
    default: Date.now
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  deliverStatus: {
    type: Number,
    required: false,
    default: 0
  }
},
{ 
  collection : 'Orders' 
});

orderSchema.plugin(paginate);

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = OrderModel;