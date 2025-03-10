import mongoose from "mongoose";
import config from "../../config";
import { AppError } from "../../errors/errors";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import UserModel from "./user.model";
import { generateStudentId_1 } from "./user.utilities";
import HttpStatus from "http-status";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { AcademicDepartmentModel } from "../academic department/academicDepartment.model";



const createStudentIntoDB = async(password: string, studentData: Student)=>{


    let errorMsg : string = ''

    const session = await mongoose.startSession();


    try{

        session.startTransaction();

        // Validate admissionSemester exists
        const semesterExists = await AcademicSemesterModel.exists({ _id: studentData.admissionSemester }).session(session);
        if (!semesterExists) {
            errorMsg = "Invalid admission semester ID"
            throw new AppError(400, "Invalid admission semester ID");
        }

        // Validate academicDepartment exists
        const departmentExists = await AcademicDepartmentModel.exists({ _id: studentData.academicDepartment }).session(session);
        if (!departmentExists) {
            errorMsg = "Invalid academic department ID"
            throw new AppError(400, "Invalid academic department ID");
        }


        password = config.default_pass as string || password

        const studentId = await generateStudentId_1(studentData.admissionSemester);
    
        const userData: Partial<TUser> = {
            role: "student",
            password, 
            id: studentId
        };

        // create user  (Transaction 1)
        const result = await UserModel.create([userData], {session});


        // create student 
            if(!result.length){
                throw new AppError(HttpStatus.BAD_REQUEST,"Failed to create user!" )
            }
            else{

                studentData.id = result[0].id;
                studentData.user = result[0]._id;

                // ( Transaction 2 )
                const newStudent = await StudentModel.create([studentData],{session}) ;


                if(!newStudent){
                    throw new AppError(HttpStatus.BAD_REQUEST,"Failed to create student!" )
                }


                await session.commitTransaction()
                await session.endSession()

                return newStudent;

            }
    }catch(err){
        await session.abortTransaction()
        await session.endSession()
        throw new AppError(404,errorMsg);
    }



}





export const UserService = {
    createStudentIntoDB,

}

