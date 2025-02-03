from django.shortcuts import render

from django.http import JsonResponse
from .models import Word
import random

def random_word(request):
    # Get a random word from the database
    word = Word.objects.order_by('?').first()  # 'first()' gets the first item from the random order
    return JsonResponse({'word': word.word})
