from django.db import models

class Word(models.Model):
    text = models.CharField(max_length=5, unique=True)  # A 5-letter word

    def __str__(self):
        return self.text
