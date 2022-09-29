from enum import Flag
import json
import re
from telnetlib import STATUS
from textwrap import indent
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .forms import Course as CourseForm
from .models import Course as CourseModel

# Create your views here.


import json
import uuid


class Course(View):
    def not_found(self):
        return JsonResponse(data={}, status=404)

    def course_to_dict(self, course):
        dict = course.__dict__
        dict.pop("_state")
        return dict

    def retrieve_single_course(self, id):
        course = CourseModel.objects.get(id=id)
        dict = self.course_to_dict(course)
        return JsonResponse(data=dict, status=200)

    def get_single_course(self, id):
        try:
            return self.retrieve_single_course(id)
        except:
            return self.not_found()

    def retrieve_all_courses(self):
        courses = CourseModel.objects.all()
        dicts = list(map(self.course_to_dict, courses))
        return dicts

    def get_all_courses(self):
        dicts = self.retrieve_all_courses()
        return JsonResponse(data={"courses": dicts}, status=200)

    def create_course(self, f):
        if (f.is_valid()):
            try:
                f.create()
                return JsonResponse(data={"message": "done"}, status=201)
            except:
                return JsonResponse(data={}, status=404)
        else:
            return JsonResponse(data=json.loads(f.errors.as_json()), status=406)

    def update_course(self, f, id):
        if (f.is_valid()):
            try:
                f.update(id)
                return JsonResponse(data={"message": "done"}, status=202)
            except:
                return JsonResponse(data={}, status=404)
        else:
            return JsonResponse(data=json.loads(f.errors.as_json()), status=406)

    def remove_course(self, id):
        try:
            course = CourseModel.objects.get(id=id)
            course.delete()
            return JsonResponse(data={"message": "done"}, status=202)
        except:
            return self.not_found()

    def get(self, request, *args, **kwargs):
        if (kwargs.get('id') == None):
            return self.get_all_courses()
        return self.get_single_course(kwargs['id'])

    def post(self, request, *args, **kwargs):
        f = CourseForm(json.loads(request.body))
        return self.create_course(f)

    def put(self, request, *args, **kwargs):
        if (kwargs.get("id") == None):
            return self.not_found()
        f = CourseForm(json.loads(request.body))
        return self.update_course(f, kwargs['id'])

    def delete(self, request, *args, **kwargs):
        if (kwargs.get("id") == None):
            return self.not_found()
        return self.remove_course(kwargs["id"])
