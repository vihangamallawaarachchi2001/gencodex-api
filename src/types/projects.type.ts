import {  ObjectId } from "mongoose";

export type projects = {
    id: ObjectId;
    name: string;
    description: string;
    status: string;
    users: string[];
    paid: number;
    downloads: number;
}