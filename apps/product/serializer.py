from rest_framework import serializers
from .models import Product
from apps.product_category.serializer import CategoriesStoreSerializer



class ProductSerializer(serializers.ModelSerializer):
    category=CategoriesStoreSerializer()
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'category',
            'description',
            'photo',
            'slugProduct',
            'price',
            'compare_price',
            'views',
            'quantity',
            'sold',
            'date_created',
            'is_active',
            'get_thumbnail'
        ]