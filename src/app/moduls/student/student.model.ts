import { model, Schema } from "mongoose";
import { Student } from "./student.interface";
import validator from 'validator';

const guardianSchema = new Schema({
  fatherName: {
    type: String,
    required: [
      true,
      "Custom message for error here if anybody misses fatherName to enter",
    ],
  },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
});

const studentSchema = new Schema({
  name: {
    firstName: {
      type: String,
      required: true,
      maxlength: [5, "Firstname cant be more than 5 characters"],
      trim: true,
      validate: {
        validator: function(value: string) {                    // custom validator use 
            const formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
            console.log(formattedValue);
            return formattedValue === value;
        },
        message:"First character should be uppercase and the rest in lowercase"
      },
    
    }, // built-in validator used maxlength,trim
    middleName: { type: String },
    lastName: { type: String,
                required: true,
                validate:{
                    validator: (value: string) => validator.isAlpha(value),
                    message: "{VALUE} is not valid"
                }
    },
    address: { type: String, required: true },
  },
  id: { type: String, required: true },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "Cant select other than male or female",
    },
    required: true,
  },
  dateOfBirth: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImage: { type: String },
  isActive: { type: String, enum: ["active", "blocked"], default: "active" },
});

export const StudentModel = model<Student>("Student", studentSchema);
