import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AnswerQuestionFormComponent } from './answer-question-form.component';

describe('AnswerQuestionFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerQuestionFormComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the AnswerQuestionFormComponent', () => {
    const fixture = TestBed.createComponent(AnswerQuestionFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
