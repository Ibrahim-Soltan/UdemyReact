from django.urls import path
from .views import Course

urlpatterns = [
    path('<str:id>', Course.as_view())
]
