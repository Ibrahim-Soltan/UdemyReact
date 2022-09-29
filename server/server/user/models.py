import re
from django.db import models
from datetime import date


def calculate_age(born):
    today = date.today()
    return today.year - born.year - ((today.month, today.day) < (born.month, born.day))


class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    dob = models.DateField()
    email = models.EmailField()
    password = models.CharField(max_length=100)

    @property
    def name(self):
        return "{} {}".format(self.first_name, self.last_name)

    @property
    def age(self):
        return calculate_age(self.dob)

    def __str__(self):
        return self.name

    @classmethod
    def older_than(cls, age):
        all_users = User.objects.all()
        users = []
        for user in all_users:
            if (int(user.age) > int(age)):
                users.append(user)
        return users

    class Meta:
        db_table = 'users'
        ordering = ["first_name", "last_name", "-dob"]
