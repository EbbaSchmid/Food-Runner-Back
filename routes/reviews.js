import { Router } from "express";
import * as reviewsCtrl from '../controllers/reviews.js'

const router = Router()

router.get('/', reviewsCtrl.index)
router.post('/', reviewsCtrl.create)
router.put('/:id', reviewsCtrl.update)
router.delete('/:id', reviewsCtrl.delete)

export {
  router
}