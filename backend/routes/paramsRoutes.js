import express from 'express';
import { createParams, getAllParams, getParamsById } from '../controllers/paramsController.js';

const router = express.Router();

router.get('/', getAllParams);

router.get('/create', createParams);

router.get('/:id', getParamsById);

export default router;
