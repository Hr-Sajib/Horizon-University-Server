import config from "../../config";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import UserModel from "./user.model";
import { generateStudentId } from "./user.utilities";



const createStudentIntoDB = async(password: string, studentData: Student)=>{

    password = config.default_pass as string || password

    const studentId = await generateStudentId(studentData.admissionSemester);

    const userData: Partial<TUser> = {
        role: "student",
        password, 
        id: studentId
    };


// create user 
    const result = await UserModel.create(userData);


// create student 
    if(Object.keys(result).length){

        studentData.id = result.id;
        studentData.user = result._id;

        const newStudent = await StudentModel.create(studentData);
        return newStudent;

    }

}





export const UserService = {
    createStudentIntoDB,

}

