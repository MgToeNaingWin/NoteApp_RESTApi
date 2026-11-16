import * as z from "zod"

export const registerSchema = z.object({
    name: z
        .string({ error: "Name is required" })
        .trim()
        .min(3, "Name must be at least 3 characters")
        .max(12, "Name cannot exceed 12 characters"),
    email: z.email("Please enter a valid email address"),
    password: z
        .string({ error: "Password is required" })
        .min(6, "Password must be at least 6 characters")
})
