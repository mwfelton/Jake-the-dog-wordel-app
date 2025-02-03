from django.urls import path
from .views import random_word
from django.urls import include, path

urlpatterns = [
    path('random/', random_word, name='random_word'),
]
