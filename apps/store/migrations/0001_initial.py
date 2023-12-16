# Generated by Django 5.0 on 2023-12-16 00:12

import apps.store.models
import django.db.models.deletion
import django.utils.timezone
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('store_category', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=500)),
                ('location', models.CharField(blank=True, max_length=100, null=True)),
                ('phone', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('logo', models.ImageField(default='store/store_profile.jpg', upload_to=apps.store.models.store_directory_path_profile)),
                ('banner', models.ImageField(default='store/store_banner_bg.jpg', upload_to=apps.store.models.store_directory_path_banner)),
                ('schedule', models.CharField(max_length=100)),
                ('delivery', models.BooleanField(default=False)),
                ('nit', models.CharField(max_length=100)),
                ('verified', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('created_on', models.DateTimeField(default=django.utils.timezone.now)),
                ('url_pay', models.URLField(blank=True, null=True)),
                ('account_pay', models.CharField(blank=True, max_length=20, null=True)),
                ('slug', models.SlugField(default=uuid.uuid4, max_length=255, unique=True)),
                ('administrator', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store_category.category')),
                ('followers', models.ManyToManyField(blank=True, related_name='followers', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
