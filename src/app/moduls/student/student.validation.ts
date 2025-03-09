import { z } from "zod";
 
const createStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long" }),
      name: z.object({
        firstName: z
          .string()
          .max(5, { message: "Firstname can't be more than 5 characters" })
          .regex(/^[A-Z][a-z]*$/, { message: "First character should be uppercase and the rest in lowercase" }),
        lastName: z
          .string()
          .regex(/^[A-Za-z]+$/, { message: "Last name must contain only alphabets" }),
      }),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
      gender: z.enum(["male", "female"], { message: "Can't select other than male or female" }),
      dateOfBirth: z
        .string().optional(),
      contactNo: z
        .string()
        .regex(/^\+?\d{10,15}$/, { message: "Contact number should be in valid format" }),
      emergencyContactNo: z
        .string()
        .regex(/^\+?\d{10,15}$/, { message: "Emergency contact number should be in valid format" }),
      bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
      email: z.string().email({ message: "Not a valid email" }),
      presentAddress: z.string().min(1, { message: "Present address is required" }),
      permanentAddress: z.string().min(1, { message: "Permanent address is required" }),
      guardian: z.object({
        fatherName: z.string().min(1, { message: "Father's name is required" }),
        fatherOccupation: z.string().min(1, { message: "Father's occupation is required" }),
        motherName: z.string().min(1, { message: "Mother's name is required" }),
        motherOccupation: z.string().min(1, { message: "Mother's occupation is required" }),
        fatherContactNo: z.string().regex(/^\+?\d{10,15}$/, { message: "Father's contact number should be in valid format" }),
        motherContactNo: z.string().regex(/^\+?\d{10,15}$/, { message: "Mother's contact number should be in valid format" }),
      }),
      localGuardian: z.object({
        name: z.string().min(1, { message: "Local guardian's name is required" }),
        occupation: z.string().min(1, { message: "Local guardian's occupation is required" }),
        contactNo: z.string().regex(/^\+?\d{10,15}$/, { message: "Local guardian's contact number should be in valid format" }),
      }),
      profileImage: z.string().optional(), 
      user: z.string().optional(),
    })
  })
});



const updateStudentValidationSchema = z.object({
  body: z.object({
    updatedStudentData: z.object({
      name: z.object({
        firstName: z
          .string()
          .max(5, { message: "Firstname can't be more than 5 characters" })
          .regex(/^[A-Z][a-z]*$/, { message: "First character should be uppercase and the rest in lowercase" }).optional(),
        lastName: z
          .string()
          .regex(/^[A-Za-z]+$/, { message: "Last name must contain only alphabets" }).optional(),
      }).optional(),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
      gender: z.enum(["male", "female"], { message: "Can't select other than male or female" }).optional(),
      dateOfBirth: z
        .string().optional(),
      contactNo: z
        .string()
        .regex(/^\+?\d{10,15}$/, { message: "Contact number should be in valid format" }).optional(),
      emergencyContactNo: z
        .string()
        .regex(/^\+?\d{10,15}$/, { message: "Emergency contact number should be in valid format" }).optional(),
      bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
      email: z.string().email({ message: "Not a valid email" }).optional(),
      presentAddress: z.string().min(1, { message: "Present address is required" }).optional(),
      permanentAddress: z.string().min(1, { message: "Permanent address is required" }).optional(),
      guardian: z.object({
        fatherName: z.string().min(1, { message: "Father's name is required" }).optional(),
        fatherOccupation: z.string().min(1, { message: "Father's occupation is required" }).optional(),
        motherName: z.string().min(1, { message: "Mother's name is required" }).optional(),
        motherOccupation: z.string().min(1, { message: "Mother's occupation is required" }).optional(),
        fatherContactNo: z.string().regex(/^\+?\d{10,15}$/, { message: "Father's contact number should be in valid format" }).optional(),
        motherContactNo: z.string().regex(/^\+?\d{10,15}$/, { message: "Mother's contact number should be in valid format" }).optional(),
      }).optional(),
      localGuardian: z.object({
        name: z.string().min(1, { message: "Local guardian's name is required" }).optional(),
        occupation: z.string().min(1, { message: "Local guardian's occupation is required" }).optional(),
        contactNo: z.string().regex(/^\+?\d{10,15}$/, { message: "Local guardian's contact number should be in valid format" }).optional(),
      }).optional(),
      profileImage: z.string().optional().optional(),
      user: z.string().optional().optional()
    })
  })
});




export const studentValidations = { createStudentValidationSchema, updateStudentValidationSchema };
