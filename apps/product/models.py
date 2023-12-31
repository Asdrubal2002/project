from django.db import models
from datetime import datetime
from apps.store.models import Store
from apps.product_category.models import Category
from django.conf import settings
import uuid

User = settings.AUTH_USER_MODEL
import os

# Create your models here.

def prodcut_directory_path_store(instance, filename):
    profile_picture_name = "product/{0}/product.jpg".format(instance.name)
    full_path = os.path.join(settings.MEDIA_ROOT, profile_picture_name)

    if os.path.exists(full_path):
        os.remove(full_path)

    return profile_picture_name


class Product(models.Model):
    class Meta:
        verbose_name = "producto"
        verbose_name_plural = "productos"

    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(max_length=300, blank=False)
    photo = models.ImageField(
        default="store/product.jpg", upload_to=prodcut_directory_path_store
    )
    slugProduct =  models.SlugField(max_length=255, unique=True, default=uuid.uuid4)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    compare_price = models.DecimalField(max_digits=6, decimal_places=2)
    views = models.IntegerField(default=0, blank=True)
    quantity = models.IntegerField(default=0)
    sold = models.IntegerField(default=0)
    date_created = models.DateTimeField(default=datetime.now)
    is_active = models.BooleanField(default=True)

    def get_thumbnail(self):
        if self.photo:
            return self.photo.url
        return ""

    def __str__(self):
        return self.name


class ViewCount(models.Model):
    product = models.ForeignKey(Product, related_name='post_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"