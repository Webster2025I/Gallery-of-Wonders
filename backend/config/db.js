import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // This connects to the database specified in your MONGO_URI
    const conn = await mongoose.connect("mongodb://localhost:27017/Webster");
    
    console.log(`Successfully connected to MongoDB Host: ${conn.connection.host} 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;