from django.db import models


class Course (models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=400)

    class Meta:
        db_table = 'courses'
