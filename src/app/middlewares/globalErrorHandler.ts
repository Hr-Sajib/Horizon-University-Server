import { Response } from "express";

export const globalErrorHandler = (err:any, res:Response)=> { 

    const statusCode = err.statusCode || 500; // Use err's statusCode if available
    const message = err.message || "Something went wrong!"
  
      res.status(statusCode).json({
      success: false,
      message,
      error: err.stack || err
    })
  
  }