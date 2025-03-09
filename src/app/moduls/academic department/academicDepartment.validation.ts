import {z} from "zod"
export const academicDepartmentValidationSchema = z.object({
    body: z.object({
        academicDepartmentData: z.object({
            name : z.string({
                invalid_type_error:'Academic Department must be string',
                required_error: "Academic Department name is required", 
            })
            .max(20, {message: "Academic Department name can be 20 characters at max!" }),
            academicFaculty: z.string({
                required_error: "Academic Faculty Id is required", 
            })
        })
        
    })
})
