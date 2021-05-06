from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from .serializers import PDFSerializer, UserSerializer, CompanySerializer, QuestionSerializer, AskSerializer
from .models import PDF, Company, Ask, Question
from rest_framework.permissions import AllowAny

# Create your views here.

class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = (AllowAny,)

class PDFViewSet(viewsets.ModelViewSet):
    queryset = PDF.objects.all()
    serializer_class = PDFSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = (AllowAny,)

class AskViewSet(viewsets.ModelViewSet):
    queryset = Ask.objects.all()
    serializer_class = AskSerializer

