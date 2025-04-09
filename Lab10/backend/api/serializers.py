from rest_framework import serializers, viewsets

from api.models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class VacancySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=256)
    description = serializers.CharField(max_length=20000, allow_null=True)
    salary = serializers.FloatField(allow_null=True)
    company = serializers.IntegerField()

    def create(self, validated_data):
        company_id = validated_data.pop('company')
        company = Company.objects.get(id=company_id)
        return Vacancy.objects.create(company=company, **validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)

        company_id = validated_data.get('company')
        if company_id is not None:
            instance.company = Company.objects.get(id=company_id)

        instance.save()
        return instance
    
    def to_representation(self, instance):
        return {
            'id' : instance.id,
            'name' : instance.name,
            'description' : instance.description,
            'salary' : instance.salary,
            'company' : instance.company.id
        }


