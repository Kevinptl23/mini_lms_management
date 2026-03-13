import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    course:String,
    centerName:String,
    admissionDate:Date
})

export default mongoose.model("Student", studentSchema)