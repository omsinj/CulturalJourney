// src/components/TriviaGame.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LEVELS = ['novice', 'beginner', 'intermediate', 'expert', 'advanced'];

function TriviaGame() {
  const { field } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [level, setLevel] = useState('novice');
  const [feedback, setFeedback] = useState('');
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/questions/', {
          params: { field, level },
          headers: { Authorization: `Token ${user.token}` },
        });
        setQuestions(response.data);
      } catch (error) {
        console.error('There was an error fetching the questions!', error);
      }
    };
    fetchQuestions();
  }, [field, level, user]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct_answer) {
      setFeedback('Correct!');
      // Update progress logic here
    } else {
      setFeedback('Incorrect!');
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

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Trivia Game - {field} ({level})</h2>
      <div>
        <h3>{questions[currentQuestion].question_text}</h3>
        {questions[currentQuestion].wrong_answers.concat(questions[currentQuestion].correct_answer).map((answer, index) => (
          <button key={index} onClick={() => handleAnswerSelect(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <button onClick={handleNextQuestion}>Next</button>
      {feedback && <p>{feedback}</p>}
      <div>Question {currentQuestion + 1} of {questions.length}</div>
      <progress value={currentQuestion + 1} max={questions.length}></progress>
    </div>
  );
}

export default TriviaGame;


