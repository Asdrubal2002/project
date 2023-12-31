from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializer import ProductSerializer
from .models import Product
from apps.store.models import Store
from django.db.models import Q
from django.shortcuts import render, get_object_or_404
from apps.store.pagination import SmallSetPagination


# Create your views here.

class ListProductsView(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self, request, storeSlug, format=None):
        try:
            store = get_object_or_404(Store, slug=storeSlug)
        except:
            return Response(
                {'error': 'Store slug No existe dentro de ruvlo'},
                status=status.HTTP_404_NOT_FOUND)
        
        products = Product.objects.filter(store=store)

        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(products, request)
        serializer = ProductSerializer(results, many=True)

        return paginator.get_paginated_response({'products': serializer.data})
        
        
        
        
        


    