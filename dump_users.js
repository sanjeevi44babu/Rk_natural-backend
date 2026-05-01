import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const UserSchema = new mongoose.Schema({
  fullName: String,
  role: String,
  email: String
}, { strict: false });

const User = mongoose.model('User', UserSchema);

async function run() {
  const users = await User.find({});
  console.log(JSON.stringify(users, null, 2));
  process.exit(0);
}
run();
