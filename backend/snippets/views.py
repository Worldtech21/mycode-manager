from rest_framework import generics
from .models import Snippet
from .serializers import SnippetSerializer

class SnippetListCreate(generics.ListCreateAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
