import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utilitties/sendResponse";
import { tryCatchAsync } from "../../utilitties/tryCatch";
import { AcademicFacultyService } from "../academicFaculty/academicFaculty.service";
import httpStatus from 'http-status'
import mongoose from "mongoose";




const createAcademicFaculty: RequestHandler = tryCatchAsync(async (req, res, next) => {
    const result = await AcademicFacultyService.createAcademicFacultyIntoDB(req.body.academicFacultyData);

    sendResponse(res, { 
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic Faculty created successfully.",
        data: result
    });
});



const getAllAcademicFaculty = tryCatchAsync(async(req:Request, res:Response, next:NextFunction)=>{ // RequestHandler for non repeated type declarations of func params
        
    const result = await AcademicFacultyService.getAllAcademicFacultyFromDB();
    
    res.status(200).json({
            success: true,
            message: "Faculties are retrived successfully..",
            data: result,
        })

})

 

const getSingleAcademicFaculty = tryCatchAsync(async(req:Request, res:Response, next:NextFunction)=>{
   
    const facultyId = req.params.facultyId;
   
    const result = await AcademicFacultyService.getSingleAcademicFaculty(facultyId)

    if (!result) {
        throw new Error("Faculty not found");
    }

    res.status(200).json({
        success: true,
        message: "Single Faculty is retrived successfully..",
        data: result,
    })

})



const updateAcademicFaculty: RequestHandler = tryCatchAsync(async (req, res, next) => {  
    const academicFacultyId = req.params.academicFacultyId;

    if (!mongoose.Types.ObjectId.isValid(academicFacultyId)) {
        return next(new Error("Academic Faculty ID is not invalid!"));  // ✅ Properly passing error to global handler
    }

    const updatedData = req.body.updatedAcademicFacultyData;
    const updatedAcademicFaculty = await AcademicFacultyService.updateAcademicFacultyInDB(academicFacultyId, updatedData);

    if (!updatedAcademicFaculty) {
        return next(new Error("Academic Faculty not found!"));  // ✅ Correct error handling
    }

    res.status(200).json({
        success: true,
        message: "Academic Faculty updated successfully!",
        data: updatedAcademicFaculty
    });
});



export const AcademicFacultyControllers = { 
    getAllAcademicFaculty,
    getSingleAcademicFaculty,
    createAcademicFaculty,
    updateAcademicFaculty
};
