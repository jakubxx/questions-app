import { inject, Injectable, signal } from '@angular/core';
import { Question, QuestionType } from '../models/question.model';
import { QuestionService } from './question.service';
import { CreateQuestionPayload } from '../dtos/create-question.payload';
import { AnswerQuestionPayload } from '../dtos/answer-question.payload';
import { QuestionTypeDto } from '../dtos/question.dto';
import { ToastService } from '../../../core/services/toast.service';

@Injectable({ providedIn: 'root' })
export class QuestionFacade {
  private questionService = inject(QuestionService);
  private questions = signal<Question[]>(this.questionService.load());
 private toastService = inject(ToastService);

  questions$ = this.questions.asReadonly();

  createQuestion(payload: CreateQuestionPayload) {
    const newQuestion: Question = {
      id: this.generateId(),
      title: payload.title,
      type:
        payload.type === QuestionTypeDto.Text
          ? QuestionType.Text
          : QuestionType.YesNo,
      answer: undefined,
    };
    this.questions.update((qs) => [...qs, newQuestion]);
    this.persist();

    this.toastService.show('Question has been added');
  }

  answerQuestion(payload: AnswerQuestionPayload) {
    this.questions.update((qs) =>
      qs.map((q) =>
        q.id === payload.id ? { ...q, answer: payload.answer } : q,
      ),
    );
    this.persist();

    this.toastService.show('Answer has been added');
  }

  deleteQuestion(id: string) {
    this.questions.update((qs) => qs.filter((q) => q.id !== id));
    this.persist();

    this.toastService.show('Question has been deleted');
  }

  private persist() {
    this.questionService.save(this.questions());
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
