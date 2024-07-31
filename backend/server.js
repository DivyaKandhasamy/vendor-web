import express from 'express';
import vendorRoutes from './routes/vendorRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';
import mongoose from 'mongoose';
import { connectToVendorDB } from './config/db.js';

const app = express();

const port = process.env.PORT || 3000;

app.use('/vendors', vendorRoutes);

app.use(errorHandler);

app.use(express.json());

connectToVendorDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
