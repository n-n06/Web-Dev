from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


# Create your views here.

@api_view(['GET', 'POST']) 
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def company_detail(request, pk):
    company = get_object_or_404(Company, id=pk)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PATCH':
        serializer = CompanySerializer(
            company, 
            data=request.data, 
            partial=True
        )
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def vacancies_by_company(request, pk):
    vacancies = Vacancy.objects.filter(company=pk)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    # def get_queryset(self):
    #     company_id = self.kwargs.get('company_pk')
    #     if company_id:
    #         return Vacancy.objects.filter(company_id=company_id).order_by('id')
    #     return Vacancy.objects.all().order_by('id')


    @action(detail=False, methods=['get'], url_path='top_ten')
    def top_ten(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = self.get_serializer(vacancies, many=True)
        return Response(serializer.data)

