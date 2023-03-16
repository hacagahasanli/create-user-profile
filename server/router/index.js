import { Router } from "express"
import ProfileController from "../controller/index.js"
import multer from "multer"

const upload = multer()

const router = new Router()

router.post('/new-profile', ProfileController.create)
router.get('/all-profiles', ProfileController.allProfiles)
router.put('/update-profile', upload.single('image'), ProfileController.update)

export default router

