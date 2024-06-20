# trivia/recommendation.py

import random
from .models import Question, Progress

LEVEL_QUESTIONS_COUNT = {
    'novice': 10,
    'beginner': 15,
    'intermediate': 20,
    'expert': 25,
    'advanced': 30,
}

def recommend_questions(user):
    progress = Progress.objects.get(user=user)
    current_field = progress.field
    current_level = progress.current_level
    num_questions = LEVEL_QUESTIONS_COUNT[current_level]

    questions = Question.objects.filter(field=current_field, difficulty_level__lte=progress.current_stage)
    recommended_questions = random.sample(list(questions), min(len(questions), num_questions))
    return recommended_questions
