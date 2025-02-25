import {z} from "zod"
export const academicFacultyValidationSchema = z.object({
    name : z.string({
        invalid_type_error:'Academic faculty must be string'
    })
    .max(20, {message: "Academic faculty name can be 20 characters at max!" })
})

