from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from .models import Task, Post, Problem, Course
from .serializes import TaskSerializer, PostSerializer, ProblemSerializer, CourseSerializer
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

class AllProblemsViewSet(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        queryset = Problem.objects.all()
        serializer = ProblemSerializer(queryset, many=True)
        return Response({"Problems": serializer.data})

class ProblemsViewSet(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, course_id):
        queryset = Problem.objects.filter(course=course_id)
        serializer = ProblemSerializer(queryset, many=True)
        return Response({'Problems' : serializer.data})

class CourseViewSet(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        queryset = Course.objects.all()
        serializer = CourseSerializer(queryset, many=True)
        return Response({"Topics": serializer.data})