from django.db import models

# Create your models here.
class Folder(models.Model):
    folder_name = models.CharField(max_length=100)