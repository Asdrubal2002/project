from django.urls import path
from .views import StoreDetailview, ListStoresView, ListSearchView, ListRelatedView, ListStoreByCategoryView

urlpatterns = [
    path('store/<storeSlug>', StoreDetailview.as_view()),
    path('get-stores', ListStoresView.as_view()),

    path('search', ListSearchView.as_view()),
    
    path('related/<storeSlug>', ListRelatedView.as_view()),

    path('by_category',ListStoreByCategoryView.as_view()),



    #4:40:12 otra busqueda

    #vamos en 5:00:32



]
