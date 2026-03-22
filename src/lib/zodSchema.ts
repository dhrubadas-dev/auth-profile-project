import z from "zod";

export const loginFormSchema = z.object({
  lFullName: z.string().min(2, "Full name must be at least 6 characters long"),
  lEmail: z.email("Invalid email address"),
  lPassword: z.string().min(6, "Password must be at least 6 characters long"),
});

export const registerFormSchema = z.object({
  rEmail: z.email("Invalid email address"),
  rPassword: z.string().min(6, "Password must be at least 6 characters long"),
});
