import express from 'express';
import { createApt, getapt } from '../controllers/aptController.js';


const router = express.Router();

router.get('/create',createApt );
router.get('/',getapt );


export default router;