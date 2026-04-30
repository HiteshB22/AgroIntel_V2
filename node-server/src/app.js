import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes.js';
import { logger } from './middleware/logger.midldeware.js';
import { errorhandler } from './middleware/error.middleware.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api/health', healthRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use(errorhandler);

export default app ;