from rest_framework import routers
from rest_framework_nested.routers import NestedSimpleRouter

from api.views import CompanyViewSet, VacancyViewSet

router = routers.DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'vacancies', VacancyViewSet, basename='vacancies')

company_router = NestedSimpleRouter(router, r'companies',
                                    lookup='company')
company_router.register(r'vacancies', VacancyViewSet,
                        basename='company-vacancies')
