import { z } from "zod";

 const signupRequestScema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(3),
})

 const signupResponseSchema = z.object({
    message: z.string(),
    token: z.string(),
})

 const loginRequestSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

 const loginResponseSchema = z.object({
    message: z.string(),
    token: z.string(),
})

 const getProfileRequestSchema = z.object({
    token: z.string(),
})

 const getProfileResponseSchema = z.object({
    user: z.object({
        email: z.string(),
        name: z.string(),
        role: z.string(),
        downloads: z.number(),
        paid: z.number(),
    }),
    message: z.string(),
})

 const updateProfileRequestSchema = z.object({
    token: z.string(),
    email: z.string().email(),
    name: z.string(),
})

 const updateProfileResponseSchema = z.object({
    message: z.string(),
})

 const changePasswordRequestSchema = z.object({
    token: z.string(),
    oldPassword: z.string().min(6),
    newPassword: z.string().min(6),
})

 const changePasswordResponseSchema = z.object({
    message: z.string(),
})

 const forgotPasswordRequestSchema = z.object({
    email: z.string().email(),
})

 const forgotPasswordResponseSchema = z.object({
    message: z.string(),
})

 const logoutRequestSchema = z.object({
    token: z.string(),
})

 const logoutResponseSchema = z.object({
    message: z.string(),
})

 const deleteUserRequestSchema = z.object({
    token: z.string(),
})

 const deleteUserResponseSchema = z.object({
    message: z.string(),
})

const userSchema = {
    signupRequestScema,
    signupResponseSchema,
    loginRequestSchema,
    loginResponseSchema,
    getProfileRequestSchema,
    getProfileResponseSchema,
    updateProfileRequestSchema,
    updateProfileResponseSchema,
    changePasswordRequestSchema,
    changePasswordResponseSchema,
    forgotPasswordRequestSchema,
    forgotPasswordResponseSchema,
    logoutRequestSchema,
    logoutResponseSchema,
    deleteUserRequestSchema,
    deleteUserResponseSchema,
}

export default userSchema;