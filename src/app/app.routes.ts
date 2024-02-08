import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { DiagnosisComponent } from './screens/diagnosis/diagnosis.component';
import { DiagnosisResultComponent } from './screens/diagnosis-result/diagnosis-result.component';
import { DrugRecomendationComponent } from './drug-recomendation/drug-recomendation.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'diagnosis',
    component: DiagnosisComponent,
  },
  {
    path: 'recomend',
    component: DrugRecomendationComponent,
  },
];
