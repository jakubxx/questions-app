import { Component, inject } from '@angular/core';
import { QuestionListPresenter } from './question-list.presenter';
import { CommonModule } from '@angular/common';
import { QuestionItemComponent } from '../../components/question-item/question-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-question-list-page',
  templateUrl: './question-list.page.html',
  styleUrl: './question-list.page.scss',
  imports: [
    CommonModule, 
    QuestionItemComponent, 
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  standalone: true,
})
export class QuestionListPage {
  presenter = inject(QuestionListPresenter);
}
