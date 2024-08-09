import express from 'express';
import vendorRoutes from './routes/vendorRoutes.js';
import aptRoutes from './routes/aptRoutes.js'
import errorHandler from './middleware/errorMiddleware.js';
import mongoose from 'mongoose';
import { connectToVendorDB } from './config/db.js';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/vendors', vendorRoutes);
app.use('/apt', aptRoutes);

app.use(errorHandler);


connectToVendorDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
