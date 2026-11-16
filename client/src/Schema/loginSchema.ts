import * as z from "zod"

export const loginSchema = z.object({
    email: z.email("Please enter a valid email address"),
    password: z
        .string({ error: "Password is required" })
        .min(6, "Password must be at least 6 characters")
})
