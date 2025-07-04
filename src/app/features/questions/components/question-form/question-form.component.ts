import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateQuestionPayload } from '../../dtos/create-question.payload';
import { QuestionTypeDto } from '../../dtos/question.dto';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-question-form-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent {
  fb = inject(FormBuilder);
  @Output() questionCreated = new EventEmitter<CreateQuestionPayload>();

  form: FormGroup;

  questionTypes = [
    { label: 'Text', value: QuestionTypeDto.Text },
    { label: 'Yes or not', value: QuestionTypeDto.YesNo },
  ];

  constructor() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      type: [QuestionTypeDto.Text, Validators.required],
    });
  }

  get title() {
    return this.form.controls['title'];
  }

  get type() {
    return this.form.controls['type'];
  }

  submit() {
    if (this.form.valid) {
      this.questionCreated.emit(this.form.value);
      this.form.reset({ type: QuestionTypeDto.Text });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
