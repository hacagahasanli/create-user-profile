import { Router } from "express"
import ProfileController from "../controller/index.js"

const router = new Router()

router.post('/new-profile', ProfileController.create)

export default router

