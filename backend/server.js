import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

// Security Middleware
app.use(helmet()); // Set security HTTP headers
app.use(cors()); // Enable CORS for all origins in development
app.use(express.json({ limit: '10kb' })); // Body parser, reading data from body into req.body

// Rate Limiting
const limiter = rateLimit({
  max: 100, // Limit each IP to 100 requests per windowMs
  windowMs: 60 * 60 * 1000, // 1 hour
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// Database Connection
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/myproject_db';

mongoose.connect(DB_URI)
  .then(() => {
    console.log('Connected to MongoDB securely');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
