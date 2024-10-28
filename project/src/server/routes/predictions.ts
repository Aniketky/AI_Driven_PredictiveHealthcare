import { Router } from 'express';
import { getDb } from '../database';
import { predictHealth } from '../ml/healthPredictor';
import { z } from 'zod';

const router = Router();

const PredictionRequestSchema = z.object({
  userId: z.string(),
  healthData: z.object({
    vitals: z.object({
      heartRate: z.number(),
      bloodPressure: z.object({
        systolic: z.number(),
        diastolic: z.number()
      }),
      temperature: z.number()
    }),
    symptoms: z.array(z.string()),
    environmentalFactors: z.object({
      airQuality: z.number(),
      temperature: z.number(),
      humidity: z.number()
    })
  })
});

router.post('/analyze', async (req, res) => {
  try {
    const { userId, healthData } = PredictionRequestSchema.parse(req.body);
    
    const prediction = await predictHealth(healthData);
    const db = await getDb();
    
    await db.run(
      'INSERT INTO predictions (id, user_id, prediction_data) VALUES (?, ?, ?)',
      [crypto.randomUUID(), userId, JSON.stringify(prediction)]
    );

    res.json(prediction);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request data' });
  }
});

router.get('/history/:userId', async (req, res) => {
  const db = await getDb();
  const predictions = await db.all(
    'SELECT * FROM predictions WHERE user_id = ? ORDER BY timestamp DESC',
    [req.params.userId]
  );
  
  res.json(predictions.map(pred => ({
    ...pred,
    prediction_data: JSON.parse(pred.prediction_data)
  })));
});

export const predictionRouter = router;