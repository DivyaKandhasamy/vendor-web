import APT from '../models/apt.js';
import aptDetails from '../models/aptDetails.js';
import {aptData} from '../aptData.js';
import { aptDetailsData } from '../aptDetailsData.js';

export const createApt = async (req,res) => {
    const APTData= aptData; // Assuming vendors data comes from the request body
    try {
      const insertedVendors = await APT.insertMany(APTData);
      res.status(201).json(insertedVendors);
    } catch (error) {
      res.send(error)
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

  export const createAptDetails = async (req,res) => {
    const APTData= aptDetailsData; // Assuming vendors data comes from the request body
    try {
      const insertedVendors = await aptDetails.insertMany(APTData);
      res.status(201).json(insertedVendors);
    } catch (error) {
      res.send(error)
    }
  };

  export const getAPTDetailsById = async (req, res, next) => {
    try {
      const vendors = await aptDetails.findOne({"APTID":req.params.id});
      res.status(200).json(vendors);
    } catch (error) {
      next(error);
    }
  };
