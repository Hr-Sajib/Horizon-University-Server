import { Request, Response } from "express";
import { StudentServices } from "./student.service";




const getAllStudents = async(req: Request, res:Response)=>{

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




const getSingleStudent = async(req: Request, res:Response)=>{

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
