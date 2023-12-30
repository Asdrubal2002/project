from django.db import models

# Create your models here.

class Pais(models.Model):
    class Meta:
        verbose_name = 'Pais'
        verbose_name_plural = 'Paises'

    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class EstadoODepartamento(models.Model):
    class Meta:
        verbose_name = 'Estado'
        verbose_name_plural = 'Estados'

    pais = models.ForeignKey(Pais, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Ciudad(models.Model):
    class Meta:
        verbose_name = 'Ciudad'
        verbose_name_plural = 'Ciudades'
    estado_o_departamento = models.ForeignKey(EstadoODepartamento, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre
