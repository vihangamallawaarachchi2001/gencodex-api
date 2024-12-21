import { z } from "zod";

export const signupRequestScema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(3),
})

export const signupResponseSchema = z.object({
    message: z.string(),
    token: z.string(),
})

export const loginRequestSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const loginResponseSchema = z.object({
    message: z.string(),
    token: z.string(),
})

export const getProfileRequestSchema = z.object({
    id: z.string(),
})

export const getProfileResponseSchema = z.object({
    user: z.object({
        email: z.string(),
        name: z.string(),
        role: z.string(),
        downloads: z.number(),
        paid: z.number(),
    }),
    message: z.string(),
})

export const updateProfileRequestSchema = z.object({
    email: z.string().email(),
    name: z.string(),
})

export const updateProfileResponseSchema = z.object({
    message: z.string(),
})

export const changePasswordRequestSchema = z.object({
    token: z.string(),
    oldPassword: z.string().min(6),
    newPassword: z.string().min(6),
})

export const changePasswordResponseSchema = z.object({
    message: z.string(),
})

export const forgotPasswordRequestSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const forgotPasswordResponseSchema = z.object({
    message: z.string(),
})

export const deleteUserRequestSchema = z.object({
    token: z.string(),
})

export const deleteUserResponseSchema = z.object({
    message: z.string(),
})

export type signupRequest = z.infer<typeof  signupRequestScema>
export type signupResponse = z.infer<typeof signupResponseSchema>
export type loginRequest = z.infer<typeof   loginRequestSchema>
export type loginResponse = z.infer<typeof  loginResponseSchema>
export type getProfileRequest = z.infer<typeof  getProfileRequestSchema>
export type getProfileResponse = z.infer<typeof getProfileResponseSchema>
export type updateProfileRequest = z.infer<typeof  updateProfileRequestSchema >
export type updateProfileResponse = z.infer<typeof updateProfileResponseSchema >
export type changePasswordRequest = z.infer<typeof changePasswordRequestSchema >
export type changePasswordResponse = z.infer<typeof changePasswordResponseSchema >
export type forgotPasswordRequest = z.infer<typeof forgotPasswordRequestSchema >
export type forgotPasswordResponse = z.infer<typeof forgotPasswordResponseSchema >
export type deleteUserRequest = z.infer<typeof deleteUserRequestSchema >
export type deleteUserResponse = z.infer<typeof deleteUserResponseSchema >