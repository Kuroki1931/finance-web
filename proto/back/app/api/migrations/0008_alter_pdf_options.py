# Generated by Django 3.2 on 2021-05-03 15:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20210503_1530'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='pdf',
            options={'ordering': ('company', 'pdf_type', 'regist_date')},
        ),
    ]