from turtle import title
from django.db import models


class Course (models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=400)

    def __str__():
        return title

    class Meta:
        db_table = 'courses'
        ordering = ['title', 'description']
