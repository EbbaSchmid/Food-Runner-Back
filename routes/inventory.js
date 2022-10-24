import { Router } from "express";
import * as inventoryCtrl from '../controllers/inventory.js'

const router = Router()

router.post('/', inventoryCtrl.create)
router.get('/', inventoryCtrl.index)
router.put('/:id', inventoryCtrl.update)
router.delete('/:id', inventoryCtrl.delete)

export {
  router
}