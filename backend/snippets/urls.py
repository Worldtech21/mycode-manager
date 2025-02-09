from django.urls import path
from .views import SnippetListCreate

urlpatterns = [
    path('snippets/', SnippetListCreate.as_view(), name='snippet-list'),
]
