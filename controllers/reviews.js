import { Review } from "../models/review.js";

function create (req, res) {
  Review.create(req.body)
  .then(review => {
    res.json(review)
  })
  .catch(err => {
    console.log(err);
    res.json(err)
  })
}
function index (req, res) {
  Review.find({})
  .then(reviews => {
    res.json(reviews)
  })
  .catch(err => {
    console.log(err);
    res.json(err)
  })
}
function deleteReveiw (req, res) {
  Review.findByIdAndDelete(req.params.id)
  .then(deletedReview => {
    res.json(deletedReview)
  })
  .catch(err => {
    console.log(err);
    res.json(err)
  })
}
function updateReview (req, res) {
  Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedReview => {
    res.json(updatedReview)
  })
  .catch(err => {
    console.log(err);
    res.json(err)
  })
}

export {
  create,
  index,
  deleteReveiw as delete,
  updateReview as update,
}