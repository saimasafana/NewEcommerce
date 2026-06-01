from django.shortcuts import render
from .models import Wishlist
# Create your views here.
from rest_framework import viewsets
from .serializers import WishlistSerializer
class WishlistViewSet(viewsets.ModelViewSet):
    queryset=Wishlist.objects.all()
    serializer_class=WishlistSerializer
