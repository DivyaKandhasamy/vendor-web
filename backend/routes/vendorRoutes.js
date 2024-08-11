import express from 'express';
import { getVendors, createVendors, getVendorsLatest, createVendorDetails, getVendorDetails, getVendorDetailsById } from '../controllers/vendorController.js';

const router = express.Router();

router.get('/', getVendors);

router.get('/create', createVendors);

router.get('/vendorlatest', getVendorsLatest);

router.get('/createvendordetail',createVendorDetails)

router.get('/vendordetails', getVendorDetails);

router.get('/vendordetails/:id', getVendorDetailsById)

export default router;
