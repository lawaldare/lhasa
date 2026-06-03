import { Routes } from '@angular/router';
import { Lhasa } from './components/lhasa';
import { ChemSearch } from './components/chem-search';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lhasa',
    pathMatch: 'full',
  },
  {
    path: 'lhasa',
    component: Lhasa,
  },
  {
    path: 'chem-search',
    component: ChemSearch,
  },
];
