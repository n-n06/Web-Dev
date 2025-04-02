from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField()
    city = models.CharField(max_length=128, null=True)
    address = models.TextField(null=True)

class Vacancy(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField()
    salary = models.FloatField(null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

