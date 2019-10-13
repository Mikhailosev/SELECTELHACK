from django.conf.urls import url
from django.urls import include, path
from django.views.generic import TemplateView
from .views import authenticate_user, UserInfoViewSet
 
app_name = 'users'

urlpatterns = [
    url(r'^login/', authenticate_user),
    path('user_info/', UserInfoViewSet.as_view()),
]