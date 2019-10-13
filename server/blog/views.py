from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from .models import Task, Post, Problem
from .serializes import TaskSerializer, PostSerializer, ProblemSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

class TaskViewSet(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        queryset = Task.objects.all()
        serializer = TaskSerializer(queryset, many=True)
        return Response({"Tasks": serializer.data})

class PostsViewSet(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        queryset = Post.objects.all()
        serializer = PostSerializer(queryset, many=True)
        return Response({"Posts": serializer.data})

class ProblemsViewSet(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        topic = request.GET.get('topic', False)
        if not topic:
            queryset = Problem.objects.all()
            serializer = ProblemSerializer(queryset, many=True)
            return Response({"Problems": serializer.data})
        else:
            queryset = Problem.objects.filter(topic=topic)
            serializer = ProblemSerializer(queryset, many=True)
            return Response({'Problems' : serializer.data})

class TopicsViewSet(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        queryset = Problem.objects.values('topic').distinct()
        return Response({"Topics": queryset})