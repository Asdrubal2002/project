# Generated by Django 5.0 on 2023-12-18 18:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_remove_store_dislikes_remove_store_likes_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='store',
            name='followers',
        ),
    ]