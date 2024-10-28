import { Router } from 'express';
import { getDb } from '../database';
import { z } from 'zod';

const router = Router();

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  healthData: z.object({
    age: z.number(),
    gender: z.string(),
    medicalHistory: z.array(z.string()),
    medications: z.array(z.string())
  })
});

router.post('/register', async (req, res) => {
  try {
    const userData = UserSchema.parse(req.body);
    const db = await getDb();
    
    await db.run(
      'INSERT INTO users (id, name, email, health_data) VALUES (?, ?, ?, ?)',
      [
        crypto.randomUUID(),
        userData.name,
        userData.email,
        JSON.stringify(userData.healthData)
      ]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid user data' });
  }
});

router.get('/:userId', async (req, res) => {
  const db = await getDb();
  const user = await db.get('SELECT * FROM users WHERE id = ?', [req.params.userId]);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({
    ...user,
    health_data: JSON.parse(user.health_data)
  });
});

export const userRouter = router;