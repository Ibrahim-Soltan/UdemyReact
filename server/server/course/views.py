from ctypes import util
import json
import re
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
    for course in courses:
        if (course["id"] == id):
            return course
    return None


def add_course(course, id=None):
    if (id == None):
        course["id"] = str(uuid.uuid4())
    courses = retrieve_all_courses()
    courses.append(course)
    update_json(courses)


def delete_course(course):
    courses = retrieve_all_courses()
    courses.remove(course)
    update_json(courses)


def delete_course_by_id(id):
    course = search_course_by_id(id)
    if (course == None):
        return course
    delete_course()
    return course


class Course(View):
    def get(self, request, id):
        if (id == "all"):
            return JsonResponse(data={"courses": retrieve_all_courses()})
        course = search_course_by_id(id)
        if (course == None):
            return JsonResponse(data={})

        return JsonResponse(data=course)

    def post(self, request, id):
        add_course(json.loads(request.body))
        return JsonResponse(data=json.loads(request.body))

    def put(self, request):
        return JsonResponse(data={'action': 'put req received'})

    def delete(self, request, id):
        delete_course_by_id(id)
        return JsonResponse(data={'action': 'delete req received'})
