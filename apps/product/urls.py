from django.urls import path
from .views import ListProductsByCategoryView, ProductsByStore, SearchProductInView, ProductDetailView

urlpatterns = [
    path('product/<storeSlug>/<categorySlug>', ListProductsByCategoryView.as_view()),
    path('products/<storeSlug>', ProductsByStore.as_view()),
    path('search', SearchProductInView.as_view(), name='search_in_store_category'),
    path('detail/<slugProduct>',ProductDetailView.as_view()),

    

]