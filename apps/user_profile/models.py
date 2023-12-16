from django.db import models
from django.conf import settings
import uuid

User = settings.AUTH_USER_MODEL

# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    firs_name = models.CharField(max_length=20, null=True)
    last_name = models.CharField(max_length=20, null=True)
    slug =  models.SlugField(max_length=255, unique=True, default=uuid.uuid4)
    phone = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.user



