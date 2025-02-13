import { z } from "zod";

export const createStudentValidationSchema = z.object({
  student: z.object({
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    name: z.object({
      firstName: z
        .string()
        .max(5, "Firstname can't be more than 5 characters")
        .regex(/^[A-Z][a-z]*$/, "First character should be uppercase and the rest in lowercase"),
      lastName: z
        .string()
        .regex(/^[A-Za-z]+$/, "Last name must contain only alphabets"),
    }),
    admissionSemester: z.string().optional(),
    gender: z.enum(["male", "female"], { message: "Can't select other than male or female" }),
    dateOfBirth: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Date of birth must be in the format YYYY-MM-DD"),
    contactNo: z
      .string()
      .regex(/^\+?\d{10,15}$/, "Contact number should be in valid format"),
    emergencyContactNo: z
      .string()
      .regex(/^\+?\d{10,15}$/, "Emergency contact number should be in valid format"),
    bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
    email: z.string().email("Not a valid email"),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: z.object({
      fatherName: z.string(),
      fatherOccupation: z.string(),
      motherName: z.string(),
      motherOccupation: z.string(),
      fatherContactNo: z.string().regex(/^\+?\d{10,15}$/, "Father's contact number should be in valid format"),
      motherContactNo: z.string().regex(/^\+?\d{10,15}$/, "Mother's contact number should be in valid format"),
    }),
    localGuardian: z.object({
      name: z.string(),
      occupation: z.string(),
      contactNo: z.string().regex(/^\+?\d{10,15}$/, "Local guardian contact number should be in valid format"),
    }),
    profileImage: z.string().optional(), 
    user: z.string().optional(),
  }),
});

export const studentValidations = { createStudentValidationSchema };
