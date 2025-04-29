const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Get all quizzes
router.get('/', async (req, res) => {
  const quizzes = await Quiz.find({}, 'title');
  if(quizzes){
    res.json(quizzes);
  }
 else{
        res.status(404).json({ error: 'No quizzes found' });
    }

});

// Get quiz by ID
// router.get('/:id', async (req, res) => {
//   const quiz = await Quiz.findById(req.params.id);
//   res.json(quiz);
// });

// Create a quiz
router.post('/', async (req, res) => {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.status(201).json(newQuiz);
  });
  

router.get('/:id', async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id);
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      res.json(quiz);
    } catch (err) {
      res.status(400).json({ error: 'Invalid ID format' });
    }
  });



module.exports = router;
