from django.db import models

# Create your models here.
from products.models import Product
class Wishlist(models.Model):
    product=models.ForeignKey(Product,on_delete=models.CASCADE)