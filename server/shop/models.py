from django.conf import settings
from django.db import models
from django.utils import timezone


class Product(models.Model):
    title = models.CharField(max_length=200, default='', verbose_name='Название товара')
    photo = models.TextField(default='')
    sterling = models.IntegerField(default=100)
    published_date = models.DateTimeField(blank=True, null=True, verbose_name='Дата публикации')

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    @property
    def cost(self):
        return self.sterling

    class Meta(object):
        verbose_name = 'Товар'
        verbose_name_plural = verbose_name + 'ы'
