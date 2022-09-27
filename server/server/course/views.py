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


def course_to_json(course):
    coursedict = course.__dict__
    coursedict.pop("_state")
    return (coursedict)


def retrieve_all_courses():
    return map(course_to_json, CourseModel.objects.all())


def search_course_by_id(id):
    try:
        course = CourseModel.objects.get(id=id)
        return course_to_json(course)
    except:
        return None


def add_course(courseinfo):
    CourseModel.objects.create(title=courseinfo['title'],
                               description=courseinfo['description'], id=uuid.uuid4())


def not_found():
    return JsonResponse(data={}, status=404)


def course_is_valid(data):
    f = CourseForm(data)
    if f.is_valid():
        return True
    else:
        return f.errors.as_json()


def change_course_data(course, data):
    course.title = data['title']
    course.description = data['description']
    course.save()


def update_course(id, data):
    try:
        course = CourseModel.objects.get(id=id)
        change_course_data(course, data)
        return JsonResponse(data={"message": "done"}, status=202)
    except:
        return not_found()


def remove_course(id):
    try:
        course = CourseModel.objects.get(id=id)
        course.delete()
        return JsonResponse(data={"message": "done"}, status=202)
    except:
        return not_found()


class Course(View):

    def get_single_course(self, id):
        course = search_course_by_id(id)
        if (course == None):
            return not_found()
        return JsonResponse(data=course, status=200)

    def get(self, request, *args, **kwargs):
        if (kwargs.get('id') == None):
            return JsonResponse(data={"courses": list(retrieve_all_courses())}, status=200)
        return self.get_single_course(kwargs["id"])

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        validation = course_is_valid(data)
        if (validation == True):
            add_course(data)
            return JsonResponse(data={"message": "done"}, status=201)
        else:
            return JsonResponse(data=json.loads(validation), status=406)

    def put(self, request, *args, **kwargs):
        if (kwargs.get("id") == None):
            return not_found()
        data = json.loads(request.body)
        validation = course_is_valid(data)
        if (validation == True):
            return update_course(kwargs['id'], data)
        else:
            return JsonResponse(data=json.loads(validation), status=406)

    def delete(self, request, *args, **kwargs):
        if (kwargs.get("id") == None):
            return not_found()
        return remove_course(kwargs['id'])
