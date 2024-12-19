import { ObjectId } from "mongoose";
import { projects } from "./projects.type";

export type user = {
    id: ObjectId;
    name: string;
    email: string;
    password: string;
    projects: projects[];
    downloads: number;
    paid: number;
    role: string;
}