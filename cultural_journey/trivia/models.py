from django.db import models

# trivia/models.py

from django.contrib.auth.models import User
from django.db import models

class Question(models.Model):
    FIELD_CHOICES = [
        ('BOLD', 'BOLD'),
        ('VETS', 'VETS'),
        ('WOTM', 'WOTM'),
        ('PRIDE', 'PRIDE'),
    ]

    field = models.CharField(max_length=10, choices=FIELD_CHOICES)
    difficulty_level = models.IntegerField()
    question_text = models.TextField()
    correct_answer = models.CharField(max_length=255)
    wrong_answers = models.JSONField()

    def __str__(self):
        return self.question_text

class Progress(models.Model):
    LEVEL_CHOICES = [
        ('novice', 'Novice'),
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('expert', 'Expert'),
        ('advanced', 'Advanced'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    field = models.CharField(max_length=10, choices=Question.FIELD_CHOICES)
    current_level = models.CharField(max_length=20, choices=LEVEL_CHOICES, default='novice')
    current_stage = models.IntegerField(default=0)
    correct_answers = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username} - {self.field} - {self.current_level}"

