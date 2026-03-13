import Course from "../models/course.js"

export const addCourse = async(req,res)=>{
    const course = new Course(req.body)
    await course.save()
    res.json(course)
}

export const getCourses = async(req,res)=>{
    const courses = await Course.find()
    res.json(courses)
}

export const deleteCourse = async(req,res)=>{
    await Course.findByIdAndDelete(req.params.id)
    res.json({message:"Deleted"})
}