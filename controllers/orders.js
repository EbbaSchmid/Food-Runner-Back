import { Order } from '../models/order.js';

function index(req, res) {
  Order.find({})
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
    res.json(order)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function create(req, res) {
  Order.create(req.body)
  .then(order => {
    res.json(order)
  })
  .catch(err => {
    console.log(err);
    res.json(err)
  })
}

export {
  create,
  show,
  index,
}