import { Request, Response} from 'express';
import { signupRequest } from '../schemas/user.schema';
import userService from '../services/user.service';

const userController = {
    signup: async ( req:Request, res: Response) => {
        try {
            const data:signupRequest = req.body;
            const token = userService.signup(data)

            return res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    login: async ( req:Request, res: Response) => {
        try {
            const data = req.body;
            const token = userService.login(data);

            return res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    getProfile: async ( req:Request, res: Response) => {
        try {
            const id = req.user?.id as string;
            const profile = userService.getProfile(id);

            return res.status(200).json({ profile });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    updateProfile: async ( req:Request, res: Response) => {
        try {
            const id = req.user?.id as string;
            const data = req.body;
            const profile = userService.updateProfile(id, data);

            return res.status(200).json({ profile });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    forgotPassword: async ( req:Request, res: Response) => {
        try {
            const {email, password} = req.body;

            const data = {email, password}
            const response = userService.forgotPassword(data);

            return res.status(200).json({ response });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    changePassword: async ( req:Request, res: Response) => {
        try {
            const id = req.user?.id as string;
            const {oldPassword, newPassword} = req.body;

            const response = userService.changePassword(id,oldPassword, newPassword);

            return res.status(200).json({ response });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    deleteProfile: async ( req:Request, res: Response) => {
        try {
            const id = req.user?.id as string;
            const response = userService.deleteUSer(id);

            return res.status(200).json({ response });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}

