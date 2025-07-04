import { inject, Injectable } from '@angular/core';
import { QuestionFacade } from '../../data-access/question.facade';
import { CreateQuestionPayload } from '../../dtos/create-question.payload';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class QuestionCreatePresenter {
  private facade = inject(QuestionFacade);
  private router = inject(Router);

  createQuestion(payload: CreateQuestionPayload) {
    this.facade.createQuestion(payload);
    this.router.navigate(['/list']);
  }
}
