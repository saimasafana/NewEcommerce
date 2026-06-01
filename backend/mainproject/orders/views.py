from urllib import response

from django.shortcuts import render
from rest_framework.response import Response
# Create your views here.
from rest_framework import viewsets
from .models import Order
from .serializers import OrderSerializer
class OrderViewSet(viewsets.ModelViewSet):
    queryset=Order.objects.all()
    serializer_class=OrderSerializer

# def create (self,request,*args,**kwargs):
#     serializer=OrderSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data)
#     print(serializer.errors)
#     return Response(serializer.errors,status=400)