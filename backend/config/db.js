import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // This connects to the database specified in your MONGO_URI
<<<<<<< HEAD
    const conn = await mongoose.connect("mongodb://localhost:27017/Webster");
=======
    const conn = await mongoose.connect(process.env.MONGO_URI);
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
    
    console.log(`Successfully connected to MongoDB Host: ${conn.connection.host} 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;