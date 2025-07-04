import {
  Component,
  EventEmitter,
  inject,
  Output,
  effect,
  InputSignal,
  input,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuestionType } from '../../models/question.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { QuestionAnswerType } from '../../dtos/question.dto';

@Component({
  selector: 'app-answer-question-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './answer-question-form.component.html',
  styleUrls: ['./answer-question-form.component.scss'],
})
export class AnswerQuestionFormComponent {
  fb = inject(FormBuilder);

  @Output() saveAnswer = new EventEmitter<string | boolean>();

  questionType: InputSignal<QuestionType | undefined> = input<
    QuestionType | undefined
  >(QuestionType.Text);
  initialAnswer: InputSignal<QuestionAnswerType> =
    input<QuestionAnswerType>(undefined);

  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      textAnswer: [''],
      yesNoAnswer: [null, Validators.required],
    });

    effect(() => {
      const type = this.questionType();
      if (type === QuestionType.Text) {
        this.form
          .get('textAnswer')!
          .setValidators([Validators.required, Validators.minLength(1)]);
        this.form.get('yesNoAnswer')!.clearValidators();
        this.form.get('yesNoAnswer')!.setValue(null, { emitEvent: false });
      } else {
        this.form.get('yesNoAnswer')!.setValidators([Validators.required]);
        this.form.get('textAnswer')!.clearValidators();
        this.form.get('textAnswer')!.setValue('', { emitEvent: false });
      }
      this.form.get('textAnswer')!.updateValueAndValidity({ emitEvent: false });
      this.form
        .get('yesNoAnswer')!
        .updateValueAndValidity({ emitEvent: false });

      const ans = this.initialAnswer();

      if (type === QuestionType.Text && typeof ans === 'string') {
        this.form.get('textAnswer')!.setValue(ans, { emitEvent: false });
      } else if (type === QuestionType.YesNo && typeof ans === 'boolean') {
        this.form.get('yesNoAnswer')!.setValue(ans, { emitEvent: false });
      }
    });
  }

  get textAnswer() {
    return this.form.controls['textAnswer'];
  }

  get yesNoAnswer() {
    return this.form.controls['yesNoAnswer'];
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.questionType() === QuestionType.Text) {
      this.saveAnswer.emit(this.textAnswer.value);
    } else {
      this.saveAnswer.emit(this.yesNoAnswer.value);
    }
  }
}
