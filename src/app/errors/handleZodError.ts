import { ZodError, ZodIssue } from "zod"
import { TErrorSource } from "./interface/errorTypes"

export const handleZodError = (err: ZodError) =>{

    const errorSources : TErrorSource = err.issues.map((issue : ZodIssue)=>{

        return{
            path: issue?.path[issue.path.length-1],
            message: issue.message
        }
    })

    return{
        statusCode: 400,
        message: "Zod Validation Error",
        errorSources
    }
}