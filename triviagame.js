// src/components/TriviaGame.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LEVELS = ['novice', 'beginner', 'intermediate', 'expert', 'advanced'];

function TriviaGame() {
  const { field } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [level, setLevel] = useState('novice');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/questions/', { params: { field, level } });
        setQuestions(response.data);
      } catch (error) {
        console.error('There was an error fetching the questions!', error);
      }
    };
    fetchQuestions();
  }, [field, level]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct_answer) {
      alert('Correct!');
      // Update progress logic here
    } else {
      alert('Incorrect!');
    }
    setSelectedAnswer(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Level progression logic
      const nextLevelIndex = LEVELS.indexOf(level) + 1;
      if (nextLevelIndex < LEVELS.length) {
        setLevel(LEVELS[nextLevelIndex]);
        setCurrentQuestion(0);
      } else {
        alert('Congratulations! You have completed all levels.');
      }
    }
  };

