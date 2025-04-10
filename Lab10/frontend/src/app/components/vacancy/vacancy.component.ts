import { Component } from '@angular/core';
import { VacancyService } from '../../services/vacancy.service';
import { Vacancy } from '../../models/vacancy.model';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
  vacancies: Vacancy[] = [];
  companyId!: number;

  constructor(
    private vacancyService: VacancyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.vacancyService.getVacanciesByCompany(this.companyId).subscribe(data => {
      this.vacancies = data;
    });
  }
}
