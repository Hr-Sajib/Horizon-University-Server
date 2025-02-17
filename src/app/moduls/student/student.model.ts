import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  id: { type: String, required: true, unique: true },
  admissionSemester: { type: Schema.Types.ObjectId },
  gender: { type: String, required: true, enum: ["male", "female"] },
  dateOfBirth: { type: Date },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: { type: String, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]},
  email: { type: String, required: true, unique: true, lowercase: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherContactNo: { type: String, required: true },
  },
  localGuardian: {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
  },
  profileImage: { type: String },
  user: { type: Schema.Types.ObjectId, required: true, unique: true, ref: "UserModel" },
});


export const StudentModel = model("Student", studentSchema);
