import mongoose from "mongoose";

// Function to connect to MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("MongoDB Connected 🚀");
  } catch (error: any) {
    console.error("❌ Database connection failed", error);
    process.exit(1);
  } 
};
