import { Schema, model, Document } from "mongoose";
import { months } from "./academicSemester.constants";
import TAcademicSemester from './academicSemester.interface'

type Month = 
  | "January" | "February" | "March" | "April" | "May" | "June"
  | "July" | "August" | "September" | "October" | "November" | "December";

export interface IAcademicSemester extends Document {
  name: "Spring" | "Fall" | "Summar";
  code: "01" | "02" | "03";
  year: Date;
  startMonth: Month;
  endMonth: Month;
}

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, enum: ["Spring", "Fall", "Summar"], required: true }, // enum used direct array declared
    code: { type: String, enum: ["01", "02", "03"], required: true },
    year: { type: Date, required: true },
    startMonth: { 
      type: String, 
      enum: months , // enum used imported array declared
      required: true 
    },
    endMonth: { 
      type: String, 
      enum: months ,  
      required: true 
    },
  },
  { timestamps: true }
);

export const AcademicSemesterModel = model<TAcademicSemester>("AcademicSemesterModel", academicSemesterSchema);
