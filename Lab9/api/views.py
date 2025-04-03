from pickle import FALSE

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


# Create your views here.
class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs.get('company_pk')
        if company_id:
            return Vacancy.objects.filter(company_id=company_id).order_by('id')
        return Vacancy.objects.all().order_by('id')


    @action(detail=False, methods=['get'], url_path='top_ten')
    def top_ten(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
