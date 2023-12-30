# Generated by Django 5.0 on 2023-12-30 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0009_alter_store_dislikes_alter_store_likes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='store',
            name='dislikes',
        ),
        migrations.RemoveField(
            model_name='store',
            name='likes',
        ),
        migrations.AddField(
            model_name='store',
            name='dislikes',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='store',
            name='likes',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]