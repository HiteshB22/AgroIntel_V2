import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';

import healthRoutes from './routes/health.routes.js';
import { logger } from './middleware/logger.midldeware.js';
import { errorhandler } from './middleware/error.middleware.js';
import authRoutes from './routes/auth.routes.js';
import reportRoutes from './routes/report.routes.js';
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(logger);

app.use('/uploads', express.static('uploads'));

app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/report', reportRoutes);
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use(errorhandler);

export default app ;