Plan
1. Concept and Objectives
Platform Name: Cultural Journey
Main Features:
Trivia-based game that takes users on a cultural journey.
Resource page with cultural videos and links.
User progression from novice to expert in four fields: BOLD, VETS, WOTM, and PRIDE.
Reward system for correct answers.
Machine learning to personalize questions and track user progress.
2. User Journey
User Registration/Login:
Users create an account or log in.
Profile setup with preferences for personalized questions.
Trivia Game:
Users enter a virtual room representing one of the four fields.
A series of questions are presented at each stage.
Correct answers earn rewards and progression to the next level.
Resource Page:
Access to cultural videos and links related to the four fields.
User Profile and Progress Tracking:
Users can view their progress, rewards, and achievements.
3. Technology Stack
Frontend: React.js for a dynamic and responsive UI.
Backend: Django or Flask for the server-side application.
Database: PostgreSQL for storing user data, questions, and progress.
Machine Learning: Scikit-learn or TensorFlow for personalizing questions and tracking progress.
APIs: Integration with third-party video and content providers for the resource page.
Detailed Design
1. Database Schema
Users Table:
user_id
username
email
password
preferences
current_level
rewards
Questions Table:
question_id
field
difficulty_level
question_text
correct_answer
wrong_answers
Progress Table:
progress_id
user_id
field
current_stage
correct_answers
Resources Table:
resource_id
field
resource_type (video/link)
url
description
2. Machine Learning Model
Purpose: Personalize questions based on user performance and preferences.
Inputs:
User preferences.
User progress and performance data.
Outputs:
Next set of questions to be presented.
Algorithm: Collaborative filtering or content-based filtering to recommend questions.
3. User Interface Design
Home Page:
Overview of the platform.
Registration/Login buttons.
User Dashboard:
Overview of user progress and rewards.
Links to trivia game and resources page.
Trivia Game Interface:
Question display area.
Answer options.
Progress bar indicating current stage.
Resources Page:
Categorized cultural videos and links.
