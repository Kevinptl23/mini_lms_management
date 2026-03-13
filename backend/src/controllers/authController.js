// export const login = (req,res)=>{

//     const {email,password} = req.body

//     if(email==="admin@lms.com" && password==="123456"){
//         return res.json({role:"admin"})
//     }

//     if(email==="center@lms.com" && password==="123456"){
//         return res.json({role:"center",centerName:"Ahmedabad"})
//     }

//     res.status(401).json({message:"Invalid credentials"})
// }
import Center from "../models/Center.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@lms.com" && password === "123456") {
    return res.json({ role: "admin" });
  }

  const center = await Center.findOne({ email, password });

  if (center) {
    return res.json({
      role: "center",
      centerName: center.centerName,
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
};
