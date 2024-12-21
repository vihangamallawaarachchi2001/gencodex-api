import { user } from "../types/user.type";
import jwt from "jsonwebtoken";

const generateToken = (id: user['id']): string => {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN || '1h'; 

    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }

    return jwt.sign({ id }, secret, { expiresIn });
};

export default generateToken;
