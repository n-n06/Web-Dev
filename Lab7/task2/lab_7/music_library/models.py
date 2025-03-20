from django.db import models
from django.utils import timezone
from django.conf import settings

# Create your models here.

class Album(models.Model):
    artist = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    cover_url = models.URLField()
    release_date = models.DateTimeField(default=timezone.now())

    def release(self):
        self.release_date = timezone.now()
        self.save()

    def __str__(self):
        return f"'{self.title}' by {self.artist}"
