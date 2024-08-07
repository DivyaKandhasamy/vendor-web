import express from 'express';
import { getVendors, createVendors, getVendorsLatest } from '../controllers/vendorController.js';

const router = express.Router();

router.get('/', getVendors);

router.get('/create', createVendors);

router.get('/vendorlatest', getVendorsLatest);

export default router;
