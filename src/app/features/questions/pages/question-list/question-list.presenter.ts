import { computed, inject, Injectable } from '@angular/core';
import { QuestionFacade } from '../../data-access/question.facade';

@Injectable({ providedIn: 'root' })
export class QuestionListPresenter {
  private facade = inject(QuestionFacade);
  questions = this.facade.questions$;
  hasQuestions = computed(() => this.questions().length > 0);
}
