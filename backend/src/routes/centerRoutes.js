import express from "express"
import {createCenter,getCenters} from "../controllers/centerController.js"

const router = express.Router()

router.post("/",createCenter)
router.get("/",getCenters)

export default router