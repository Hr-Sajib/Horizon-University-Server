import TAcademicSemester from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";


const createAcademicSemesterIntoDB = async(academicSemesterData: TAcademicSemester)=>{
    const result = await AcademicSemesterModel.create(academicSemesterData);
    return  result;
} 


const getAllAcademicSemestersFromDB = async()=>{
    const result = await AcademicSemesterModel.find();
    return result;
}


const updateAcademicSemesterInDB = async(academicSemesterId:string, updatedAcademicSemesterData: Partial<TAcademicSemester>)=>{
    return AcademicSemesterModel.findByIdAndUpdate(
        academicSemesterId,
        { $set: updatedAcademicSemesterData },
        { new: true}
    )
}

export const AcademicSemesterService = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
    updateAcademicSemesterInDB

} 