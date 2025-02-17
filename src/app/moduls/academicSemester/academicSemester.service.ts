import TAcademicSemester from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";


const createAcademicSemesterIntoDB = async(academicSemesterData: TAcademicSemester)=>{

// create user 
    const result = await AcademicSemesterModel.create(academicSemesterData);
    return  result;

} 


const getAllAcademicSemestersFromDB = async()=>{
    const result = await AcademicSemesterModel.find();
    return result;
}

export const AcademicSemesterService = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,

} 