from rest_framework import routers
from rest_framework_nested.routers import NestedDefaultRouter, NestedSimpleRouter

from api import views


router = routers.DefaultRouter()

router.register(r'categories', views.CategoryViewSet)
router.register(r'products', views.ProductViewSet, basename='products')

category_router = NestedSimpleRouter(router, r'categories', lookup='category')
category_router.register(r'products', views.ProductViewSet, basename='category-products')