from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=127, unique=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField(blank=True)
    link = models.URLField(blank=True)
    image_url = models.URLField()
    count = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)
    number_of_likes = models.IntegerField(default=0)
    rating = models.FloatField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    class Meta:
        unique_together = ('name', 'price')
        ordering = ('name',)

    def like(self, amount):
        self.number_of_likes += amount

    def __str__(self):
        return self.name


    