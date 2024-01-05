# Generated by Django 5.0 on 2024-01-04 19:24

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_viewcount'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='slugProduct',
            field=models.SlugField(default=uuid.uuid4, max_length=255, unique=True),
        ),
    ]
