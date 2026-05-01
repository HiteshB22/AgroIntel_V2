import express from 'express';

import { uploadReport } from '../controllers/report.controller.js';
import { upload } from '../middleware/upload.middleware.js';
import {protect} from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/upload', protect, upload.single('file'), uploadReport);

export default router;

