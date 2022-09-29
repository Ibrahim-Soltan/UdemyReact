from django.urls import path
from .views import User


urlpatterns = [
    path('', User.as_view()),
    path('<int:id>', User.as_view())
]
