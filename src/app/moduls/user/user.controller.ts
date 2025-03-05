import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utilitties/sendResponse";
import { UserService } from "./user.service";
import httpStatus from 'http-status'
import { tryCatchAsync } from "../../utilitties/tryCatch";
import { AppError } from "../../errors/errors";


const createStudent: RequestHandler = tryCatchAsync(async (req, res, next) => {

    const result = await UserService.createStudentIntoDB(req.body.student.password, req.body.student);

    if (!result) {
        throw new AppError(httpStatus.BAD_REQUEST,"Student creation failed"); // This will be caught by `tryCatchAsync`
    }

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Student created successfully",
        data: result
    });
});




export const UserController = { createStudent};
