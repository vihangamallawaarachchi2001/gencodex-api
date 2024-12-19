import mongoose from "mongoose";
import { user } from "../types/user.type";

const userSchema  = new mongoose.Schema <user & Document> ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    projects: { type: [Object], default: [] },
    downloads: { type: Number, default: 0 },
    paid: { type: Number, default: 0 },
    role: { type: String, required: true , default: "free-user"}
})

const userModel = mongoose.model("users", userSchema);

export default userModel;