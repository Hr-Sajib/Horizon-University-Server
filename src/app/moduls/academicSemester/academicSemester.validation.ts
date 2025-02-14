import {z} from 'zod'
import { months } from './academicSemester.constants'
export const createAcademicSemesterValidationSchema = z.object({
    body: z.object({
        name: z.enum(['Spring', 'Fall', 'Summar']),
        year: z.date(),
        code: z.enum(['01', '02', '03']),
        startMonth: z.enum([...months] as [string, ...string[]]),
        endtMonth: z.enum([...months] as [string, ...string[]]),
    })
})