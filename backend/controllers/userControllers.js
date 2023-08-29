import Users from "../modals/userModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

export const Register = async(req,res)=>{
    try{
        console.log("insid try constroller");
        const {name , email, password}= req.body;
        const existingUser = await Users.findOne({email}).exec();
        if(existingUser)return res.status(400).json({message:"Email already exist. Login insted."})
        console.log("existingUser",existingUser);

        const hashedPassword= await bcrypt.hash(password,10)

        const user = new Users({
            name, email, password:hashedPassword
        })
        console.log("user",user);
        await user.save();
        return res.status(201).json({success:"Registration successful."})

    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error."})
    }
}
