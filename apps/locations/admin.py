from django.contrib import admin
from .models import Pais, EstadoODepartamento, Ciudad
# Register your models here.

admin.site.register(Pais)
admin.site.register(EstadoODepartamento)
admin.site.register(Ciudad)
