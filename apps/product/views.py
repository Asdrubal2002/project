from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializer import ProductSerializer
from .models import Product
from apps.store.models import Store
from apps.product_category.models import Category
from django.http import JsonResponse


from django.db.models import Q
from django.shortcuts import render, get_object_or_404
from apps.store.pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination
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

        print(products)

        paginator = LargeSetPagination()
        results = paginator.paginate_queryset(products, request)
        products_serialized = ProductSerializer(results, many=True)

        # Devolver la lista de productos serializados
        return paginator.get_paginated_response({'products': products_serialized.data})



class ProductsByStore(APIView):
    def get(self, request, storeSlug, format=None):
        store = get_object_or_404(Store, slug=storeSlug)

        # Obtener todas las categorías de esa tienda
        categories = Category.objects.filter(store=store)

        # Obtener todos los productos que pertenecen a esas categorías
        products = Product.objects.filter(category__in=categories, is_active=True).order_by('date_created')
        # Serializar los productos

        paginator = LargeSetPagination()
        results = paginator.paginate_queryset(products, request)
        products_serialized = ProductSerializer(results, many=True)

        # Devolver la lista de productos serializados
        return paginator.get_paginated_response({'products': products_serialized.data})



class SearchProductInView(APIView):
    def get(self, request, format=None):
            print("LLega")
            slugCategory = request.query_params.get('c')
            storeSlug = request.query_params.get('s')
            content = request.query_params.get('b')

            store = get_object_or_404(Store, slug=storeSlug)

            print(store)

            category = get_object_or_404(Category, store=store, slug=slugCategory)

            print(category)

            products = Product.objects.filter(category=category, name__icontains=content) | Product.objects.filter(category=category, description__icontains=content)

            print(products)

            if products.exists():
                # Aquí deberías serializar los productos encontrados
                products_serialized = [product.name for product in products]  # Ejemplo simple de serialización
                return Response({'products': products_serialized})
            else:
                return Response({'error': 'No se encontraron productos que coincidan con la búsqueda'}, status=status.HTTP_404_NOT_FOUND)





            return Response({'products':"Success"}, status=status.HTTP_200_OK)




        
        
        


    
