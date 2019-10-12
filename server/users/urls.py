from django.conf.urls import url
from django.views.generic import TemplateView
from .views import authenticate_user
 
app_name = 'users'

urlpatterns = [
    url(r'^login/', authenticate_user),
]