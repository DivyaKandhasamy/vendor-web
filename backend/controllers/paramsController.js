import Parameters from '../models/paramName.js';
import {paramsData} from '../paramsData.js';

export const createParams = async () => {
    const newParamsData = paramsData; // Assuming vendors data comes from the request body
    try {
      const insertedData = await Parameters.insertMany(newParamsData);
      res.status(201).json(insertedData);
    } catch (error) {
      next(error);
    }
  };

  export const getAllParams = async (req, res, next) => {
    try {
      const paramsData = await Parameters.find();
      res.status(200).json(paramsData);
    } catch (error) {
      next(error);
    }
  };

  export const getParamsById = async (req, res, next) => {
    try {
        const paramName = await Parameters.findOne({'paramName': req.params.id});
        if (!paramName) {
          return res.status(404).json({ message: 'Parameter not found' });
        }
        res.json(paramName);
      } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
      }
  };