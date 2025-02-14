import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utilitties/sendResponse";
import httpStatus from 'http-status'
import { AcademicSemesterService } from "./academicSemester.service";


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



export const AcademicSemesterController = { createAcademicSemester};
