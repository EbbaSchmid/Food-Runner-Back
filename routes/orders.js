import { Router } from "express";
import * as orderCtrl from '../controllers/orders.js'

const router = Router()

router.post('/', orderCtrl.create)
router.get('/', orderCtrl.index)
router.get('/:id', orderCtrl.show)

export {
  router
}