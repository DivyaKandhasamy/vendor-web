import Vendor from '../models/vendors.js';
import { vendorsData } from '../vendorsData.js';

export const getVendors = async (req, res, next) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json(vendors);
  } catch (error) {
    next(error);
  }
};

export const createVendors = async () => {
    const vendors = vendorsData; // Assuming vendors data comes from the request body
    try {
      const insertedVendors = await Vendor.insertMany(vendors);
      res.status(201).json(insertedVendors);
    } catch (error) {
      next(error);
    }
  };