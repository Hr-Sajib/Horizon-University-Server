import { TacademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartmentModel } from "./academicDepartment.model";


const createAcademicDepartmentIntoDB = async(academicDepartmentData: TacademicDepartment)=>{

    const result = await AcademicDepartmentModel.create(academicDepartmentData);
    return  result;
} 


const getSingleAcademicDepartment = async(id: string)=>{

    const result = await AcademicDepartmentModel.findById(id);
    return  result;
} 


const getAllAcademicDepartmentFromDB = async()=>{
    const result = await AcademicDepartmentModel.find().populate('academicFaculty');
    return result;
}


const updateAcademicDepartmentInDB = async(academicDepartmentId:string, updatedAcademicDepartmentData: Partial<TacademicDepartment>)=>{
    return AcademicDepartmentModel.findByIdAndUpdate(
        academicDepartmentId,
        { $set: updatedAcademicDepartmentData },
        { new: true}
    )
}


export const AcademicDepartmentService = {
    createAcademicDepartmentIntoDB,
    getSingleAcademicDepartment,
    getAllAcademicDepartmentFromDB,
    updateAcademicDepartmentInDB
}
