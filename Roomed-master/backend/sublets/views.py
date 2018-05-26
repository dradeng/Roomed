from django.shortcuts import render

from rest_framework import generics

from . import models
from . import serializers


class ListSublet(generics.ListCreateAPIView):
    queryset = models.sublet.objects.all()
    serializer_class = serializers.subletSerializer


class DetailSublet(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.sublet.objects.all()
    serializer_class = serializers.subletSerializer