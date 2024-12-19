import mongoose from "mongoose";
import { projects } from "../types/projects.type";

const projectsSchema = new mongoose.Schema<projects & Document>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true, default: "PENDING" },
    users: { type: [String], required: true, },
    paid: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 }
})

const projectModel = mongoose.model("projects", projectsSchema)

export default projectModel;