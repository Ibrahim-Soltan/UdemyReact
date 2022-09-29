from uuid import uuid4
from django import forms
from django.core.exceptions import ValidationError

from .models import Course as CourseModel
import uuid


def validate_description(desc):
    if (len(desc) < 15):
        raise ValidationError(
            "description length must be at least 15 characters", code="incorrect_length")
    elif (len(desc) > 400):
        raise ValidationError(
            "description length must be at most 400 characters", code="incorrect_length")
    else:
        return desc


class Course(forms.Form):
    title = forms.CharField(min_length=10, max_length=200)
    description = forms.CharField(validators=[validate_description])

    def create(self):
        CourseModel.objects.create(**self.cleaned_data, id=uuid.uuid4())

    def update(self, id):
        # To raise exception if course doesnt exist
        CourseModel.objects.get(id=id)
        CourseModel.objects.filter(id=id).update(**self.cleaned_data)
