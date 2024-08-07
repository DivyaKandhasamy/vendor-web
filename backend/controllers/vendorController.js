import Vendor from '../models/vendors.js';
import { vendorsData } from '../vendorsData.js';

export const getVendors = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const vendors = await Vendor.find()
      .sort({ dateAdded: -1 }) 
      .lean(); 

    vendors.sort((a, b) => a.vendorName.localeCompare(b.vendorName)); 

    const paginatedVendors = vendors.slice((page - 1) * limit, page * limit);
    const count = vendors.length;

    res.status(200).json({
      data: paginatedVendors,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page)
    });
  } catch (error) {
    next(error);
  }
};

export const getVendorsLatest = async (req, res, next) => {
  try {
    const vendors = await Vendor.find().sort({ dateAdded: -1 }).limit(5);
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