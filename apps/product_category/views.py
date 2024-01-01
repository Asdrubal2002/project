from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializer import CategoriesStoreSerializer
from .models import Category
from apps.store.models import Store
from django.db.models import Q
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist



# Create your views here.

class ListCategoriesStoreView(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self, request, storeSlug, format=None):
        try:
            # Obtener la tienda por slug
            store = Store.objects.get(slug=storeSlug)

            # Obtener todas las categorías de esa tienda
            categories = Category.objects.filter(store=store)

            # Crear una lista con los datos de las categorías
            categories_data = [{'id': category.id, 'name': category.name, 'slug': category.slug} for category in categories]

            # Devolver la lista de categorías como JSON
            return JsonResponse({'categories': categories_data})

        except ObjectDoesNotExist:
            # Manejar el caso en que la tienda no exista
            return JsonResponse({'error': 'Store not found'}, status=404)

# Asegúrate de importar tus modelos Store y Category