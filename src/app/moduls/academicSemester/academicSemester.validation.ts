import {z} from 'zod'
import { months } from './academicSemester.constants'
export const createAcademicSemesterValidationSchema = z.object({
    body: z.object({ //body means req body not an extra body obj
        academicSemesterData: z.object({
                name: z.enum(['Spring', 'Fall', 'Summar']),
                year: z.string(),
                code: z.enum(['01', '02', '03']),
                startMonth: z.enum([...months] as [string, ...string[]]),
                endMonth: z.enum([...months] as [string, ...string[]]),
            })
        })
    });


