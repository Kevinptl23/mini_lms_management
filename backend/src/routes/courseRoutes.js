import express from "express"
import { addCourse,getCourses,deleteCourse } from "../controllers/courseController.js"

const router = express.Router()

router.post("/",addCourse)
router.get("/",getCourses)
router.delete("/:id",deleteCourse)

export default router