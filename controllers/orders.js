import { Profile } from "../models/profile"
import { Order } from "../models/order";

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