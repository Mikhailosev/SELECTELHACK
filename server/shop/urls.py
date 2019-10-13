from django.conf.urls import url
from django.urls import include, path
from rest_framework import routers
from django.views.generic import TemplateView
from .views import ProductsViewSet
from . import views
 
app_name = "blog"

urlpatterns = [
    path('all', ProductsViewSet.as_view()),
]