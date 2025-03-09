
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import safeStringify from "fast-safe-stringify";
import { string, ZodError, ZodIssue } from "zod";
import httpStatus from 'http-status'
import { TErrorSource } from "../errors/interface/errorTypes";
import { handleZodError } from "../errors/handleZodError";


export const globalErrorHandler : ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => { 
    


    // default values 
    let statusCode = err.statusCode || 500; 
    let message = err.message || "Something went wrong!";
    let errorSources: TErrorSource = [
        {
            path:'',
            message:'Something went wrong'
        }
    ]



    if(err instanceof ZodError){
        const simplifiedError = handleZodError(err)
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources;
    }


    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
};

