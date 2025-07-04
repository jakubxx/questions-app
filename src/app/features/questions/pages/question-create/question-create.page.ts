import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { QuestionCreatePresenter } from './question-create.presenter';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { QuestionFormComponent } from "../../components/question-form/question-form.component";

@Component({
  selector: 'app-question-create-page',
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink, QuestionFormComponent],
  templateUrl: './question-create.page.html',
  styleUrl: './question-create.page.scss',
})
export class QuestionCreatePage {
  presenter = inject(QuestionCreatePresenter);
}
