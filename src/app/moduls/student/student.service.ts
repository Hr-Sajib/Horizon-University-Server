import { Student } from "./student.interface";
import { StudentModel } from "./student.model";



const getAllStudentsFromDB = async()=>{
    const result = await StudentModel.find();
    return result;
}

const getSingleStudentFromDB = async(studentId: string)=>{

    const result = await StudentModel.findOne({id: studentId});
    return result;
}



export const StudentServices = {
    getAllStudentsFromDB,
    getSingleStudentFromDB
}

