from django.conf import settings
from django.db import models
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    task_title = models.CharField(max_length=200)
    text = models.TextField()
    # created_date = models.DateTimeField(default=timezone.now)
    coins = models.IntegerField(max_length=9999, default=0)
    published_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    class Meta(object):
        verbose_name = 'Пост'
        verbose_name_plural = verbose_name


class Task(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, name='Админ', on_delete=models.CASCADE)
    task_difficulty = models.SmallIntegerField(name='Сложность', max_length=10)
    text = models.TextField(name='Текст задачи')
    publication_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.publication_date = timezone.now()
        self.save()

    def __str__(self):
        return self.task_title

    class Meta(object):
        verbose_name = 'Задача'
        verbose_name_plural = verbose_name
