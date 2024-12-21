import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

interface JwtPayload {
    id: string;
}

export const authChecker = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];

        if( !token ) {
            throw new Error('Token not found');
            return res.status(401).json({message: 'Access Denied . No Token Provided'})
        }

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET not defined");
        }

        const decode = jwt.verify(token, secret) as JwtPayload;

        req.user = decode;

        next();
    } catch (error) {
        console.error('AuthChecker error:', error);
        return res.status(401).json({message: 'Access Denied . Invalid Token'})
    }
}