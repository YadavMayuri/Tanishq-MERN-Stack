import Users from "../modals/userModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()


export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await Users.findOne({ email }).exec();
        if (existingUser) return res.status(400).json({ message: "Email already exist. Login insted." })

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new Users({
            name, email, password: hashedPassword
        })
        console.log("user", user);
        await user.save();
        return res.status(201).json({ success: "Registration successful." })

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error. - controller" })
    }
}


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "Please fill all the fields." })
        const response = await Users.findOne({ email }).exec();
        if (!response) return res.status(400).json({ message: "User not found" })
        const comparePassword = await bcrypt.compare(password, response.password);
        if (!comparePassword) return res.status(400).json({ message: "Credientials not matched." })

        const userObj = { userId: response._id, name: response.name, email: response.email }
        const token = jwt.sign({ userId: response._id }, process.env.JwtToken)

        console.log("jwt token",process.env.JwtToken);

        return res.status(200).json({ success: "Login successful.", user: userObj, token: token })

    } catch (err) {
        return res.status(500).json({ message: "Internal server error." })
    }
}



export const getCurrentUser = async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) return res.status(400).json({ success: false, message: "Token is required." })

        const decodedtoken = jwt.verify(token,process.env.JwtToken)
        if (!decodedtoken) return res.status(404).json({ success: false, message: "Invalid token." })

        const userId = decodedtoken.userId;

        const user = await Users.findById(userId);
        console.log(user,"user here");
        if (user) {
            const userobj = { userId: user.userId, name: user.name, email: user.email }
            return res.status(200).json({ success: true, user: userobj })
        } else {
            return res.status(404).json({ success: false, message: "User not found." })
        }

    } catch (err) {
        return res.status(500).json({ success: false, message: "Internal server error."})
    }
}
