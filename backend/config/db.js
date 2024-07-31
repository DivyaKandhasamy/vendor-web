import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const dbURI = process.env.MONGO_URI;

export const connectToVendorDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to the database');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from the database');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose disconnected through app termination');
  process.exit(0);
});

export default mongoose;
