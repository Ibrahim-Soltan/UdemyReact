from django import forms
from django.core.exceptions import ValidationError
from .models import User as UserModel


class User(forms.Form):
    first_name = forms.CharField(min_length=3, max_length=30)
    last_name = forms.CharField(min_length=3, max_length=30)
    dob = forms.DateField()
    email = forms.EmailField()
    password = forms.CharField()

    def create(self):
        UserModel.objects.create(**self.cleaned_data)

    def update(self, id):
        UserModel.objects.get(id=id)  # To raise exception if user doesnt exist
        UserModel.objects.filter(id=id).update(**self.cleaned_data)
