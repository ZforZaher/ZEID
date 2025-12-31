import * as z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .nonempty("Name is required")
      .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

    email: z
      .string()
      .email("Please enter a valid email address")
      .nonempty("Email is required")
      .min(5, "Email must be at least 5 characters")
      .max(100, "Email must be less than 100 characters"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password must be less than 50 characters")
      .nonempty("Password is required")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      ),

    rePassword: z.string().nonempty("Password confirmation is required"),

    phone: z
      .string()
      .regex(
        /^(01[0-2|5]{1}[0-9]{8})$/,
        "Please enter a valid Egyptian phone number starting with 010, 011, 012, 015"
      )
      .nonempty("Phone is required"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
  });
