import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utilitties/sendResponse";
import { tryCatchAsync } from "../../utilitties/tryCatch";
import { AcademicFacultyService } from "../academicFaculty/academicFaculty.service";
import httpStatus from 'http-status'




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



export const AcademicFacultyControllers = { 
    getAllAcademicFaculty,
    getSingleAcademicFaculty,
    createAcademicFaculty 
};
