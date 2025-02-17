import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utilitties/sendResponse";
import { UserService } from "./user.service";
import httpStatus from 'http-status'
import { tryCatchAsync } from "../../utilitties/tryCatch";


const createStudent : RequestHandler = tryCatchAsync(async (req, res, next) => {

    // Call service function to send this data
    const result = await UserService.createStudentIntoDB(req.body.student.password,req.body.student);

    sendResponse(res,{ //using sendResponse a common utility generic function for sending response
        success: true,
        statusCode: httpStatus.OK,
        message: "Student created successfully..",
        data: result
    });

});



export const UserController = { createStudent};
