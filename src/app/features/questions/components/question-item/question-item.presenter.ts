import { inject, Injectable } from '@angular/core';
import { QuestionFacade } from '../../data-access/question.facade';
import { Question } from '../../models/question.model';

@Injectable({ providedIn: 'root' })
export class QuestionItemPresenter {
  private facade = inject(QuestionFacade);

  saveAnswer(question: Question | undefined, answer: string | boolean) {
    if (!question) return;
    this.facade.answerQuestion({ id: question.id, answer });
  }

  deleteQuestion(question: Question | undefined) {
    if (!question) return;
    this.facade.deleteQuestion(question.id);
  }
}
