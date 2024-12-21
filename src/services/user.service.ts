//user service

import generateToken from '../helpers/generateToken';
import hashDecorder from '../helpers/hashDecorder';
import { hashPassword } from '../helpers/hashPassword';
import userModel from '../models/user.model';
import { forgotPasswordRequest, getProfileRequest, loginRequest, signupRequest, updateProfileRequest } from '../schemas/user.schema';

const signup = async (data: signupRequest) => {
    try {
      const existingUser = await userModel.findOne({ email: data.email });
  
      if (existingUser) {
        throw new Error('User already exists');
      }
  
      const hashedPassword = await hashPassword(data.password);
      data.password = hashedPassword;
  
      const user = new userModel(data);
      await user.save();

      const token = await generateToken(user.id)
  
      return token;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };
  

const login = async (data: loginRequest) => {
    try {
        const user = await userModel.findOne({ email: data.email });

        if (user == null) {
            throw new Error('User not found');
        }

        const isPasswordValid = await hashDecorder(data.password, user.password);

        if ( !isPasswordValid ) {
            throw new Error('Invalid password');
        }

        const token = generateToken(user.id)

        return token;
    } catch (error) {
        console.log(error);
    }
}

const getProfile = async (id :getProfileRequest['id'] ) => {
    try {
        const profile = userModel.findOne({ _id: id });

        if (profile == null) {
            throw new Error('User not found');
        }

        return profile;
    } catch (error) {
        console.log(error);
    }
}

const updateProfile = async (id: string ,data: updateProfileRequest) => {
    try {
        const updatedProfile = await userModel.findByIdAndUpdate(
            { _id: id },
            { ...data },
            {new: true}
        )

        return updatedProfile;
    } catch (error) {
        
    }
}

const changePassword = async (id: string, oldPassword: string, newPassword: string) => {
    try {
        const user = await userModel.findOne({ _id: id });

        if (user == null) {
            throw new Error('User not found');
        }

        const isPasswordValid = await hashDecorder(oldPassword, user.password);

        if ( !isPasswordValid ) {
            throw new Error('Invalid password');
        }

        const hashedPassword = await hashPassword(newPassword);
        user.password = hashedPassword;
        await user.save();

        return 'Password changed successfully';
    } catch (error) {
        console.log(error);
    }
}

const forgotPassword = async (data: forgotPasswordRequest) => {
    try {
        const user = await userModel.findOne({ email: data.email });
        if ( user ==null) {
            throw new Error (' no user found with this email');
        }

        const updatePassword = await hashPassword(data.password);

        const update = await userModel.findByIdAndUpdate({_id: user.id}, {password: data.password}, { new: true});

        return 'Password updated successfully';
    } catch (error) {
        console.error(error);
        
    }
}


const deleteUSer = async ( id: string) => {
    const user =  await userModel.findOne({_id: id})

    if ( user == null ) {
        throw new Error(' user not found');
    }

    await userModel.findByIdAndDelete({_id: id});

    return 'User deleted successfully';
}

const userService = {
    signup,
    login,
    getProfile,
    updateProfile,
    changePassword,
    forgotPassword,
    deleteUSer
}

export default userService;