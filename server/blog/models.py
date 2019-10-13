from django.conf import settings
from django.db import models
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name='Создал')
    title = models.CharField(max_length=200, default='', verbose_name='Заголовок')
    text = models.TextField(verbose_name='Содержимое')
    # created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True, verbose_name='Дата публикации')

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    class Meta(object):
        verbose_name = 'Пост'
        verbose_name_plural = verbose_name + 'ы'


class Task(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Создал', on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name='Название')
    task_difficulty = models.SmallIntegerField(name='Сложность', max_length=10)
    text = models.TextField(name='Текст задачи')
    coins = models.IntegerField(max_length=9999, default=0, verbose_name='Ценность')
    publication_date = models.DateTimeField(blank=True, null=True, verbose_name='Дата публикации')

    def publish(self):
        self.publication_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    class Meta(object):
        verbose_name = 'Задача'
        verbose_name_plural = verbose_name[:len(verbose_name) - 1] + 'и'

class Course(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    text = models.TextField(verbose_name='Содержание')

    def __str__(self):
        return self.title

    class Meta(object):
        verbose_name = 'Курс'
        verbose_name_plural = verbose_name + 'ы'

class Problem(models.Model):
    PROBLEM_CHOICES = (
        ('first_choice', 'Первый вариант'),
        ('second_choice', 'Второй вариант')
    )
    title = models.CharField(max_length=200, default='', verbose_name='Название')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, verbose_name='Курс')
    text = models.TextField(verbose_name='Описание')
    first_option = models.TextField(verbose_name='Первый вариант ответа', default='')
    second_option = models.TextField(verbose_name='Второй вариант ответа', default='')
    third_option = models.TextField(verbose_name='Третий вариант ответа', default='')
    fourth_option = models.TextField(verbose_name='Четвертый вариант ответа', default='')
    correct_option = models.CharField(max_length=50, choices=PROBLEM_CHOICES, default='first_choice')
    task_difficulty = models.SmallIntegerField(verbose_name='Сложность', max_length=10, default=0)
    published_date = models.DateTimeField(blank=True, null=True, verbose_name='Дата публикации')

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    class Meta(object):
        verbose_name = 'Вопрос'
        verbose_name_plural = verbose_name + 'ы'
