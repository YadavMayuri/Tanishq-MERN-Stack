import { json } from "express";
import Users from "../modals/userModal.js";

export const RegisterChecks = async(req,res,next)=>{
    try{
        const {name, email, password,confirmPassword}= req.body;
        if(name && email && password && confirmPassword){
            if(password.length <5 || confirmPassword.length <5)return res.status(400).json({message:"password length should be greater than 5."})
            if(password !==confirmPassword)return res.status(400).json({message:"Password and confirm password not matched."})
            next()
        }else{
            return res.status(400).json({message:"Please fill all thee fields."})
        }
    }catch(err){
        return res.status(500).json({message:"Internal server error."})
    }
}