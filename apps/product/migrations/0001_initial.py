# Generated by Django 5.0 on 2023-12-30 20:13

import apps.product.models
import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('store', '0012_remove_store_dislikes_remove_store_likes_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=300)),
                ('photo', models.ImageField(default='store/product.jpg', upload_to=apps.product.models.prodcut_directory_path_store)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('compare_price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('quantity', models.IntegerField(default=0)),
                ('sold', models.IntegerField(default=0)),
                ('date_created', models.DateTimeField(default=datetime.datetime.now)),
                ('is_active', models.BooleanField(default=True)),
                ('store', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.store')),
            ],
        ),
    ]