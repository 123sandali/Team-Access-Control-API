import {z} from 'zod';

const registerSchema = z.object({
    username: z
        .string()
        .trim()
        .min(2, {message: "Name must be at least 2 characters long"})
        .max(100, {message: "Name cannot exceed 100 characters"}),
    email: z
        .string()
        .email({message: "Invalid email address"})
        .trim()
        .max(100, {message: "Email cannot exceed 100 characters"}),
    password: z
        .string()
        .min(8, {message: "Password must be at least 8 characters long"})
        .max(100, {message: "Password cannot exceed 100 characters"})
});

const loginSchema = z.object({
    email: z
        .string()
        .email({message: "Invalid email address"})
        .trim()
        .max(100, {message: "Email cannot exceed 100 characters"}),
    password: z
        .string()
        .min(8, {message: "Password must be at least 8 characters long"})
        .max(100, {message: "Password cannot exceed 100 characters"})
});



export {registerSchema, loginSchema};
