import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { QuestionFormComponent } from './question-form.component';

describe('QuestionFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionFormComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the QuestionFormComponent', () => {
    const fixture = TestBed.createComponent(QuestionFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
