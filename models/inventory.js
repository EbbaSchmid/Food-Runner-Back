import mongoose from 'mongoose'

const Schema = mongoose.Schema

const inventorySchema = new Schema({
  name: String,
  isAvailable: {type: Boolean, default: true},
  price: Number,
  type: {type: String, enum: ['crust', 'ingredient', 'beverages']}
},{
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  }

})

const Inventory = mongoose.model('Inventory', inventorySchema)

export { Inventory }