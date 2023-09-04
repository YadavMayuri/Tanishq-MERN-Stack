import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartProduct: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }]
})

export default mongoose.model("Users", userSchema);