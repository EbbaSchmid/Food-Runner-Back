import { Review } from "../models/review.js";

function create (req, res) {
  req.body.customer  = req.user.profile
  Review.create(req.body)
  .then(review => {
    console.log('review', review)
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

const show = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate('customer')
    res.status(200).json(review)
  } catch (err) {
    res.status(500).json(err)
  }
}

function deleteReview (req, res) {
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
  deleteReview as delete,
  updateReview as update,
  show,
}