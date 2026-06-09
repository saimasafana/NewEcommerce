from rest_framework import serializers
from .models import Product,Category
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category;
        fields='__all__'
        
class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image.url)