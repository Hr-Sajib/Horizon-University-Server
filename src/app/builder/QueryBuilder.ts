// import { FilterQuery, Query } from "mongoose";

// class QueryBuilder<T>{
//     public modelQuery: Query<T[],T>;
//     public query: Record<string, unknown>;

//     constructor(modelQuery: Query<T[],T>, query: Record<string, unknown>){
//         this.modelQuery = modelQuery;
//         this.query = query;
//     }


//     search(searchableFields: string[]){

//         const searchTerm = this?.query?.searchTerm
//         if(searchTerm){
//             const searchQuery = this.modelQuery.find({
//                 $or: searchableFields.map((field) => ({
//                     [field]: { $regex: searchTerm, $options: 'i' }
//                 }) as FilterQuery<T> ),
//             });
//         }

//         return this;
//     }



//     filter(){
//         // Remove excluded fields from the query
//         const excludedFields = ['searchTerm', 'sort', 'limit', 'page','fields']; 
//         const queryObj = { ...this.query };

//         this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

//         return this;
//     }



//     sort(){
//         const sort : string = this?.query?.sort as string || '-createdAt'

//         this.modelQuery = this.modelQuery.sort(sort)

//         return this;
//     }



//     paginate(){
//         const page = Number(this?.query?.page) || 1; 
//         const limit = Number(this?.query?.limit) || 3;
//         const skip = (page - 1) * limit; 

//         this.modelQuery = this.modelQuery.skip(skip).limit(limit);

//         return this;

//     }


//     fields(){
//         const wantedFields = (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v';

//         this.modelQuery = this.modelQuery.select(wantedFields as any);

//         return this;

//     }

 
// }

// export default QueryBuilder;

import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchableFields: string[]) {
        const searchTerm = this.query?.searchTerm as string;

        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({ // ✅ Fixed: Now correctly updating `this.modelQuery`
                $or: searchableFields.map((field) => ({
                    [field]: { $regex: searchTerm, $options: 'i' }
                }) as FilterQuery<T>),
            });
        }

        return this;
    }

    filter() {
        const excludedFields = ['searchTerm', 'sort', 'limit', 'page', 'fields']; 
        const queryObj = { ...this.query };

        excludedFields.forEach((el) => delete queryObj[el]); // ✅ Fixed: Ensures excluded fields are removed

        this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

        return this;
    }

    sort() {
        const sortField = this.query?.sort as string || '-createdAt';
        this.modelQuery = this.modelQuery.sort(sortField); // ✅ Fixed: Now directly assigns the sort field
        return this;
    }

    paginate() {
        const page = Number(this.query?.page) || 1; 
        const limit = Number(this.query?.limit) || 3;
        const skip = (page - 1) * limit; 

        this.modelQuery = this.modelQuery.skip(skip).limit(limit); // ✅ Fixed: Ensures numbers are parsed before applying

        return this;
    }

    fields() {
        const wantedFields = (this.query?.fields as string)?.split(',')?.join(' ') || '-__v';

        this.modelQuery = this.modelQuery.select(wantedFields); // ✅ Fixed: Ensures proper field selection formatting

        return this;
    }
}

export default QueryBuilder;
export const studentSearchableFields = ['email', 'name.firstName', 'name.lastName', 'presentAddress'];

