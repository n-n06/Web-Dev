import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Vacancy } from '../models/vacancy.model';


@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://localhost:8000/api/companies/';
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}${id}/`);
  }

  createVacancy(vacancy: Vacancy): Observable<Vacancy> {
    return this.http.post<Vacancy>(this.apiUrl, vacancy);
  }

  updateVacancy(id: number, vacancy: Vacancy): Observable<Vacancy> {
    return this.http.put<Vacancy>(`${this.apiUrl}${id}/`, vacancy);
  }

  deleteVacancy(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

  getTopTen(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}top_ten/`);
  }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`http://localhost:8000/api/companies/${companyId}/vacancies/`);
  }
}
