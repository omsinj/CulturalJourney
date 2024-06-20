from django.shortcuts import render

# trivia/views.py

from rest_framework import generics
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

class ProgressDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ResourceList(generics.ListCreateAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

