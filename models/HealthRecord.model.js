import mongoose from "mongoose";

const healthRecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: String,
    },
    doctorName: String,
    physiotherapistId: {
      type: String,
    },
    physiotherapistName: String,
    date: {
      type: String,
      required: true,
    },
    bloodPressure: String,
    temperature: Number,
    weight: Number,
    heartRate: Number,
    notes: String,
    diagnosis: String,
    prescription: String,
    treatment: String,
    problem: String,
  },
  { timestamps: true }
);

export default mongoose.model("HealthRecord", healthRecordSchema);
