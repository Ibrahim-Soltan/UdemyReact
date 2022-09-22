from ctypes import util
import json
import re
from telnetlib import STATUS
from textwrap import indent
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse


# Create your views here.


import json
import uuid


def retrieve_all_courses(filename='C:/Users/pc/OneDrive/Desktop/Summer 2022\/bld/Web Dev/Tasks/udemy-react/server/server/course/db.json'):
    with open(filename) as f:
        data = json.load(f)
        courses = data["courses"]
        return courses


def update_json(data, filename='C:/Users/pc/OneDrive/Desktop/Summer 2022\/bld/Web Dev/Tasks/udemy-react/server/server/course/db.json'):
    data = {"courses": data}
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)


def search_course_by_id(id):
    courses = retrieve_all_courses()
    return courses.get(id)


def add_course(course, id=None):
    courses = retrieve_all_courses()
    if (id == None):
        id = str(uuid.uuid4())
    elif (courses.get(id) == None):
        return False
    courses[id] = course
    update_json(courses)
    return True


def delete_course_by_id(id):
    courses = retrieve_all_courses()
    if (courses.get(id) == None):
        return False
    courses.pop(id)
    update_json(courses)


class Course(View):
    def get(self, request, id):
        if (id == "all"):
            return JsonResponse(data={"courses": retrieve_all_courses()})
        course = search_course_by_id(id)
        if (course == None):
            return JsonResponse(data={}, status=404)

        return JsonResponse(data=course, status=200)

    def post(self, request, id):
        add_course(json.loads(request.body))
        return JsonResponse(data={}, status=201)

    def put(self, request, id):
        flag = add_course(json.loads(request.body), id=id)
        if (flag):
            return JsonResponse(data={}, status=202)
        else:
            return JsonResponse(data={}, status=404)

    def delete(self, request, id):
        flag = delete_course_by_id(id)
        if (flag):
            return JsonResponse(data={}, status=202)
        else:
            return JsonResponse(data={}, status=404)
