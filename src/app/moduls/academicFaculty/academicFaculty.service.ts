import { TacademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyModel } from "./academicFaculty.model";




const createAcademicFacultyIntoDB = async(academicFacultyData: TacademicFaculty)=>{

// create user 
    const result = await AcademicFacultyModel.create(academicFacultyData);
    return  result;

} 

const getSingleAcademicFaculty = async(id: string)=>{

    const result = await AcademicFacultyModel.findById(id);
    return  result;
} 
    


const getAllAcademicFacultyFromDB = async()=>{
    const result = await AcademicFacultyModel.find();
    return result;
}

export const AcademicFacultyService = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultyFromDB,
    getSingleAcademicFaculty

} 