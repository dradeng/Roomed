from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListSublet.as_view()),
    path('<int:pk>/', views.DetailSublet.as_view()),
]