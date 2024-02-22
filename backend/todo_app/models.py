from django.db import models
from folder_app.models import Folder
# from django.core.validators import validators
# Create your models here.
class Todo(models.Model):
    PRIORITIES = [
        ('High', 'High'),
        ('Medium', 'Medium'),
        ('Low', 'Low'),
    ]
    title = models.CharField(max_length=100)
    priority = models.CharField(choices = PRIORITIES)
    description = models.TextField(max_length=255)
    folder = models.ForeignKey(Folder, on_delete=models.SET_NULL, null=True, blank=True)
