import { connect } from "mongoose";

export default function connectDatabase() {
  try {
    // FIXME: 🚨 Add MONGODB_URI_LOCAL "MongoDB connection" to yout environment variable
    connect(process.env.MONGODB_URI_LOCAL)
    console.log(" ✅ Database connected successfully");
  } catch (error) {
    console.log(" 🛑 Error connecting to database", error);
  }
}