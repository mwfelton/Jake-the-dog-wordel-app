from django.db import models

class Word(models.Model):
    word = models.CharField(max_length=100, unique=True)
    definition = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.word
