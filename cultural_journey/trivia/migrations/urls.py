# trivia/urls.py

from .views import QuestionList, ProgressDetail, UserList, ResourceList

urlpatterns = [
    path('questions/', QuestionList.as_view(), name='question-list'),
    path('progress/<int:pk>/', ProgressDetail.as_view(), name='progress-detail'),
    path('users/', UserList.as_view(), name='user-list'),
    path('resources/', ResourceList.as_view(), name='resource-list'),
]
