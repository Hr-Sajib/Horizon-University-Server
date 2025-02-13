import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status'
export const notFoundHandler = (req:Request, res:Response, next: NextFunction)=> { 


    const message = "API not found!"
  
      res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message,
    })
  
  }

 