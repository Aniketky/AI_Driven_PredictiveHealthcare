import { Router } from 'express';
import { getDb } from '../database';
import { z } from 'zod';

const router = Router();

const HealthDataSchema = z.object({
  userId: z.string(),
  data: z.object({
    vitals: z.object({
      heartRate: z.number(),
      bloodPressure: z.object({
        systolic: z.number(),
        diastolic: z.number()
      }),
      temperature: z.number()
    }),
    symptoms: z.array(z.string()),
    timestamp: z.string()
  })
});

router.post('/record', async (req, res) => {
  try {
    const { userId, data } = HealthDataSchema.parse(req.body);
    const db = await getDb();
    
    await db.run(
      'INSERT INTO health_records (id, user_id, data) VALUES (?, ?, ?)',
      [crypto.randomUUID(), userId, JSON.stringify(data)]
    );

    res.status(201).json({ message: 'Health record created' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data format' });
  }
});

router.get('/records/:userId', async (req, res) => {
  const db = await getDb();
  const records = await db.all(
    'SELECT * FROM health_records WHERE user_id = ? ORDER BY timestamp DESC',
    [req.params.userId]
  );
  
  res.json(records.map(record => ({
    ...record,
    data: JSON.parse(record.data)
  })));
});

export const healthRouter = router;