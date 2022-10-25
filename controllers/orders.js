import { Profile } from "../models/profile"
import { Order } from "../models/order";

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

//req.body.pizzas = [[{ObjectId}]]
//req.body.beverages = [{ObjectId}]
function create(req, res) {
  req.body.customer = req.user.profile
  Order.create(req.body)
  .then(order => {
    res.json(order)
  })
  .catch(err => {
    console.log(err);
    res.json(err)
  })
}

function show(req, res) {}
function index(req, res) {}
function addOrder(req, res) {}

export {
  create,
  show,
  index,
  addOrder
}