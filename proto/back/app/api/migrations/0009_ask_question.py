# Generated by Django 3.2 on 2021-05-04 08:39

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_pdf_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('question', models.CharField(blank=True, max_length=500)),
                ('title', models.CharField(blank=True, max_length=50)),
                ('regist_date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ('regist_date',),
            },
        ),
        migrations.CreateModel(
            name='Ask',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('ask', models.CharField(blank=True, max_length=500)),
                ('regist_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('askto', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.question')),
            ],
            options={
                'ordering': ('regist_date',),
            },
        ),
    ]