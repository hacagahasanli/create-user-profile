import { Router } from "express"
import ProfileController from "../controller/index.js"

const router = new Router()

router.post('/new-profile', ProfileController.create)
router.get('/all-profiles', ProfileController.allProfiles)
router.put('/update-profile', ProfileController.update)

export default router

