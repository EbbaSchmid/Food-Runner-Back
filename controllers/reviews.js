import { Review } from "../models/review";

function create (req, res) {
  for (let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
  }
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
  for (let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
  }
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