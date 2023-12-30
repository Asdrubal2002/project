# Generated by Django 5.0 on 2023-12-30 18:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0002_alter_ciudad_options_and_more'),
        ('store', '0006_alter_store_dislikes_alter_store_likes'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='city',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='locations.ciudad'),
            preserve_default=False,
        ),
    ]