import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';

import { Company } from '../../models/company.model';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'hh-front';
  router = inject(Router);

  companies !: Company[];
  companyService = inject(CompanyService);

  ngOnInit() {
    this.companyService.getCompanies().subscribe(
      res => {
        this.companies = res;
      }
    )
  }

  goToCompanyVacancies(companyId: number) {
    this.router.navigate([`/companies/${companyId}/`])
  }
}
