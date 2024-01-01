from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializer import ProductSerializer
from .models import Product
from apps.store.models import Store
from apps.product_category.models import Category

from django.db.models import Q
from django.shortcuts import render, get_object_or_404
from apps.store.pagination import SmallSetPagination
from django.db.models import Prefetch

# Create your views here.

class ListProductsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self, request, storeSlug, categorySlug, format=None):
        # Obtener la tienda o devolver un 404 si no se encuentra
        store = get_object_or_404(Store, slug=storeSlug)

        # Obtener la categoría o devolver un 404 si no se encuentra
        category = get_object_or_404(Category, store=store, slug=categorySlug)

        # Filtrar los productos por categoría y por si están activos
        products = Product.objects.filter(category=category, is_active=True)

        # Crear una lista de productos con los detalles que necesitas
        products_list = [{
            'name': product.name,
            'description': product.description,
            'price': product.price,
            'photo': product.photo.url if product.photo else None,
            # Añade más campos si es necesario
        } for product in products]

        return Response({'products': products_list})


class ProductsByStore(APIView):
    def get(self, request, storeSlug, format=None):
        store = get_object_or_404(Store, slug=storeSlug)

        # Obtener todas las categorías de esa tienda
        categories = Category.objects.filter(store=store)

        # Obtener todos los productos que pertenecen a esas categorías
        products = Product.objects.filter(category__in=categories, is_active=True)
        # Serializar los productos
        products_serialized = ProductSerializer(products, many=True)

        # Devolver la lista de productos serializados
        return Response({'products': products_serialized.data}, status=status.HTTP_200_OK)


       
        
        
        
        


    