import mongoose from 'mongoose';

export const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(`Connected to Mongoo DB : ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
