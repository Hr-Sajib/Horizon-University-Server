// import { Response } from "express";

// export const globalErrorHandler = (err:any, res:Response)=> { 

//     const statusCode = err.statusCode || 500; // Use err's statusCode if available
//     const message = err.message || "Something went wrong!"
  
//       res.status(statusCode).json({
//       success: false,
//       message,
//       error: err.stack || err
//     })
  
//   }

import { Request, Response, NextFunction } from "express";
import safeStringify from "fast-safe-stringify";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => { 
    const statusCode = err.statusCode || 500; 
    const message = err.message || "Something went wrong!";

    // Log the error safely without circular references
    console.error(safeStringify(err));

    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined // Show stack only in dev mode
    });
};
