# Generated by Django 4.1.1 on 2022-09-27 11:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0004_alter_course_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='course',
            options={'ordering': ['title']},
        ),
    ]
