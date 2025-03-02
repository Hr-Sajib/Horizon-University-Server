import {z} from "zod"
export const academicDepartmentValidationSchema = z.object({
    body: z.object({
        academicDepartmentData: z.object({
            name : z.string({
                invalid_type_error:'Academic Department must be string'
            })
            .max(20, {message: "Academic Department name can be 20 characters at max!" })
        })
        
    })
})
