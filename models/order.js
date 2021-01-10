const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema;

const orderSchema = new schema(
  {
    userId: {
        type: String,
        required: true
    },
    firstName: {
      type: String,
      required: true
    }, 
    lastName: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    items: [
        {
          productId: {
            type: String
          },
          name: {
            type: String
          },
          price: {
            type: Number
          },
          amount: {
            type: Number
          }
        }
    ],
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    status: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  {
    collection: 'Orders'
  }
);

orderSchema.plugin(paginate);

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = OrderModel;