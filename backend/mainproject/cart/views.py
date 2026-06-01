from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import CartItem
from .serializers import CartSerializer
class CartViewSet(viewsets.ModelViewSet):
    queryset=CartItem.objects.all()
    serializer_class=CartSerializer