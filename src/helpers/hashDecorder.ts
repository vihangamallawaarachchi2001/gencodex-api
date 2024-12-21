import bcrypt from 'bcrypt';
import { user } from '../types/user.type';

const hashDecorder = async (userPassword: user['password'], dbPassword: user['password']): Promise<boolean> => {
    return await bcrypt.compare(userPassword, dbPassword);
    
}

export default hashDecorder;