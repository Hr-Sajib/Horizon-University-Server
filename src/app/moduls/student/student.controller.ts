import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";





 
const catchAsync = (fn: RequestHandler) => {   // instead of repeaded use of try catch in all functions we used upper level function
    return (req: Request, res: Response, next:NextFunction)=>{
        Promise.resolve( fn(req, res, next)).catch(err => next(err))
    }
    
}






const getAllStudents = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{ // RequestHandler for non repeated type declarations of func params
        
    const result = await StudentServices.getAllStudentsFromDB();
    
    res.status(200).json({
            success: true,
            message: "Students are retrived successfully..",
            data: result,
        })

})




const getSingleStudent = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{
   
    const studentId = req.params.studentId;
   
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    if (!result) {
        throw new Error("Student not found");
    }

    res.status(200).json({
        success: true,
        message: "Single Student is retrived successfully..",
        data: result,
    })

})

export const StudentControllers = { getAllStudents,getSingleStudent };
