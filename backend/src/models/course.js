import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
    courseName:String,
    duration:String,
    fee:Number
})

export default mongoose.model("Course", courseSchema)