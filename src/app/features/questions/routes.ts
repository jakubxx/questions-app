import { Routes } from '@angular/router';

export const QuestionsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    data: { animation: 'ListPage' },
    loadComponent: () =>
      import('./pages/question-list/question-list.page').then(
        (m) => m.QuestionListPage,
      ),
  },
  {
    path: 'create',
    data: { animation: 'CreatePage' },
    loadComponent: () =>
      import('./pages/question-create/question-create.page').then(
        (m) => m.QuestionCreatePage,
      ),
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];
