
import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const getAllStudentsFromDB = async () => {
    const result = await StudentModel.find()
        .populate('admissionSemester')
        .populate({
            path: "academicDepartment",
            populate: { path: "academicFaculty" }
        })
    return result;
};
  

const getSingleStudentFromDB = async(studentId: string)=>{

    const result = await StudentModel.findOne({id: studentId});
    return result;
}


const updateStudentInDB =async (studentId: string, updatedStudentData: Partial<Student>) => {
    
    const {name, guardian, localGuardian, ...remainingStudentData} = updatedStudentData;

    const modifiedUpdatedData : Record<string,unknown> = {...remainingStudentData}

    if(name && Object.keys(name).length){
        for(const [key, value] of Object.entries(name)){
            modifiedUpdatedData[`name.${key}`] = value;
        }
    }
    if(guardian && Object.keys(guardian).length){
        for(const [key, value] of Object.entries(guardian)){
            modifiedUpdatedData[`guardian.${key}`] = value;
        }
    }
    if(localGuardian && Object.keys(localGuardian).length){
        for(const [key, value] of Object.entries(localGuardian)){
            modifiedUpdatedData[`localGuardian.${key}`] = value;
        }
    }


    const result = await StudentModel.findOneAndUpdate(
        {id: studentId},
        modifiedUpdatedData,
        {new: true, runValidators:true}
    );



    return result;

}


export const StudentServices = {
    getAllStudentsFromDB,
    getSingleStudentFromDB,
    updateStudentInDB
}
