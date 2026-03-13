import Student from "../models/student.js"

export const addStudent = async(req,res)=>{
    const student = new Student(req.body)
    await student.save()
    res.json(student)
}

export const getStudents = async(req,res)=>{
    const students = await Student.find()
    res.json(students)
}