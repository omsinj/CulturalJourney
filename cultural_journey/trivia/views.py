from django.shortcuts import render

# trivia/views.py

from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Question, Progress, Resource
from .serializers import QuestionSerializer, ProgressSerializer, UserSerializer, ResourceSerializer
from .recommendation import recommend_questions

class QuestionList(generics.ListCreateAPIView):
    serializer_class = QuestionSerializer

    def get_queryset(self):
        user = self.request.user
        return recommend_questions(user)

    def create(self, request, *args, **kwargs):
        user = request.user
        questions = recommend_questions(user)
        return Response(QuestionSerializer(questions, many=True).data)

class ProgressDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.correct_answers += 1
        if instance.correct_answers >= LEVEL_QUESTIONS_COUNT[instance.current_level]:
            instance.correct_answers = 0
            next_level_index = LEVELS.index(instance.current_level) + 1
            if next_level_index < len(LEVELS):
                instance.current_level = LEVELS[next_level_index]
        instance.save()
        return Response(ProgressSerializer(instance).data)
