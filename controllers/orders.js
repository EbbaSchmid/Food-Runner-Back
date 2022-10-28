import { Order } from '../models/order.js';

function index(req, res) {
  Order.find({})
  .populate([
    {path: 'beverages', model: 'Inventory'},
    {path: 'pizzas.ingredients', model: 'Inventory'}
  ])
  .then(order => {
    res.json(order)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function show(req, res) {
  Order.findById(req.params.id)
  .then(order => {
    order
    .populate([
      {path: 'beverages', model: 'Inventory'},
      {path: 'pizzas.ingredients', model: 'Inventory'}
    ])
    .then(test =>{
      res.status(200).json(test)
    })
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function create(req, res) {
  //req.body.customer = req.user.profile
  //console.log(req.user)
  Order.create(req.body)
  .then(order => {
    res.json(order)
  })
  .catch(err => {
    console.log(err);
    res.json(err)
  })
}

function fulfill(req, res) {
  
  Order.findByIdAndUpdate(
    req.params.id,
    {isFulfilled: true},
    { new: true })
  .then(order => {r
    res.json(order)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  create,
  show,
  index,
  fulfill
}