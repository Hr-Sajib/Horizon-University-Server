import mongoose, { Schema, model, Document } from "mongoose";
import { TUser } from "./user.interface";

// User Schema
const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
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



// Create the Mongoose model and apply the UserDocument interface
export const UserModel = model<TUser>("User", userSchema);

export default UserModel;
