import { TacademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyModel } from "./academicFaculty.model";




const createAcademicFacultyIntoDB = async(academicFacultyData: TacademicFaculty)=>{

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

const updateAcademicFacultyInDB = async(academicFacultyId:string, updatedAcademicFacultyData: Partial<TacademicFaculty>)=>{
    return AcademicFacultyModel.findByIdAndUpdate(
        academicFacultyId,
        { $set: updatedAcademicFacultyData },
        { new: true}
    )
}

export const AcademicFacultyService = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultyFromDB,
    getSingleAcademicFaculty,
    updateAcademicFacultyInDB

} 