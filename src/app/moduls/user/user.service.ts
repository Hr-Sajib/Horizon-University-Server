import { TUser } from "./user.interface";
import UserModel from "./user.model";


const createStudentIntoDB = async(student: TUser)=>{

    const result = await UserModel.create(student);
    return result;
}


export const UserService = {
    createStudentIntoDB,

}