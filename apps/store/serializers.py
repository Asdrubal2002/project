from rest_framework import serializers
from .models import Store
from apps.store_category.serializers import CategorySerializer


class StoreSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta:
        model = Store
        fields = [
            'administrator',
            'name',
            'category',
            'description',
            'location',
            'phone',
            'email',
            'logo',
            'banner',
            'schedule',
            'delivery',
            'nit',
            'verified',
            'is_active',
            'created_on',
            'url_pay',
            'account_pay',
            'slug',
            'likes',
            'dislikes',
        ]
        
