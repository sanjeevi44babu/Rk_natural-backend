import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
    role: {
      type: String,
      enum: ["patient", "doctor", "admin", "supervisor", "physiotherapist", "therapist", "frontdesk"],
      default: "patient",
    },
    isApproved: { type: Boolean, default: false },
    specialization: String,
    gender: { 
      type: String, 
      enum: ["male", "female", "other"],
      default: "other"
    },
    dateOfBirth: Date,
    address: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);