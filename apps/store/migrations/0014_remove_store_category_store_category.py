# Generated by Django 5.0 on 2024-01-01 01:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0013_remove_store_category_store_category'),
        ('store_category', '0002_category_slug_category_views_viewcount'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='store',
            name='category',
        ),
        migrations.AddField(
            model_name='store',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='store_category.category'),
            preserve_default=False,
        ),
    ]