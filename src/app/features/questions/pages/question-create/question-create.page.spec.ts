import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { QuestionCreatePage } from './question-create.page';

describe('QuestionCreatePage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionCreatePage],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the QuestionCreatePage', () => {
    const fixture = TestBed.createComponent(QuestionCreatePage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
