import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const AppointmentSchema = new mongoose.Schema({
  patientId: String,
  patientName: String,
  physiotherapistId: String,
  physiotherapistName: String,
  date: String,
  time: String,
  status: String
}, { strict: false });

const Appointment = mongoose.model('Appointment', AppointmentSchema);

async function run() {
  const apts = await Appointment.find({});
  console.log(JSON.stringify(apts, null, 2));
  process.exit(0);
}
run();
