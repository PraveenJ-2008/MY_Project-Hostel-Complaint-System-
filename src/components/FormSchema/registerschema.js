import { z } from "zod";
export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  registerNumber: z.string().regex(/^\d{2}[A-Z]{2}\d{3}$/, "Enter valid register number (Eg: 25AD000)"),
  email: z.string().email("Invalid email").regex(/^[a-zA-Z0-9._%+-]+@sece\.ac\.in$/, "Use your college email ID"),
  password: z.string().min(5, "Password must be at least 5 characters"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  hostelBlock: z.string().min(1, "Hostel block is required"),
  roomNumber: z.string().min(3, "Room number is required")
});