from django.contrib import admin
from .models import Store


# Register your models here.

class StoreAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'category')
    list_display_links = ('id','name', 'category')
    search_fields = ('name', 'category')
    list_per_page = 25

admin.site.register(Store, StoreAdmin)

