import { CommonModule } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-item-component',
  imports: [CommonModule, MatCardModule],
  templateUrl: './question-item.component.html',
  styleUrl: './question-item.component.scss',
})
export class QuestionItemComponent {
  readonly question: InputSignal<Question | undefined> = input<
    Question | undefined
  >();
}
