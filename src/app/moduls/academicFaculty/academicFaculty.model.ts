
import { model, Schema } from "mongoose";
import { TacademicFaculty } from "./academicFaculty.interface";

const adademicFacultySchema = new Schema<TacademicFaculty>(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
)


export const AcademicFacultyModel = model<TacademicFaculty>('Academic Faculty', adademicFacultySchema)