import { Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";




const getAllStudents : RequestHandler = async(req, res)=>{ // RequestHandler for non repeated type declarations of func params

    try{

        const result = await StudentServices.getAllStudentsFromDB();

        res.status(200).json({
            success: true,
            message: "Students are retrived successfully..",
            data: result,
        })

    }catch(err){
        console.log(err);
    }
}




const getSingleStudent : RequestHandler = async(req, res)=>{

    try{

        const studentId = req.params.studentId;

        const result = await StudentServices.getSingleStudentFromDB(studentId);

        res.status(200).json({
            success: true,
            message: "Single Student are retrived successfully..",
            data: result,
        })

    }catch(err){
        console.log(err);
    }
}

export const StudentControllers = { getAllStudents,getSingleStudent };
