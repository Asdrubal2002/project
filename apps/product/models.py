from django.db import models
from datetime import datetime
from apps.store.models import Store
from django.conf import settings
User = settings.AUTH_USER_MODEL
import os


# Create your models here.

def prodcut_directory_path_store(instance, filename):
    profile_picture_name = 'product/{0}/product.jpg'.format(instance.name)
    full_path = os.path.join(settings.MEDIA_ROOT, profile_picture_name)

    if os.path.exists(full_path):
        os.remove(full_path)

    return profile_picture_name

class Product(models.Model):
    class Meta:
        verbose_name = 'producto'
        verbose_name_plural = 'productos'

    name = models.CharField(max_length=255)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    description = models.TextField(max_length=300, blank=False)
    photo = models.ImageField(default='store/product.jpg', upload_to=prodcut_directory_path_store)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    compare_price = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.IntegerField(default=0)
    sold = models.IntegerField(default=0)
    date_created = models.DateTimeField(default=datetime.now)
    is_active = models.BooleanField(default=True)
    


    def get_thumbnail(self):
        if self.photo:
            return self.photo.url
        return ''

    def __str__(self):
        return self.name


