import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pizzaSchema = new Schema({
  ingredients: [{type: Schema.Types.ObjectId, Ref: "Inventory"}]
},{
  timestamps: true,
})

const orderSchema = new Schema({
  pizzas: [pizzaSchema],
  beverages: [{type: Schema.Types.ObjectId, Ref: "Inventory"}],
  customer: {type: Schema.Types.ObjectId, Ref: "Profile"},
  isFulfilled: {type: Boolean, default: false}

},{
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  }
})

const Order = mongoose.model('Order', orderSchema)

export { Order }