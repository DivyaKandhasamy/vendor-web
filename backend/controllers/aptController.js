import APT from '../models/apt.js';
import {aptData} from '../aptData.js';

export const createApt = async () => {
    const APTData= aptData; // Assuming vendors data comes from the request body
    try {
      const insertedVendors = await APT.insertMany(APTData);
      res.status(201).json(insertedVendors);
    } catch (error) {
      next(error);
    }
  };

  export const getapt = async (req, res, next) => {
    try {
      const APTData = await APT.find();
      res.status(200).json(APTData);
    } catch (error) {
      next(error);
    }
  };