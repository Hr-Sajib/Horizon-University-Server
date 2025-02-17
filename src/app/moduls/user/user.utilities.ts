import { Types } from "mongoose"
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import UserModel from "./user.model";

export const generateStudentId = async(semesterId:Types.ObjectId) =>{

    let fullId: string = '';
    const semesterInfo = await AcademicSemesterModel.findById(semesterId);
    const lastStudentId = await UserModel.findOne(
        {
            role: "student"
        },
        {
            id:1, _id:0
        }
    ).sort({createdAt : -1})

    const yearPart = semesterInfo?.year.slice(0,4)
    const semesterCodePart = semesterInfo?.code


    if(lastStudentId){
        // if he/she is not the first student
        const last4digitsNumber = Number(lastStudentId.id.slice(-4))+1;
        const last4digits = last4digitsNumber.toString().padStart(4,'0')
        fullId = yearPart+semesterCodePart+last4digits;

    }
    else{
        // if he/she is the first student 
        fullId = yearPart+semesterCodePart+'0000';
        
    }

    return(fullId as string)
}

