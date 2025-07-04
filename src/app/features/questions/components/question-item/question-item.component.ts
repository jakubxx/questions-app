import { Component, inject, input, InputSignal } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionItemPresenter } from './question-item.presenter';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AnswerQuestionFormComponent } from '../answer-question-form/answer-question-form.component';

@Component({
  selector: 'app-question-item-component',
  templateUrl: './question-item.component.html',
  styleUrl: './question-item.component.scss',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    AnswerQuestionFormComponent,
  ],
})
export class QuestionItemComponent {
  private presenter = inject(QuestionItemPresenter);
  readonly question: InputSignal<Question | undefined> = input<
    Question | undefined
  >();

  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  saveAnswer(answer: string | boolean) {
    this.presenter.saveAnswer(this.question(), answer);
    this.expanded = false;
  }

  deleteQuestion() {
    this.presenter.deleteQuestion(this.question());
  }

  noPropagation(event: Event) {
    event.stopPropagation();
  } 
}
