# Generated by Django 4.1.1 on 2022-09-27 10:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0002_alter_course_table'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='course',
            options={'ordering': ['title', 'description']},
        ),
    ]
