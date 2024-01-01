from django.contrib import admin
from .models import Product

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'category')
    list_display_links = ('id','name', 'category')
    search_fields = ('name', 'category')
    list_per_page = 25

admin.site.register(Product, ProductAdmin)
