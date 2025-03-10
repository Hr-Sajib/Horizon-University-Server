
import { ZodNumber } from "zod";
import QueryBuilder from "../../builder/QueryBuilder";
import { studentSearchableFields } from "./student.constants";
import { Student } from "./student.interface";
import { StudentModel } from "./student.model";


const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
//     // console.log(query);

//     let searchTerm = '';
    // const studentSearchableFields = ['email', 'name.firstName', 'name.lastName', 'presentAddress'];

//     // If searchTerm is provided in the query, set it
//     if (query.searchTerm) {
//         searchTerm = query?.searchTerm as string;
//     }

//     // Construct search query with $or for searchable fields
//     // const searchQuery = StudentModel.find({
//     //     $or: studentSearchableFields.map((field) => ({
//     //         [field]: { $regex: searchTerm, $options: 'i' }
//     //     }))
//     // });

//     // Remove excluded fields from the query
    // const excludedFields = ['searchTerm', 'sort', 'limit', 'page','fields']; 
    // const queryObj = { ...query };
    // excludedFields.forEach((el) => delete queryObj[el]);


//     // Construct the base query with filters applied from the queryObj
//     // let filterQuery = searchQuery.find(queryObj)
//     //     .populate('admissionSemester')
//     //     .populate({
//     //         path: "academicDepartment",
//     //         populate: { path: "academicFaculty" }
//     //     });

//     // Handle sorting logic
//     let sort: Record<string, 1 | -1> = { createdAt: -1 }; // Default to descending sort by createdAt

//     if (query.sort) {
//         const sortField = query.sort as string;

//         if (sortField.startsWith('-')) {
//             sort = { [sortField.slice(1)]: -1 };
//         } else {
//             sort = { [sortField]: 1 };
//         }
//     }

//     // Handle limit functionality
//     let limit: number = 5; // Default limit 
//     if (query.limit) {
//         const parsedLimit = parseInt(query.limit as string, 10);
//         if (!isNaN(parsedLimit) && parsedLimit > 0) {
//             limit = parsedLimit;
//         }
//     }

//     // Pagination Logic
//     let page = 1; // Default page number
//     let skip = 0; // Default skip value

//     if (query.page) {
//         page = Number(query.page);
//         skip = (page - 1) * limit; 
//     }

//     const paginationQuery =  filterQuery
//         .skip(skip)         
//         .limit(limit)   








// // field limiting 

//   let wantedFields = 'name';

//   if (query.fields) {
//     wantedFields = (query.fields as string).split(',').join(' '); 
//   }


//   const result = await  paginationQuery.select(wantedFields);




  const studentQuery = new QueryBuilder(StudentModel.find(),query)
    .search(studentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()


  const result = await studentQuery.modelQuery;
  return result ;




 
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
