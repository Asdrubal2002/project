from rest_framework import serializers
from .models import Pais, EstadoODepartamento, Ciudad

class PaisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pais
        fields = ['id', 'nombre']

class EstadoODepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstadoODepartamento
        fields = ['id', 'nombre', 'pais']

class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = ['id', 'nombre', 'estado_o_departamento']