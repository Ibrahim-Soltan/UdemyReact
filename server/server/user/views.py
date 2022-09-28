import imp
import re
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import User as UserModel
from .forms import User as UserForm
from django.core import serializers
import json


class User(View):

    def not_found(self):
        return JsonResponse(data={}, status=404)

    def user_to_dict(self, user):
        dict = user.__dict__
        dict.pop("_state")
        return dict

    def retrieve_single_user(self, id):
        user = UserModel.objects.get(id=id)
        dict = self.user_to_dict(user)
        return JsonResponse(data=dict, status=200)

    def get_single_user(self, id):
        try:
            return self.retrieve_single_user(id)
        except:
            return self.not_found()

    def retrieve_all_users(self):
        users = UserModel.objects.all()
        dicts = list(map(self.user_to_dict, users))
        return dicts

    def get_all_users(self):
        dicts = self.retrieve_all_users()
        return JsonResponse(data={"users": dicts}, status=200)

    def create_user(self, f):
        if (f.is_valid()):
            try:
                f.create()
                return JsonResponse(data={"message": "done"}, status=201)
            except:
                return JsonResponse(data={}, status=404)
        else:
            return JsonResponse(data=json.loads(f.errors.as_json()), status=406)

    def update_user(self, f, id):
        if (f.is_valid()):
            try:
                f.update(id)
                return JsonResponse(data={"message": "done"}, status=202)
            except:
                return JsonResponse(data={}, status=404)
        else:
            return JsonResponse(data=json.loads(f.errors.as_json()), status=406)

    def remove_user(self, id):
        try:
            course = UserModel.objects.get(id=id)
            course.delete()
            return JsonResponse(data={"message": "done"}, status=202)
        except:
            return self.not_found()

    def age_query(self, age):
        users = UserModel.older_than(age)
        dicts = list(map(self.user_to_dict, users))
        return dicts

    def get_age_query(self, age):
        dicts = self.age_query(age)
        return JsonResponse(data={"users": dicts}, status=200)

    def get(self, request, *args, **kwargs):
        age = request.GET.get('age')
        if (age != None):
            return self.get_age_query(age)
        if (kwargs.get('id') == None):
            return self.get_all_users()
        return self.get_single_user(kwargs['id'])

    def post(self, request, *args, **kwargs):
        f = UserForm(json.loads(request.body))
        return self.create_user(f)

    def put(self, request, *args, **kwargs):
        if (kwargs.get("id") == None):
            return self.not_found()
        f = UserForm(json.loads(request.body))
        return self.update_user(f, kwargs['id'])

    def delete(self, request, *args, **kwargs):
        if (kwargs.get("id") == None):
            return self.not_found()
        return self.remove_user(kwargs["id"])
