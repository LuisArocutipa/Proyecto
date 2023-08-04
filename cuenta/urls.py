from django.urls import path
from rest_framework.generics import CreateAPIView
from .views import UserRegistrationView

urlpatterns = [
    path('user-registration/', UserRegistrationView.as_view(), name='user-registration'),
]