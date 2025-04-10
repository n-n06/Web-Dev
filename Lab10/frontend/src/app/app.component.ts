import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { Company } from './models/company.model';
import { CompanyService } from './services/company.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
    this.router.navigate([`/companies/${companyId}/vacancies`])
  }
}
