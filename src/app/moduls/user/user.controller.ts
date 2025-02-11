import { Request, Response } from "express";
import { UserService } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        // const {password, student} = req.body.student;

        // console.log("req body : ", req.body)

        // Call service function to send this data
        const result = await UserService.createStudentIntoDB(req.body.student.password,req.body.student);

        // Send response correctly
        res.status(200).json({
            success: true,
            message: "Student is created successfully.",
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err,
        });
    }
};



export const UserController = { createStudent};
