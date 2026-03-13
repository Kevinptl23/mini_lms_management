import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
)
app.use(express.json())


import authRoutes from "./routes/authRoutes.js"
import courseRoutes from "./routes/courseRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"
import centerRoutes from "./routes/centerRoutes.js"

app.use("/api/auth",authRoutes)
app.use("/api/courses",courseRoutes)
app.use("/api/students",studentRoutes)
app.use("/api/centers",centerRoutes)

app.get("/", (req,res)=>{
    res.send("Mini LMS API Running")
})

export default app;