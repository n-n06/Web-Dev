from django.urls import path, include

from rest_framework import routers
from rest_framework_nested.routers import NestedSimpleRouter

from api.views import (
    VacancyViewSet, company_detail, 
    company_list, vacancies_by_company
)


router = routers.DefaultRouter()
router.register(r'vacancies', VacancyViewSet, basename='vacancies')

urlpatterns = [
    path('', include(router.urls)),
    path('companies/', company_list, name='companu-list'),
    path('companies/<int:pk>/', company_detail, name='company-detail'),
    path(
        'companies/<int:pk>/vacancies/', 
        vacancies_by_company, 
        name='company-vacancies'
    )
]
