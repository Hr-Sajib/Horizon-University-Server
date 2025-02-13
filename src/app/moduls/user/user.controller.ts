import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utilitties/sendResponse";
import { UserService } from "./user.service";
import httpStatus from 'http-status'


const createStudent = async (req: Request, res: Response, next:NextFunction) => {
    try {
        // Call service function to send this data
        const result = await UserService.createStudentIntoDB(req.body.student.password,req.body.student);

        // Send response correctly

        // res.status(200).json({
        //     success: true,
        //     message: "Student is created successfully.",
        //     data: result,
        // });

        sendResponse(res,{ //using sendResponse a common utility generic function for sending response
            success: true,
            statusCode: httpStatus.OK,
            message: "Student created successfully..",
            data: result
        });

 
    } catch (err) {
        // console.error(err);
        // res.status(500).json({
        //     success: false,
        //     message: "Internal Server Error",
        //     error: err,
        // });

        next(err) //global error handler instead
    }
};



export const UserController = { createStudent};
