import { Types } from "mongoose"
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { StudentModel } from "../student/student.model";
import UserModel from "./user.model";

const findLastStudentId =async () => {
    const lastStudent = await UserModel.findOne(
        {
            role:'student'
        },
        {
            id:1, _id:0
        }
    ).sort({createdAt: -1}).lean()

    return lastStudent?.id ? lastStudent.id : undefined
}



export const generateStudentId = async (semesterId:Types.ObjectId) => {
    const academicSemester = await AcademicSemesterModel.findById(semesterId);

    const yearPart = academicSemester?.year.slice(0,4)
    const semesterCodePart = academicSemester?.code

    const lastStudnetId = await findLastStudentId();


    let last4digits:string = ''

    if(lastStudnetId){
         if(yearPart===lastStudnetId.slice(0,4) && semesterCodePart===lastStudnetId.slice(4,6)){
            last4digits = (Number(lastStudnetId.slice(6,10))+1).toString().padStart(4,'0');
         }
    }
    else{
         last4digits = '0000';
    }
    



    const fullId = yearPart+semesterCodePart+last4digits;

    console.log('lastStudnetId ', lastStudnetId)
    console.log('yearPart ', yearPart)
    console.log('semesterCodePart ', semesterCodePart)
    console.log('fullId ', fullId)


    return(fullId);


}



















export const generateStudentId_1 = async(semesterId:Types.ObjectId) =>{

    let fullId: string = '';
    const semesterInfo = await AcademicSemesterModel.findById(semesterId);
    const studentIds = await StudentModel.find(
        { admissionSemester: semesterId },  
        { id: 1, _id: 0 }  
    );
    
    const maxId = studentIds.reduce((max, obj) => {
        const currentId = Number(obj.id);
        return currentId > max ? currentId : max;
      }, 0);

      
    const yearPart = semesterInfo?.year.slice(0,4)
    const semesterCodePart = semesterInfo?.code


    if(studentIds.length > 0){
        // if he/she is not the first student
        fullId = (maxId+1).toString();

    }
    else{
        // if he/she is the first student 
        fullId = yearPart+semesterCodePart+'0000';
        
    }
    
    return(fullId as string)
}

