from urllib import response

from django.shortcuts import render
# from rest_framework.response import Response
# Create your views here.
from rest_framework import viewsets
from .models import Order
from .serializers import OrderSerializer
class OrderViewSet(viewsets.ModelViewSet):
    queryset=Order.objects.all()
    serializer_class=OrderSerializer

