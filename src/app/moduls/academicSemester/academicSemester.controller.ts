import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utilitties/sendResponse";
import httpStatus from 'http-status'
import { AcademicSemesterService } from "./academicSemester.service";
import { tryCatchAsync } from "../../utilitties/tryCatch";


const createAcademicSemester : RequestHandler = async (req, res, next) => {
    try {

        const result = await AcademicSemesterService.createAcademicSemesterIntoDB(req.body.academicSemesterData);

        sendResponse(res,{ 
            success: true,
            statusCode: httpStatus.OK,
            message: "Academic Semester created successfully..",
            data: result
        });

 
    } catch (err) {
        next(err) 
    }
};




const getAllAcademicSemesters = tryCatchAsync( async(req:Request, res:Response, next:NextFunction)=>{ 
        
    const result = await AcademicSemesterService.getAllAcademicSemestersFromDB();
    
    res.status(200).json({
            success: true,
            message: "Academic Semesters are retrived successfully..",
            data: result,
        })

})



export const AcademicSemesterController = { createAcademicSemester, getAllAcademicSemesters};
