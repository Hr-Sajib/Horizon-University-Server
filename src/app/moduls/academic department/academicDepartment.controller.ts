import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utilitties/sendResponse";
import { tryCatchAsync } from "../../utilitties/tryCatch";
import httpStatus from 'http-status'
import mongoose from "mongoose";
import { AcademicDepartmentService } from "./academicDepartment.service";




const createAcademicDepartment: RequestHandler = tryCatchAsync(async (req, res, next) => {
    const result = await AcademicDepartmentService.createAcademicDepartmentIntoDB(req.body.academicDepartmentData);

    sendResponse(res, { 
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic Faculty created successfully.",
        data: result
    });
});



const getAllAcademicDepartment = tryCatchAsync(async(req:Request, res:Response, next:NextFunction)=>{ 
        
    const result = await AcademicDepartmentService.getAllAcademicDepartmentFromDB();
    
    res.status(200).json({
            success: true,
            message: "Academic departments are retrived successfully..",
            data: result,
        })

})



const getSingleAcademicDepartment = tryCatchAsync(async(req:Request, res:Response, next:NextFunction)=>{
   
    const departmentId = req.params.departmentId;
   
    const result = await AcademicDepartmentService.getSingleAcademicDepartment(departmentId)

    if (!result) {
        throw new Error("Department not found");
    }

    res.status(200).json({
        success: true,
        message: "Single Department is retrived successfully..",
        data: result,
    })

})



const updateAcademicDepartment : RequestHandler = tryCatchAsync(async (req, res, next) => {  
    const academicDepartmentId = req.params.academicDepartmentId;

    if (!mongoose.Types.ObjectId.isValid(academicDepartmentId)) {
        return next(new Error("Academic Department ID is not invalid!"));  
    }

    const updatedData = req.body.updatedAcademicDepartmentData;
    const updatedAcademicDepartment = await AcademicDepartmentService.updateAcademicDepartmentInDB(academicDepartmentId, updatedData);

    if (!updatedAcademicDepartment) {
        return next(new Error("Academic Department not found!"));  
    }

    res.status(200).json({
        success: true,
        message: "Academic Department updated successfully!",
        data: updatedAcademicDepartment
    });
});



export const AcademicDepartmentControllers = { 
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    createAcademicDepartment,
    updateAcademicDepartment
};
