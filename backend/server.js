import express from 'express';
import mongoose from './config/db.js';


const app = express();

// Your middleware and routes go here
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
