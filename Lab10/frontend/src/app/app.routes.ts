import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HeaderComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                title: 'HeadHunters - Companies List'
              },
              {
                path: 'companies',
                component: HomeComponent,
                title: 'Companies'
              },
              {
                path: 'companies/:id',
                component: VacancyComponent,
                title: 'Company Vacancies'
              }
        ]
    }
    
];
