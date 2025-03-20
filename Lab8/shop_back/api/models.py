from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=127, unique=True)

    def __str__(self):
        return self.name

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField(blank=True)
    imageUrl = models.URLField()
    isActive = models.BooleanField(default=False)
    number_of_likes = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def like(self, amount):
        self.number_of_likes += amount

    def __str__(self):
        return self.name


    