from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'description',
            'photo',
            'price',
            'compare_price',
            'quantity',
            'sold',
            'date_created',
            'is_active',
            'get_thumbnail'
        ]