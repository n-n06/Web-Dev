from django.shortcuts import render
from rest_framework import permissions, viewsets
from unicodedata import category

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

# Create your views here.
class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that returns all categories
    """
    queryset = Category.objects.all().order_by('id')
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]

class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint that returns all products
    """
    # queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        category_id = self.kwargs.get('category_pk')
        if category_id:
            return Product.objects.filter(category_id=category_id).order_by('id')
        return Product.objects.all().order_by('id')
