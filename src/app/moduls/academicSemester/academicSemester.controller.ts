import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utilitties/sendResponse";
import httpStatus from 'http-status'
import { AcademicSemesterService } from "./academicSemester.service";
import { tryCatchAsync } from "../../utilitties/tryCatch";
import mongoose from "mongoose";


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


const updateAcademicSemester: RequestHandler = tryCatchAsync(async (req, res, next) => {  
    const academicSemesterId = req.params.academicSemesterId;

    if (!mongoose.Types.ObjectId.isValid(academicSemesterId)) {
        return next(new Error("Academic Semester ID is invalid!"));  // ✅ Properly passing error to global handler
    }

    const updatedData = req.body.updatedAcademicSemesterData;
    const updatedAcademicSemester = await AcademicSemesterService.updateAcademicSemesterInDB(academicSemesterId, updatedData);

    if (!updatedAcademicSemester) {
        return next(new Error("Academic Semester not found!"));  // ✅ Correct error handling
    }

    res.status(200).json({
        success: true,
        message: "Academic Semester updated successfully!",
        data: updatedAcademicSemester
    });
});





const getAllAcademicSemesters = tryCatchAsync( async(req:Request, res:Response, next:NextFunction)=>{ 
        
    const result = await AcademicSemesterService.getAllAcademicSemestersFromDB();
    
    res.status(200).json({
            success: true,
            message: "Academic Semesters are retrived successfully..",
            data: result,
        })

})



export const AcademicSemesterController = { 
    createAcademicSemester, 
    getAllAcademicSemesters,
    updateAcademicSemester
};
