from django.conf.urls import url
from django.urls import include, path
from rest_framework import routers
from django.views.generic import TemplateView
from .views import TaskViewSet, PostsViewSet, ProblemsViewSet, CourseViewSet, AllProblemsViewSet
from . import views
 
app_name = "blog"

urlpatterns = [
    path('tasks/', TaskViewSet.as_view()),
    path('posts/', PostsViewSet.as_view()),
    url('problems/(?P<course_id>\d+)/$', ProblemsViewSet.as_view()),
    path('problems/all', AllProblemsViewSet.as_view()),
    path('problems/courses', CourseViewSet.as_view())
]