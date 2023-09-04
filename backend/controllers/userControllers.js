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
        // console.log(userObj,"userobj from login controller");

        // console.log("jwt token", process.env.JwtToken);

        return res.status(200).json({ success: "Login successful.", user: userObj, token: token })

    } catch (err) {
        return res.status(500).json({ message: "Internal server error." })
    }
}



export const getCurrentUser = async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) return res.status(400).json({ success: false, message: "Token is required." })

        const decodedtoken = jwt.verify(token, process.env.JwtToken)
        if (!decodedtoken) return res.status(404).json({ success: false, message: "Invalid token." })

        const userId = decodedtoken.userId;

        const user = await Users.findById(userId);
        // console.log(user, "user here");
        if (user) {
            const userobj = { userId: user._id, name: user.name, email: user.email }
            // console.log(userobj,"user obj from current user controller");
            return res.status(200).json({ success: true, user: userobj })

        } else {
            return res.status(404).json({ success: false, message: "User not found." })
        }

    } catch (err) {
        return res.status(500).json({ success: false, message: "Internal server error." })
    }
}



export const addCart = async (req, res) => {
    try {
        const { pId, userId } = req.body
        if (!pId) return res.json({ error: "Product id is required!" })
        if (!userId) return res.json({ error: "User id is required!" })
        console.log(pId, userId, "pid,currentUser");

        // Check if the product is already in the user's cart
        const cUser = await Users.findOne({ _id: userId }).exec();
        const existingProduct = cUser.cartProduct.includes(pId);
        console.log(existingProduct, "existingProduct");
        if (existingProduct) return res.json({ error: "Product already in cart!" });

        const user = await Users.findOneAndUpdate({ _id: userId }, { $push: { cartProduct: pId } }, { new: true }).exec();
        if (!user) return res.json({ error: "User not found!" });
        const product = user.cartProduct
        return res.json({ success: true ,message:"product added to cart!",product});

    } catch (err) {
        console.log(err);
        return res.json({ error: "Internal server error!" })
    }
}


export const getCartProducts = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) return req.status(400).json({ message: "User is required!" })

        const user = await Users.findById(userId).populate('cartProduct')

        const cartProducts = user?.cartProduct
        console.log(cartProducts, "cart pro from getcart pro cont");

        const discount = 2000;
        let subTotal = 0;
        for (const y of cartProducts) {
            subTotal = subTotal + y.price
        }
        let totalPrice = subTotal - 2000;
        console.log(totalPrice, "total price here");
        const totalProducts = cartProducts.length
        console.log(totalProducts, "total products here");
        return res.status(200).json({ success: true, cartProducts, totalPrice, totalProducts, subTotal })


    } catch (err) {
        return res.status(500).json({ message: "Internal server error!" })
    }
}


export const removeproduct = async (req, res) => {
    try {
        const { userId, pId } = req.body;

        if (!userId || !pId) {
            return res.status(400).json({ message: "User ID and Product ID are required!" });
        }

        const user = await Users.findByIdAndUpdate(userId, { $pull: { cartProduct: pId } }, { new: true }).exec();

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found!" });
        }
        return res.status(200).json({ success: true, message: "Product removed from cart!" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error!" });
    }
};


export const emptyCart = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required!" });
        }

        const user = await Users.findByIdAndUpdate(userId, { $set: { cartProduct: [] } }, { new: true }).exec();

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found!" });
        }

        return res.status(200).json({ success: true, message: "Order placed successfully!" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error! - controllerrrrr" });
    }
};
