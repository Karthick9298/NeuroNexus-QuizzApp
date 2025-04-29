const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/quiz-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  
app.use('/api/quizzes', quizRoutes);

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Optional fallback to index.html for unknown routes
app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
