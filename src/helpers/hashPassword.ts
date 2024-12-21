import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
    try {
      const hash = await bcrypt.hash(password, 10);
      return hash;
    } catch (err) {
      console.error('Error hashing password:', err);
      throw err;
    }
  };
  
