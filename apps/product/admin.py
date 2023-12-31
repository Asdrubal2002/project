from django.contrib import admin
from .models import Product

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'store')
    list_display_links = ('id','name', 'store')
    search_fields = ('name', 'store')
    list_per_page = 25

admin.site.register(Product, ProductAdmin)
