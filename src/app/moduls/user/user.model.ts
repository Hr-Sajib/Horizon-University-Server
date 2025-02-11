import mongoose, { Schema, model, Document } from "mongoose";
import { isStrongPassword } from "validator";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt'

// User Schema
const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true },
    password: { 
        type: String, 
        required: true,
        validate:{
            validator: (value: string)=> isStrongPassword(value,{
                minLength:8,
                minLowercase:1,
                minUppercase:1,
                minNumbers:1,
                minSymbols:1,
            }),
            message: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        }
    },
    needsPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
      required: true,
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);


// password hashing 

userSchema.pre("save", async function(next){

    if(!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();

});







// Create the Mongoose model and apply the UserDocument interface
export const UserModel = model<TUser>("User", userSchema);

export default UserModel;
 