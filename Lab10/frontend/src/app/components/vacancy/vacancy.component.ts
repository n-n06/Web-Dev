import { Component, inject } from '@angular/core';
import { VacancyService } from '../../services/vacancy.service';
import { Vacancy } from '../../models/vacancy.model';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
  vacancies: Vacancy[] = [];
  companyId!: number;
  companyName!: string;

  private vacancyService: VacancyService = inject(VacancyService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private companyService: CompanyService = inject(CompanyService);
  

  ngOnInit() {
    this.companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompany(this.companyId).subscribe(res => {
      this.companyName = res.name;
    })
    this.vacancyService.getVacanciesByCompany(this.companyId).subscribe(data => {
      this.vacancies = data;
    });
  }
}
