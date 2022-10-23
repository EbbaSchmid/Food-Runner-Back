import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ingredientSchema = new Schema({
  name: String,
  isAvailable: {type: Boolean, default: true},
  price: Number,
  type: {type: String, enum: ['crust', 'ingredient', 'beverages']}
},{
  timestamps: true,
})



const Ingredient = mongoose.model('Ingredient', ingredientSchema)

export { Ingredient }