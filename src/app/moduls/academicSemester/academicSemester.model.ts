import { Schema, model, Document } from "mongoose";
import { months } from "./academicSemester.constants";
import TAcademicSemester from './academicSemester.interface'

type Month = 
  | "January" | "February" | "March" | "April" | "May" | "June"
  | "July" | "August" | "September" | "October" | "November" | "December";

export interface IAcademicSemester extends Document {
  name: "Spring" | "Summar" | "Fall";
  code: "01" | "02" | "03";
  year: string;
  startMonth: Month;
  endMonth: Month;
}

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, enum: ["Spring", "Fall", "Summar"], required: true }, // enum used direct array declared
    code: { type: String, enum: ["01", "02", "03"], required: true },
    year: { type: String, required: true },
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




// check for semester already exists or not

academicSemesterSchema.pre('save', async function(next){
  const semesterExists = await AcademicSemesterModel.findOne({
    name: this.name,
    year: this.year
  })


// const code = ((this.name=='Spring' && this.code==='01') || (this.name=='Fall' && this.code=='02') || (this.name=='Summar' && this.code=='03'))


// organized approach 

type TSemesterNameCodeMapper = {
  [key:string] : string     // used map type of TS for existing semesters or added later...
}

const semesterListMapper:TSemesterNameCodeMapper = {
  Spring: '01',
  Fall: '03',
  Summar: '02',
}

const nameCodeMatch = (semesterListMapper[this.name] == this.code)

if(!nameCodeMatch){
  throw new Error('Semester name and code mismatched!')
}
else if(semesterExists){
  throw new Error('Semester already exists!!')
}







  next();
})







export const AcademicSemesterModel = model<TAcademicSemester>("Academic Semesters", academicSemesterSchema);
