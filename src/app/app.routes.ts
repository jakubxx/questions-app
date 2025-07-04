import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/questions/routes').then((m) => m.QuestionsRoutes),
  },
];
