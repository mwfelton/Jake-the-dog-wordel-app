import json
import os
from django.core.management.base import BaseCommand
from words.models import Word

class Command(BaseCommand):
    help = 'Import words from JSON file into Word model'

    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str, help='Path to the JSON file')

    def handle(self, *args, **kwargs):
        file_path = kwargs['json_file']

        if not os.path.exists(file_path):
            self.stdout.write(self.style.ERROR(f"File not found: {file_path}"))
            return

        with open(file_path, 'r') as file:
            data = json.load(file)

        Word.objects.bulk_create([Word(word=item['word'], definition=item['definition']) for item in data])
        self.stdout.write(self.style.SUCCESS(f"Successfully imported {len(data)} words."))


 # words/import_words.py
# import json
# from words.models import Word
# from django.conf import settings  # No need to use setup_environ

# input_file = "clean_five_letter_words.json"  


# def bulk_insert_words(input_file):
#     with open(input_file, 'r') as file:
#         data = json.load(file)
#         print(data)
#     word_objects = [Word(word=item['word'], definition=item['definition']) for item in data]
    
#     Word.objects.bulk_create(word_objects)  # Bulk insert into the database

# # Call the function
# # print(f'{len(words)} words imported successfully.')

# # Call the import function
# bulk_insert_words(input_file)