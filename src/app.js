import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import aiRoutes from './routes/ai.routes.js';

const app = express();

// Resolve __dirname in ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve frontend build
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);

// Handle React Routing (for SPA apps)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Export app
export default app;