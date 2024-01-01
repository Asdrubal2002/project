from django.urls import path
from .views import ListProductsByCategoryView, ProductsByStore

urlpatterns = [
    path('product/<storeSlug>/<categorySlug>', ListProductsByCategoryView.as_view()),
    path('products/<storeSlug>', ProductsByStore.as_view()),

    

]