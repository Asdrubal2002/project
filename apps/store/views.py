from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from django.db.models import Q


from apps.store.models import Store
from apps.store.serializers import StoreSerializer
from apps.store_category.models import Category

from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination


# Create your views here.

class StoreDetailview(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, storeSlug, format=None):
        try:
            store_id=storeSlug
        except:
            return Response(
                {'error': 'Store slug must be an integer'},
                status=status.HTTP_404_NOT_FOUND)
        
        if Store.objects.filter(slug=store_id).exists():
            store = Store.objects.get(slug=store_id)

            store = StoreSerializer(store)

            return Response({'store': store.data}, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Store with this slug does not exist'},
                status=status.HTTP_404_NOT_FOUND)
        
class ListStoresView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        sortBy = request.query_params.get('sortBy')

        
        if not (sortBy == 'name' or sortBy == 'location'):
            sortBy = '-likes'

        order = request.query_params.get('order')
        limit = request.query_params.get('limit')

        if not limit:
            limit = 6

        try:
            limit = int(limit)
        except:
            return Response(
                {'error': 'Limit must be an integer'},
                status=status.HTTP_404_NOT_FOUND)
        
        if limit <= 0:
            limit = 6
        
        if order == 'desc':
            sortBy = '-' + sortBy
            stores = Store.objects.order_by(sortBy).all()[:int(limit)]
        elif order == 'asc':
            stores = Store.objects.order_by(sortBy).all()[:int(limit)]
        else:
            stores = Store.objects.order_by(sortBy).all()

        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(stores, request)
        serializer = StoreSerializer(results, many=True)

        if stores:
            return paginator.get_paginated_response({'stores': serializer.data})
        else:
            return Response(
                {'error': 'No stores to list'},
                status=status.HTTP_404_NOT_FOUND)

class ListSearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self, request, format=None):
        if Store.objects.all().exists():
            slug = request.query_params.get('c')
            search = request.query_params.get('s')

            if len(search) == 0:
                search_results = Store.objects.order_by('likes').all()
            else:
                search_results = Store.objects.filter(
                    Q(description__icontains=search) | 
                    Q(name__icontains=search) | 
                    Q(location__icontains=search)
                )

            if len(slug) == 0:
                paginator = SmallSetPagination()
                results = paginator.paginate_queryset(search_results, request)
                serializer = StoreSerializer(results, many=True)
                return paginator.get_paginated_response({'search_stores': serializer.data})
            
            if not Category.objects.filter(slug=slug).exists():
                    return Response(
                        {'error': 'Category not found'},
                        status=status.HTTP_404_NOT_FOUND)
        
            category = Category.objects.get(slug=slug)

            # si la categoria tiene apdre, fitlrar solo por la categoria y no el padre tambien
            if category.parent:
                search_results = search_results.order_by('-likes').filter(category=category)
            else:
            # si esta categoria padre no tiene hijjos, filtrar solo la categoria
                if not Category.objects.filter(parent=category).exists():
                    search_results = search_results.order_by('-likes').filter(category=category)
                else:
                    categories = Category.objects.filter(parent=category)
                    filtered_categories = [category]

                    for cat in categories:
                        filtered_categories.append(cat)
                    
                    filtered_categories = tuple(filtered_categories)

                    search_results = search_results.order_by(
                        '-likes'
                    ).filter(category__in=filtered_categories)

          
            paginator = LargeSetPagination()
            results = paginator.paginate_queryset(search_results, request)
            serializer = StoreSerializer(results, many=True)
            return paginator.get_paginated_response({'search_stores': serializer.data})
        else:
            return Response({'error':'No stores found'}, status=status.HTTP_404_NOT_FOUND)

class ListRelatedView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, storeSlug, format=None):
        try:
            store_id = storeSlug
        except:
            return Response(
                {'error': 'Store slug must be an integer'},
                status=status.HTTP_404_NOT_FOUND)
        
        # Existe store sluf
        if not Store.objects.filter(slug=store_id).exists():
            return Response(
                {'error': 'Store with this slug does not exist'},
                status=status.HTTP_404_NOT_FOUND)
            
        category = Store.objects.get(slug=store_id).category

        if Store.objects.filter(category=category).exists():
            # Si la categoria tiene padrem filtrar solo por la categoria y no el padre tambien
            if category.parent:
                relatepd_stores = Store.objects.order_by(
                    '-likes'
                ).filter(category=category)
            else:
                if not Category.objects.filter(parent=category).exists():
                    relatepd_stores = Store.objects.order_by(
                        '-likes'
                    ).filter(category=category)
                
                else:
                    categories = Category.objects.filter(parent=category)
                    filtered_categories = [category]

                    for cat in categories:
                        filtered_categories.append(cat)

                    filtered_categories = tuple(filtered_categories)
                    relatepd_stores = Store.objects.order_by(
                        '-likes'
                    ).filter(category__in=filtered_categories)
                
            #Excluir producto que estamos viendo
            relatepd_stores = relatepd_stores.exclude(slug=store_id)
            relatepd_stores = StoreSerializer(relatepd_stores, many=True)

            if len(relatepd_stores.data) > 3:
                return Response(
                    {'relatepd_stores': relatepd_stores.data[:3]},
                    status=status.HTTP_200_OK)
            elif len(relatepd_stores.data) > 0:
                return Response(
                    {'relatepd_stores': relatepd_stores.data},
                    status=status.HTTP_200_OK)
            else:
                return Response(
                    {'error': 'No related stores found'},
                    status=status.HTTP_200_OK)
            
        else:
            return Response(
                {'error': 'No related stores found'},
                status=status.HTTP_200_OK)

class ListStoreByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Store.objects.all().exists():
           
            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)
            print(category)
            
            stores = Store.objects.order_by('-likes').all()

        # # Si la categoría tiene un padre, filtrar sólo por esta categoría y no por el padre también
        # if category.parent:
        #     posts = posts.filter(category=category)

        # # Si la categoría no tiene una categoría padre, significa que ella misma es una categoría padre
        # else: 

            #Filtrar categoria sola
            if not Category.objects.filter(parent=category).exists():
                stores = stores.filter(category=category)
            # Si esta categoría padre tiene hijos, filtrar por la categoría padre y sus hijos
            else:
                sub_categories = Category.objects.filter(parent=category)
                
                filtered_categories = [category]

                for cat in sub_categories:
                    filtered_categories.append(cat)

                filtered_categories = tuple(filtered_categories)

                stores = stores.filter(category__in=filtered_categories)

                print(stores)
                    
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(stores, request)
            serializer = StoreSerializer(results, many=True)
           

            return paginator.get_paginated_response({'store_list_category': serializer.data})
        else:
            return Response({'error':'No stores found'}, status=status.HTTP_404_NOT_FOUND)