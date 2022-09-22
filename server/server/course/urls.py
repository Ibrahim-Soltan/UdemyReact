from django.urls import path
from .views import Course

# TODO: add anohter path with no ID.
urlpatterns = [
    path('', Course.as_view()),
    path('<str:id>', Course.as_view())
]
