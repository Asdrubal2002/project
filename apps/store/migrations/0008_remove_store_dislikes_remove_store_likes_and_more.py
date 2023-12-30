# Generated by Django 5.0 on 2023-12-30 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0007_store_city'),
        ('user_profile', '0002_remove_userprofile_birthday'),
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
            field=models.ManyToManyField(blank=True, related_name='dislikes', to='user_profile.userprofile'),
        ),
        migrations.AddField(
            model_name='store',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='likes', to='user_profile.userprofile'),
        ),
    ]
