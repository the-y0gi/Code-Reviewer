import express from 'express';
import { getReview } from '../controllers/ai.controller.js'; // Add .js extension for ESM

const router = express.Router();

router.post('/get-review', getReview);

export default router; // Use `export default` instead of `module.exports`