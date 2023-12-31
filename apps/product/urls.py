from django.urls import path
from .views import ListProductsView

urlpatterns = [
    path('product/<storeSlug>', ListProductsView.as_view()),
    

]