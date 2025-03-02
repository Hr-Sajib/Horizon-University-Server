import { model, Schema, Types } from "mongoose";
import { TacademicDepartment } from "./academicDepartment.interface";

const academicDepartmentSchema = new Schema<TacademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    academicFaculty: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "AcademicFacultyModel", 
    },
  },
  {
    timestamps: true, 
  }
);

export const AcademicDepartmentModel = model<TacademicDepartment>(
  "Academic Departments",
  academicDepartmentSchema
);
