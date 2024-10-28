import express from 'express';
import cors from 'cors';
import { setupDatabase } from './database';
import { healthRouter } from './routes/health';
import { predictionRouter } from './routes/predictions';
import { userRouter } from './routes/users';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Initialize database
setupDatabase().catch(console.error);

// Routes
app.use('/api/health', healthRouter);
app.use('/api/predictions', predictionRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});