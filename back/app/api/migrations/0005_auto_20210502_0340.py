# Generated by Django 3.2 on 2021-05-02 03:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_company'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pdf',
            name='company_name',
        ),
        migrations.RemoveField(
            model_name='pdf',
            name='company_number',
        ),
    ]
